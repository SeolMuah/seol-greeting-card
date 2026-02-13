# 🧧 설날 연하장 - Supabase 설정 가이드

이 프로젝트의 **덕담 나누기(Greeting Board)** 기능을 사용하기 위해서는 Supabase 연동이 필요합니다.  
다음 단계를 따라 설정을 완료해주세요.

## 1. Supabase 프로젝트 생성
1. [Supabase](https://supabase.com/)에 접속하여 회원가입/로그인합니다.
2. **New Project**를 클릭하여 새 프로젝트를 생성합니다.
3. Database Password를 안전하게 설정하고, **Region**은 `Korea (Seoul)`을 선택하는 것을 권장합니다.

## 2. 테이블 생성 (SQL 실행)
1. 생성된 프로젝트 대시보드 왼쪽 메뉴에서 **SQL Editor** 아이콘을 클릭합니다.
2. **New query**를 클릭하여 빈 쿼리 창을 엽니다.
3. 아래의 SQL 코드를 복사하여 붙여넣고, 우측 하단의 **Run** 버튼을 클릭합니다.

```sql
-- 1. 메시지 테이블 생성
create table public.greeting_messages (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  nickname text not null,
  message text not null,
  color text null,
  constraint greeting_messages_pkey primary key (id)
);

-- 2. 댓글 테이블 생성
create table public.greeting_comments (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  message_id uuid not null,
  nickname text not null,
  content text not null,
  constraint greeting_comments_pkey primary key (id),
  constraint greeting_comments_message_id_fkey foreign key (message_id) references greeting_messages (id) on delete cascade
);

-- 3. 보안 정책(RLS) 설정 - 누구나 읽고 쓸 수 있음
alter table public.greeting_messages enable row level security;
alter table public.greeting_comments enable row level security;

create policy "Anyone can read messages" on public.greeting_messages for select using (true);
create policy "Anyone can insert messages" on public.greeting_messages for insert with check (true);

create policy "Anyone can read comments" on public.greeting_comments for select using (true);
create policy "Anyone can insert comments" on public.greeting_comments for insert with check (true);
```

## 3. 내 프로젝트와 연결하기
1. 대시보드 왼쪽 하단의 **Settings (톱니바퀴 아이콘)** 클릭 -> **API**를 선택합니다.
2. **Project URL**과 **Project API keys (anon, public)** 값을 확인합니다.
3. VS Code에서 `script/config.js` 파일을 엽니다.
4. 아래와 같이 값을 복사하여 붙여넣습니다.

```javascript
// script/config.js
const SUPABASE_URL = '여기에_URL_붙여넣기';
const SUPABASE_ANON_KEY = '여기에_anon_key_붙여넣기';
```

## 4. (선택 사항) 실시간 업데이트 설정
다른 사람이 쓴 글을 새로고침 없이 바로 보고 싶다면:
1. Supabase 대시보드 -> **Database** -> **Replication** 메뉴로 이동합니다.
2. `supabase_realtime` 설정을 확인하고, `greeting_messages` 테이블의 토글을 켭니다.

## 5. 🚀 배포 전 테스트 데이터 삭제하기
테스트로 작성한 덕담과 댓글을 배포 전에 깔끔하게 삭제하려면:

1. Supabase 대시보드 -> **SQL Editor** -> **New query**를 엽니다.
2. 아래 SQL을 붙여넣고 **Run**을 클릭합니다.

```sql
-- 1) 댓글 전체 삭제 (먼저 실행)
delete from public.greeting_comments;

-- 2) 덕담 메시지 전체 삭제
delete from public.greeting_messages;
```

> ⚠️ **주의**: 위 명령어는 **모든** 덕담과 댓글을 삭제합니다. 실행 전에 꼭 확인하세요!

> 💡 **팁**: `greeting_comments`는 `on delete cascade`로 설정되어 있어서, 사실 메시지만 삭제해도 관련 댓글이 자동 삭제됩니다. 하지만 안전하게 댓글부터 삭제하는 것을 권장합니다.

---
이제 **덕담 나누기** 페이지가 정상적으로 작동합니다! 🎉

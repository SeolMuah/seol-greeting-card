-- 1. 메시지 테이블 생성 (messages table)
create table public.greeting_messages (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  nickname text not null,
  message text not null,
  color text null, -- 포스트잇 색상
  constraint greeting_messages_pkey primary key (id)
);

-- 2. 댓글 테이블 생성 (comments table)
create table public.greeting_comments (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  message_id uuid not null,
  nickname text not null,
  content text not null,
  constraint greeting_comments_pkey primary key (id),
  constraint greeting_comments_message_id_fkey foreign key (message_id) references greeting_messages (id) on delete cascade
);

-- 3. RLS(Row Level Security) 활성화
-- 기본적으로 테이블 생성 시 RLS가 활성화될 수 있지만, 명시적으로 활성화합니다.
alter table public.greeting_messages enable row level security;
alter table public.greeting_comments enable row level security;

-- 4. 정책(Policy) 추가: 누구나 읽고 쓸 수 있도록 설정 (익명 게시판)
-- 메시지 테이블 정책
create policy "Anyone can read messages" 
on public.greeting_messages for select using (true);

create policy "Anyone can insert messages" 
on public.greeting_messages for insert with check (true);

-- 댓글 테이블 정책
create policy "Anyone can read comments" 
on public.greeting_comments for select using (true);

create policy "Anyone can insert comments" 
on public.greeting_comments for insert with check (true);

-- 5. (선택사항) Realtime 활성화
-- Supabase 대시보드에서: Database -> Replication -> Source -> greeting_messages, greeting_comments 테이블 선택

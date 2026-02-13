# 🧧 설날 연하장

설날을 기념하기 위한 모바일 연하장 웹 애플리케이션입니다.
연하장을 클릭하면 메시지를 확인하고, 음악을 재생하며, 다른 사람들과 공유할 수 있습니다.

## 기능

- **연하장 보기**: 카드를 클릭하면 앞면/뒷면이 플립되며 새 메시지가 타이핑됩니다.
- **배경 음악 재생**: 연하장 보기 시 자동으로 배경 음악이 재생됩니다.
- **과제 안내 페이지**: 설날 과제 안내와 동기부여 영상을 확인할 수 있습니다.
- **덕담 나누기 게시판**: 서로에게 따뜻한 덕담을 남기고 댓글을 달 수 있는 게시판입니다.

## 🧧 주요 페이지

### 🏠 메인 (`index.html`)
- 연하장 앞면/뒷면 플립 및 메시지 타이핑 효과
- 과제 안내, 덕담 나누기 페이지 이동 버튼

### 📢 과제 안내 (`homework.html`)
- 과제 내용 및 동기부여 영상 (YouTube Shorts 썸네일 링크)

### 🧧 덕담 나누기 (`board.html`)
- Supabase 기반 실시간 메시지 게시판
- 포스트잇 스타일 메시지 카드 (날짜, 닉네임 표시)
- 메시지 클릭 시 상세 보기 모달 (날짜 포함)
- 댓글 기능 (날짜 표시, 닉네임 자동 저장)

#### Supabase 설정
1. [Supabase](https://supabase.com) 프로젝트 생성
2. `supabase_setup.sql` 스크립트를 실행하여 테이블 생성
3. `script/config.js`에 본인의 URL과 키 입력:

```javascript
// script/config.js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

> 자세한 설정 방법은 `SUPABASE_GUIDE.md`를 참고하세요.

## 파일 구조

- `index.html` — 메인 연하장 페이지
- `homework.html` — 과제 안내 페이지
- `board.html` — 덕담 나누기 게시판
- `style/`
  - `index.css` — 전체 스타일 시트
  - `flip.css` — 카드 플립 애니메이션
  - `media.css` — 반응형 디자인
- `script/`
  - `index.js` — 연하장 플립/메시지 타이핑
  - `music.js` — 배경 음악 제어
  - `share.js` — 공유 기능
  - `board.js` — 덕담 게시판 로직
  - `config.js` — Supabase 설정
- `images/` — 연하장 이미지 (앞/뒷면, 배경)
- `audio/` — 배경 음악 파일
# 추석 모바일 연하장

이 프로젝트는 추석을 기념하기 위한 모바일 연하장 웹 애플리케이션입니다. 사용자는 연하장을 클릭하여 메시지를 확인하고, 음악을 재생하며, 연하장을 다른 사람들과 공유할 수 있습니다.

## 기능

- **연하장 앞면/뒷면 보기**: 연하장을 클릭하여 앞면과 뒷면을 플립하여 볼 수 있습니다.
- **배경 음악 재생**: 연하장에 배경 음악을 추가하여 분위기를 더할 수 있습니다.
- **메시지 갱신**: 연하장의 메시지를 갱신하여 다른 메시지를 확인할 수 있습니다.
- **공유하기**: 연하장을 소셜 미디어 등을 통해 다른 사람들과 공유할 수 있습니다.

## 🧧 New Features (2026 Seollal Update)

### 📢 Homework Guide (`homework.html`)
- Contains the statistical assignment details and a motivational video.

### 🧧 Greeting Board (`board.html`)
- A guestbook feature where users can leave messages and comments.
- **Supabase Setup Required**:
    1.  Create a Supabase project.
    2.  Run the SQL script provided in `implementation_plan.md` to create tables.
    3.  Open `script/config.js` and enter your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

```javascript
// script/config.js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

## 파일 구조

- `index.html`: 웹 페이지의 구조와 내용을 정의.
- `style/`:
  - `index.css`: 기본 스타일 시트.
  - `flip.css`: 연하장 플립 애니메이션에 대한 스타일 시트.
  - `media.css`: 반응형 디자인을 위한 스타일 시트.
- `script/`:
  - `index.js`: 연하장 플립 및 메시지 갱신 기능을 처리하는 JavaScript 파일.
  - `music.js`: 배경 음악의 재생 및 제어를 위한 JavaScript 파일.
  - `share.js`: 공유 기능을 처리하는 JavaScript 파일.
- `images/`:
  - `postcard.png`: 연하장 카드의 앞면 이미지.
  - `backcard.png`: 연하장 카드의 뒷면 이미지.
  - `background.png`: 연하장의 배경 이미지.
- `audio/`:
  - `music.mp3`: 연하장에 사용되는 배경 음악 파일.
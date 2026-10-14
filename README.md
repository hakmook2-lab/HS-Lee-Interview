# Coral 인터뷰 연습

Coral FLNG S.A. Business Support Manager 파견 영어 면접을 연습하는 웹 앱입니다.
면접관 목소리로 영어 질문을 듣고, 타이머를 켜고 답한 뒤, 모범답변·꼬리질문과 비교해 볼 수 있습니다.

## 기능

| 메뉴 | 내용 |
|---|---|
| 질문 연습 | 질문 20개를 하나씩 듣고 답하기, 답변 시간·단어 수·말 속도·군말 횟수 표시, 모범답변 듣기, 꼬리질문 연습, 연습 상태 기록 |
| 모의면접 | 질문 글자를 숨긴 채 소리로만 진행 (5개 또는 8개), 자기소개로 시작, 윤리 질문 1개 포함, 꼬리질문과 역질문 순서까지 진행 |
| 질문 목록 | 분류별·연습 상태별로 질문 찾기 |
| 표현·팁 | 위기 때 쓰는 영어 표현, 역질문 예시, 면접관이 보는 영어 포인트 |

- AI 피드백: 답변을 마친 뒤 **"AI 피드백 요청문 복사"**를 누르고 Claude 앱 새 대화에 붙여 넣으면 점수, 표현 교정, 개선 답변을 받을 수 있습니다.
- 연습 기록과 설정은 사용하는 기기의 브라우저에 저장됩니다. 기기를 바꾸면 기록이 이어지지 않습니다.
- 홈 화면에 추가하면 앱처럼 열리고, 한 번 연 뒤에는 인터넷 없이도 질문 연습이 됩니다.

## 파일 구성

```
index.html             앱 화면과 동작 (한 파일)
questions.js           질문 20개, 모범답변, 꼬리질문 데이터
manifest.webmanifest   홈 화면 추가용 설정
sw.js                  오프라인 사용을 위한 캐시
icons/                 앱 아이콘
.nojekyll              GitHub Pages가 파일을 그대로 쓰도록 하는 빈 파일
```

## GitHub Pages로 올리는 방법

1. GitHub에서 **New repository**를 만듭니다. (예: `coral-interview`)
2. 저장소 화면에서 **Add file → Upload files**를 누르고, 압축을 푼 폴더 안의 파일과 `icons` 폴더를 모두 끌어다 놓은 뒤 **Commit changes**를 누릅니다.
   - `.nojekyll`은 숨김 파일이라 보이지 않을 수 있습니다. 없어도 동작에는 문제없습니다.
3. **Settings → Pages**로 이동합니다.
4. **Source**를 `Deploy from a branch`, **Branch**를 `main` / `/(root)`로 고르고 **Save**를 누릅니다.
5. 1~2분 뒤 `https://<GitHub 아이디>.github.io/coral-interview/` 주소로 열립니다.

명령어를 쓰는 경우:

```bash
git init
git add .
git commit -m "Coral interview practice app"
git branch -M main
git remote add origin https://github.com/<GitHub 아이디>/coral-interview.git
git push -u origin main
```

## 공개 범위 주의

- **공개(Public) 저장소에 올리면 누구나 내용을 볼 수 있습니다.** 이 앱에는 지원자의 경력과 가스공사 사업 관련 내용이 들어 있으므로, 올리기 전에 공개해도 되는지 확인하세요.
- 비공개(Private) 저장소에서 GitHub Pages를 쓰려면 유료 요금제(GitHub Pro 이상)가 필요합니다.
- 비공개로 쓰려면 저장소는 Private으로 두고 `index.html`을 내려받아 기기에서 직접 여는 방법도 있습니다. 이 경우 오프라인 캐시는 동작하지 않지만 나머지 기능은 그대로 쓸 수 있습니다.

## 사용 환경

| 항목 | 지원 |
|---|---|
| 질문 읽어 주기 (음성 합성) | 대부분의 최신 브라우저 |
| 답변 받아 적기 (음성인식) | Chrome, Edge, Safari (iPhone·Mac). Firefox는 지원하지 않음 |
| 내 목소리 녹음·다시 듣기 | 설정에서 켜야 하며, 마이크 허용 필요 |

- 음성인식이 안 되는 환경에서는 원형 버튼으로 타이머를 켜고, 키보드의 마이크(받아쓰기) 버튼으로 말하거나 직접 입력하면 됩니다.
- 면접관 목소리는 기기에 설치된 영어 음성을 사용합니다. 설정에서 목소리와 속도를 바꿀 수 있습니다.

## 내용 고치기

- 질문이나 모범답변은 `questions.js`만 고치면 됩니다.
- 모범답변의 `[ ]` 부분은 본인의 실제 사례·수치로 바꾸세요. 앱에서는 붉은색으로 표시됩니다.
- 파일을 고친 뒤 홈 화면 앱에 바로 반영되지 않으면, `sw.js`의 `VERSION` 값(예: `coral-interview-v1` → `v2`)을 올린 뒤 다시 올리세요.

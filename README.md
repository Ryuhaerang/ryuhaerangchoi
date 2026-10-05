# Academic Website

Ryuhaerang Choi의 개인 학술 홈페이지 개편 프로젝트.

## 현재 단계

GitHub 비공개 저장소와 로컬 작업 폴더를 준비했습니다. 웹사이트 구현 및 배포 설정은 아직 시작하지 않았습니다.

- GitHub 저장소: https://github.com/Ryuhaerang/academic-website
- 공개 범위: **Private** — 사용자 선택
- 기존 홈페이지: https://ryuhaerang.github.io/ryuhaerangchoi/
- 기존 소스: https://github.com/Ryuhaerang/ryuhaerangchoi

## 개발 방향

권장 구성은 **Astro의 정적 페이지 + 직접 작성한 CSS + 별도 콘텐츠 파일**입니다.
기존 테마를 복사하는 대신 필요한 레이아웃을 작게 만들고,
논문·뉴스를 추가할 때 화면 구성 코드를 수정하지 않도록 분리합니다.
구체적인 도구 버전과 파일 구조는 다음 구현 단계에서 확정합니다.

기획상 메뉴는 Home, Publications, Experience, Teaching, Other입니다.
실제 공개할 콘텐츠에 맞춰 메뉴 이름과 페이지 구성을 조정합니다.

## 화면 설계 기준

- 넓은 화면: 소개와 사진을 나란히, 경력과 학력을 두 열로 배치.
- 좁은 화면: 한 열로 전환하고 메뉴와 연락처가 자연스럽게 줄바꿈되도록 설계.
- 본문 최대 폭, 충분한 줄간격, 일관된 제목 계층으로 가독성 확보.
- 고정 높이에 내용을 가두지 않고 세로로 짧은 화면에서도 스크롤 가능하게 구성.
- 긴 논문 제목·URL, 키보드 탐색, 확대 화면에서도 내용이 잘리지 않도록 확인.
- 320px, 390px, 768px, 1280px 폭과 짧은 가로 화면에서 점검.

## 콘텐츠 원칙

첨부 시안은 디자인 참고용입니다. 시안의 이메일, 학력, 날짜, 뉴스는
현재 홈페이지와 다른 부분이 있으므로 그대로 옮기지 않습니다.
기존 홈페이지의 실제 정보를 출발점으로 삼고, 변경 사항은 사용자와 확인합니다.

## 진행 순서

1. 비공개 GitHub 저장소 생성 및 로컬 저장소 연결.
2. Astro 개발 환경과 최소 홈 페이지 준비.
3. 공통 메뉴·서체·여백과 반응형 레이아웃 구현.
4. 검증된 소개·논문·뉴스·경력 콘텐츠 이관.
5. 모바일·데스크톱·키보드·확대 화면 확인.
6. 미리보기 검토 후 배포 및 도메인 연결.

## 배포 검토

비공개 저장소에서 GitHub Pages를 사용하려면 지원되는 요금제가 필요합니다.
개인 계정은 GitHub Pro 여부를 배포 단계에서 확인합니다.
소스 저장소의 비공개 여부와 방문자가 보는 홈페이지의 공개 여부는 별개입니다.

- Astro GitHub Pages 배포: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages 이용 조건: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Astro 콘텐츠 관리: https://docs.astro.build/en/guides/content-collections/

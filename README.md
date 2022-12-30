# 영화 트레일러 사이트 (원티드 프리온보딩 프론트엔드 코스 3차 팀 프로젝트)

## 목차

1. [배포 링크](#배포-링크)
2. [기술 스택](#기술-스택)
3. [요구 사항](#요구-사항)
4. [Commit & Merge Team Convention](#commit--merge-team-convention)
5. [실행 방법](#실행-방법)
6. [디렉토리 구조](#디렉토리-구조)
7. [Best Practice](#best-practice)
   <br/>

## 배포 링크

- https://movie-theater.chloemin.com
  <br/>

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)  
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)  
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
<br/>

## 요구 사항

1. 공통

- Loading 상태 표기
- Infinite scroll
- 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
- API Response 데이터 캐쉬 (라이브러리 사용)

2. movies / 리스트 페이지

- 한번에 가져올 데이터 최대 20개
- 제목, 포스터, 별점 표시
- 포스터 없는 경우, 대체 이미지 사용

3. movie / 상세 페이지

- 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
- 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
- 그 외의 데이터 추가 활용 여부는 자유

4. search

- 제목, 포스터, 별점
- 포스터 없는 경우, 대체 이미지 사용
  <br/>

## Commit & Merge Team Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```

<br/>

## 실행 방법

1. repository clone

```
$ git clone https://github.com/MINYUKYUNG/movie-theater.git
```

2. dependencies install

```
npm install
```

3. project start

```
npm run start
```

<br/>

## 디렉토리 구조

```
root
├── .babelrc
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── tsconfig.json
├── public
|   ├── favicon.ico
|   └── index.html
├── config
|   ├── webpack.common.js
|   ├── webpack.dev.js
|   └── webpack.prod.js
└── src
    ├── apis
    ├── assets
    ├── components
    ├── hooks
    ├── pages
    ├── routes
    ├── styles
    ├── App.jsx
    ├── index.js
    └── types.d.ts
```

| 디렉토리   | 구분                                        |
| ---------- | ------------------------------------------- |
| apis       | api함수들을 모아둔 디렉토리                 |
| assets     | 더미 및 이미지 등 로컬 파일 디렉토리        |
| components | 코드 재사용을 위한 컴포넌트 관리형 디렉토리 |
| hooks      | react 커스텀 hook을 관리하는 디렉토리       |
| pages      | url주소에 따른 페이지 구성 디렉토리         |
| routes     | 라우팅 관련 처리 디렉토리                   |
| styles     | 전역으로 사용하는 style 관리 디렉토리       |

<br/>

## Best Practice

1.  컴포넌트에서 tsx 파일과 styled-component 파일 분리

    💡 이유 : 가독성을 위해 분리하였습니다. styled-componet 파일이 길어지면서, 한 파일 내에서 JSX 코드와 CSS 코드를 동시에 보기가 어려워졌습니다. 일반 컴포넌트와 구분하기 위해, style 컴포넌트 앞에는 S.을 붙여 네이밍 했습니다.

2.  공통 레이아웃을 위한 컴포넌트들은, 하나의 Layout으로 묶어 전체 적용

    💡 이유 : 중복 사용되는 코드의 양을 줄이기 위해서 입니다. 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하됩니다. 또한, import의 빈도도 줄일수 있습니다.

3.  index 파일을 통해 import 경로 줄이기

    💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기 때문입니다. 각 root 폴더에 index.ts 파일을 만들어 export default 핸들링을 했습니다.

4.  커스텀 훅 생성

    💡 이유 : 무한스크롤이 들어가는 페이지들에서 재사용을 위해 컴포넌트화 했습니다. cache 개념이 쓰이는 부분을 커스텀훅으로 만들어서 재사용 했습니다.

5.  공통 컴포넌트는 components 디렉토리에 구성

    💡 이유 : HomePage, TopRatedPage, NowPlayingPage, UpComingPage, SearchPage에서 동일한 카드 컴포넌트 형식으로 영화정보를 구성하여 보여주려고 하기 때문에 분리하여 구성했습니다.

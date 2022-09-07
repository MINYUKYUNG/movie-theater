# 🎉 원티드 프리온보딩 프론트엔드 코스 3차 과제

## 과제 소개
- 목표 : 영화 API활용한 트레일러 사이트 만들기
- 작업기간 : 2022.09.06 ~ 2022.09.08
<br/>

## 배포 링크

https://hotsix-imlab.netlify.app/

<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|
|[임성훈](https://github.com/sasumpi123)|프론트엔드|좋은회사로 이직 성공하기|
<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```
<br />

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-imlab.git
```
dependencies를 설치합니다
```markdown
$ npm install
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

## 폴더 구조

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
    ├── libs
    ├── pages
    ├── routes
    ├── styles
    ├── App.jsx
    ├── types.d.ts
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|assets|더미 및 이미지 등 로컬 파일|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|hooks|react의 커스텀 hook을 관리하는 폴더|
|libs|전역함수 및 변수 관리 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|styles|전역으로 사용하는 style 관리 폴더|
<br/>

## 디자인 시안 by 강다현

[피그마 바로가기](https://www.figma.com/file/XfhbCGKRROJevroxACFMe6/MovieTrailer?node-id=0%3A1)

<br />

## 요구사항

1. 공통
    - Loading 상태 표기
    - Infinite scroll
    - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
    - API Response 데이터 캐쉬 (라이브러리 사용)
        - 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요
    
2. movies / 리스트 페이지
    - 한번에 가져올 데이터 최대 20
    - 제목, 포스터, 별점 표시
    - 포스터 없는 경우, 대체 이미지 사용
    
3. movie / 상세 페이지
    - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
    - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
    - 그 외의 데이터 추가 활용 여부는 자유
    
4. search
    - 제목, 포스터, 별점
    - 포스터 없는 경우, 대체 이미지 사용
    
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%23F7DF1E) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

<br />

## Best Practice

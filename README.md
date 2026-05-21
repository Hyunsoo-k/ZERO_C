## ZERO_C
탄소배출발자국 대시보드

<img width="1902" height="877" alt="스크린샷 2026-05-21 215117" src="https://github.com/user-attachments/assets/1c2e25e5-4f2a-47ab-bc5e-f95cbcf01fb8" />

<img width="1461" height="925" alt="image" src="https://github.com/user-attachments/assets/719c683d-aad8-4fff-8c71-fd55af367ea3" />

## 배포 URL
[zero-c-omega.vercel.app](https://zero-c-omega.vercel.app/)

## 개발 인원
1인 개발

## 개발 기간
2026-05-19 ~ 2026-05-22

## 기술 스택
- typescript
- nextjs
- tanstack-query
- react-icons
- zustand
- recharts
- scss

## 설치
```
npm install
```

## 개발환경 실행
```
npm run dev
```

## 특징
- tanstack-query로 fake api 서버 데이터 관리
- 서버 데이터과 클라이언트 상태를 zustand와 tanstack-query로 분리 관리
- scss, css 변수, grid를 이용한 전체적인 레이아웃 구상
- 기본적으로 제공되는 목데이터에 데이터를 추가하여 다양한 쿼리 기능으로 시각적 풍부화 시킴
- fakeBE 특성상 새로고침시 생성, 수정된 데이터 증발

## 구현하는 중인 기능
- 낙관적 업데이트
- 레이아웃 리팩토링

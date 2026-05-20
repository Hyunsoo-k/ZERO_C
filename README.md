## ZERO_C
탄소배출발자국 대시보드

## 개발 인원
1인 개발

## 개발 기간
05-19 ~ 05-20 (1일)

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

## 레이아웃
<img width="247" height="796" alt="스크린샷 2026-05-20 145842" src="https://github.com/user-attachments/assets/a818de3f-258f-4eaa-9053-fce8cb6f18e0" />
<img width="603" height="853" alt="스크린샷 2026-05-20 145622" src="https://github.com/user-attachments/assets/6d9e5e0f-def8-4895-a78e-bee939ece019" />
<img width="1898" height="933" alt="스크린샷 2026-05-20 145350" src="https://github.com/user-attachments/assets/6d02e3cb-6c8e-402f-93d0-44e97eaa6192" />

## 특징
- scss, css 변수, grid를 이용한 전체적인 레이아웃 구상
- mockData를 대시보드의 여러 기능에 적용하기 위해 다양한 객체 구조로 조작 후 zustand Store로 관리

## 진척도
- mockData 추가 후 대시보드의 기능 별 차트, 카드에 맞춰서 렌더링
- PUT, PATCH 기능은 시간 상 구현하지 못하였습니다

## 추가하고 싶은 기능들
- 차트, 기타 레이아웃 추가
- tanstack-query를 이용한 사용자 상호작용, 데이터 관리 고도화, mutation후의 낙관적 업데이트 등

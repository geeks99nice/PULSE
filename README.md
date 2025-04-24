# PULSE

웹 기반 애플리케이션 서비스입니다.

## 프로젝트 구조

```
PULSE/
├── admin/               # 관리자 페이지
│   ├── css/            # 관리자 페이지 스타일
│   ├── js/             # 관리자 페이지 스크립트
│   └── *.html          # 관리자 페이지 HTML 파일
├── Images/             # 이미지 자원
├── index.html          # 메인 페이지
└── server/             # 백엔드 서버
    ├── config/         # 서버 설정
    ├── controllers/    # 컨트롤러
    ├── middleware/     # 미들웨어
    ├── models/         # 데이터 모델
    └── .env            # 환경 변수
```

## 설치 방법

1. 저장소 클론하기:
```bash
git clone https://github.com/geeks99nice/PULSE.git
cd PULSE
```

2. 서버 설치 및 실행:
```bash
cd server
npm install
npm start
```

## 기능

- 사용자 인증 및 관리
- 데이터 전달 시스템
- 관리자 대시보드

## 기술 스택

- 프론트엔드: HTML, CSS, JavaScript
- 백엔드: Node.js, Express.js
- 데이터베이스: MongoDB (Mongoose)

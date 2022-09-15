// /routes/doctor.js

const express = require("express"); // express 는 서버 개발을 위한 경량화된 프레임워크다.
const router = express.Router(); // express 프레임워크의 router 함수를 사용해서 위에서 말한 라우팅을 할 수 있다.
// const { signUp } = require("../controllers/auth"); // 위에서 작성한 auth.js 파일에서 signUp 모듈을 임포트 한다.
const { DoctorList } = require("../controllers/doctor");

// router.post("/signup", signUp) // signup 이라는 미들웨어를 signup 의 주소와 연결 시켜준다. 즉 front-end 클라이언트서버는 홈페이지주소/auth/signup 으로 회원가입 요청을 보낼 수 있게 된다.
// router.post("/signin", signIn); // /auth/signin 엔드포인트로 들어오는 요청을 처리할 수 있도록 위에서 작성한 signIn 미들웨어를 연결시켜 준다.
router.get("/list", DoctorList) // signup 이라는 미들웨어를 signup 의 주소와 연결 시켜준다. 즉 front-end 클라이언트서버는 홈페이지주소/auth/signup 으로 회원가입 요청을 보낼 수 있게 된다.

module.exports = router; // 이 모듈을 내보냄.
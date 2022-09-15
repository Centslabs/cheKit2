// /routes/test.js

const express = require("express"); // express 는 서버 개발을 위한 경량화된 프레임워크다.
const router = express.Router(); // express 프레임워크의 router 함수를 사용해서 위에서 말한 라우팅을 할 수 있다.
const { rot } = require("../controllers/test");
// router.post("/signup", signUp) // signup 이라는 미들웨어를 signup 의 주소와 연결 시켜준다. 즉 front-end 클라이언트서버는 홈페이지주소/auth/signup 으로 회원가입 요청을 보낼 수 있게 된다.
router.get('/', rot);
module.exports = router; // 이 모듈을 내보냄.
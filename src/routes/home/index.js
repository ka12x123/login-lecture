"use strict"; //js 코드에는 이걸 하면 좋음
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/", ctrl.home);

router.get("/login", ctrl.login); // /login 이라는 요청을 수행하는게 콤마 다음인 컨트롤러다. 라우터는 단지 클라이언트에게 받은 요청을
// 연결 해주는 역할이기 때문에 ctrl 러 부분은 따로 파일을 만들어줘서 최적화한다.

//외부에서 내보내는 코드
module.exports = router;

//지금 우리가 하는 최적화 방법은 MVC 이다. 
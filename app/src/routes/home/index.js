"use strict"; //js 코드에는 이걸 하면 좋음
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); // /login 이라는 요청을 수행하는게 콤마 다음인 컨트롤러다. 라우터는 단지 클라이언트에게 받은 요청을
router.get("/register", ctrl.output.register);


router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

//외부에서 내보내는 코드
module.exports = router;

//지금 우리가 하는 최적화 방법은 MVC 이다. 
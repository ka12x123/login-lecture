const { response } = require("../../../app");
const logger = require("../../config/logger");
const User = require("../../models/User");
const output = {
    home: (req, res) => {
        res.render("home/index"); // 아마 app 에서 뷰 까지의 위치를 저장했어서 이런식으로 home/index 만해도 찾아갈 수 있는 듯
        logger.info(`Get / 200 "홈 화면으로 이동"`); //render 를 사용하면 처음에는 200 을 반환하지만 body 를 통해  ejs 를 보내면 http 상태 코드가 304가 됨
    },
    
    login: (req, res) => {
        res.render("home/login");
        logger.info(`Get /login 200 "로그인 화면으로 이동"`);
    },
    register:  (req, res) => {
        res.render("home/register");
        logger.info(`Get /register 200 "회원가입 화면으로 이동"`);
    },
    
};
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: (response.msg !== undefined) ? 409 : (response.err ? 500 : 200),  //어떤 변수에 값이 없을 떄 웹에서는 null, false 이런 걸 쓰는게 아니라 undefind 를 써야하네
        };
        log(response, url);
        return res.status(url.status).json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: (response.msg !== undefined) ? 409 : (response.err ? 500 : 201),//서버가 정상적인 처리를 했다면 200 아니라면 400
        }; // 409 번은 서버와 클라이언트가 충돌, 아이디 중복같은 경우일 때 반환, 500번은 데베 오류일 때 반환임
        // 그리고 새로운 데이터가 생성될 때는 201번을 보내야함
        log(response, url); 
        return res.status(url.status).json(response);
    }
};
const log = (response, url) => {
    if (response.err){
        logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`);
    }
    else{
        logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.msg || ""}`); // || 는 이게 아니면으로 사용 가능
    }
}

module.exports = {
    output,
    process,
};
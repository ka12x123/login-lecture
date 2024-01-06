const logger = require("../../config/logger");
const User = require("../../models/User");
const output = {
    home: (req, res) => {
        res.render("home/index"); // 아마 app 에서 뷰 까지의 위치를 저장했어서 이런식으로 home/index 만해도 찾아갈 수 있는 듯
        logger.info(`Get / 200 "홈 화면으로 이동"`);
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
        if (response.err){
            logger.error(`Post /login 200 Response: ${response.success}, ${response.err}`);
        }
        else{
            logger.info(`Post /login 200 Response: ${response.success}, msg: ${response.msg}`);
        }
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err){
            logger.error(`Post /register 200 Response: ${response.success}, ${response.err}`);
        }
        else{
            logger.info(`Post /register 200 Response: ${response.success}, msg: ${response.msg}`);
        }
        return res.json(response);  
    }
};


module.exports = {
    output,
    process,
};
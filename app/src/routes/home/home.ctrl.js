const { response } = require("../../../app");
const User = require("../../models/User");    
const output = {
    home: (req, res) => {
        res.render("home/index"); // 아마 app 에서 뷰 까지의 위치를 저장했어서 이런식으로 home/index 만해도 찾아갈 수 있는 듯 
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    
};
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};
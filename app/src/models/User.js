"use strict ";
const UserStorage = require("./UserStorage");
//const userstorage = new UserStorage(); //둘 중에 하나

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const body = this.body; // 중복되는 많은 코드가 있음 이렇게 해주는 게 좋음.
        const {id, psword} = UserStorage.GetUsersinfo(body.id);//static 이여서 객체 생성없이 가능
        if(id){
            if(body.id === id && body.psword === psword)
            {
                return { success : true };   //res 응답은 오브젝트 형태인 제이슨 형태로 가야하기 떄문에 오브젝트로 감싸야함
            }
            return { success : false, msg : "비밀번호가 틀렸어요."};
        }
        return { success : false, msg : "존재하지 않는 아이디입니다. "};

    }
}

module.exports = User;
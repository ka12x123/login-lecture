"use strict";

class UserStorage{
    static #users = {  //private 로 무조건 해줘서 안전하게 만들어야함 하지만 이렇게 하면 외부에서 못 꺼냄 그래서 메서드를 통해 보냄
        id: ["ddong", "ka00004691", "leedg9107"],
        psword: ["0000469ka1", "910727", "hello"],  //class 안에서는 const 안해도 된다.
        name: ["민철", "정현","아이스크림"],    
    };
    static GetUsers(...fields){
        const users = this.#users; //this 는 UserStorage 를 가르키고 있다.
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields))  //hasOwnProperty 는 fields 에 내용이 users에  정의되어 있냐임
            {
                newUsers[fields] = users[fields]; 
            }
            return newUsers;
        }, {});
        return newUsers;
    };
    static GetUsersinfo(id)
    {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users); // users에 있는 모든 키목록 저장하기
        const userInfo = userskeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx]; // id 에 2번째 꺼 키에 2번째 꺼 저장하겠다는 소라
            return newUsers;
        }, {});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;
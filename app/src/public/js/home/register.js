"use strict";
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmpsword = document.querySelector("#confirm-psword"),
    name = document.querySelector("#name"),
    registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register); //register() 가 아니라 register 이네 
function register(){
    if(!id.value){return alert("아이디를 입력해주세요.");}
    if(!name.value){return alert("이름을 입력해주세요.");}
    if(psword.value !== confirmpsword.value)
    {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    console.log
    fetch("/register", {   //get 으로 fetch 가능함 fetch 를 통해 get 을 하면 부드럽게 가능
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //then은 프로미스가 성공적으로 처리되면 실행할 콜백 함수를 등록하는 데 사용됩니다. Promise는 비동기 작업의 결과를 나타내며, 작업이 완료되면 이를 처리할 수 있도록 도와줍니다.
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        } else {
            if(res.err) return alert(("서비스에 문제가 발생했습니다."));
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러가 발생했어요.");
    });  
};
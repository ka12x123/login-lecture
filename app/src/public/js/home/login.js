"use strict";
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
loginbtn = document.querySelector("#button");
loginbtn.addEventListener("click", login); //login() 가 아니라 login 이네 
function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {   //get 으로 fetch 가능함 fetch 를 통해 get 을 하면 부드럽게 가능
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //then은 프로미스가 성공적으로 처리되면 실행할 콜백 함수를 등록하는 데 사용됩니다. Promise는 비동기 작업의 결과를 나타내며, 작업이 완료되면 이를 처리할 수 있도록 도와줍니다.
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else {
            if(res.err) return alert("서비스에 문제가 발생했습니다.");
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러가 발생했어요.");
    });  
};
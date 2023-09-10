let name=document.querySelector(".Name");
let mail=document.querySelector(".Mail");
let event=document.querySelector(".Event");
let date=document.querySelector(".Date");
let number=document.querySelector(".Number");
let row=document.querySelector(".Row");
let btn=document.querySelector("Button");
let named=document.querySelector(".NameD");
let maild=document.querySelector(".MailD");
let eventd=document.querySelector(".EventD");
let dated=document.querySelector(".DateD");
let numberd=document.querySelector(".NumberD");
let rowd=document.querySelector(".RowD");

let price=null;
btn.addEventListener("click",function(){
    if(event.value=="JAWAN")
    {
      price=180*(number.value);
    }
    else if(event.value=="India Vs Australia")
    {
        price=1000*(number.value);
    }
    else if(event.value=="The Nun 2")
    {
        price=150*(number.value);
    }
    else if(event.value=="Gadar 2")
    {
        price=160*(number.value);
    }
    else if(event.value=="India Vs SriLanka")
    {
        price=1000*(number.value);
    }
    else if(event.value=="India Vs England")
    {
        price=1000*(number.value);
    }
    else if(event.value=="India Vs Pakistan")
    {
        price=1000*(number.value);
    }
    else{
        price=500*(number.value);
    }
    named.innerText=name.value;

})


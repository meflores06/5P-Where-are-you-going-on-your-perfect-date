let title=document.querySelector(".title");
let q1=document.querySelector(".questions1");
let q2=document.querySelector(".question2");
let button=document.querySelector(".button");
let Submitbutton=document.querySelector(".Submitbutton");
let date=document.querySelector(".date");
let p=document.querySelector(".M1");
let age=document.querySelector(".age");
let age1=document.querySelector(".age1");
let act=document.querySelector(".actitud");
let act1=document.querySelector(".act");

date.onclick = function (){
    p.innerHTML="Why you clicking here?? Try ↑";
};

age.onclick = function (){
    age1.innerHTML=" Twice?! Don't click the images!!! Type in the box below";
};

act.onclick= function() {
    act1.innerHTML="You are out of hand 🙄";
};

Submitbutton.onclick = function() {
    q1.style.display="block";
    q2.style.display="block";
    button.style.display="block";
    title.style.display="none";
};

button.onclick = function() {
    let userInput=document.querySelector(".input").value;
    let p1=document.querySelector(".p1").value;
    let p2=document.querySelector(".p2").value;
    let r1=document.querySelector(".r1");
    r1.style.display="block";
    
    console.log(p1);
    console.log(p2);
    
     if (userInput===""&& p1 >= 16 && p2 === "extroverted"){
        r1.innerHTML=" Did you forgot something????";
    }
    
    else if (userInput===""&& p1>=20 && p2==="extroverted"){
        r1.innerHTML=" Did you forgot something????";
    }
    
    else if (userInput===""&& p1>=16 && p2==="introvert"){
        r1.innerHTML=" Did you forgot something????";
    }
    
    else if (userInput===""&& p1>=20 && p2==="introvert"){
        r1.innerHTML=" Did you forgot something????";
    }
    

    else if ( p1 >=20 && p2==="extroverted"){
    q1.style.display="none";
    q2.style.display="none";
    button.style.display="none";
     
     document.querySelector(".beach").style.display="block";
        r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 +" then, your perfect date would on the beach!!";
        
    }
 
     else if ( p1>=20 && p2==="introvert"){
 document.querySelector(".movie").style.display="block";
 r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 + " then, your perfect date would be a movie night!!"; 
         }
    
    else if ( p1 <=19 && p2==="introvert"){
      document.querySelector(".park").style.display="block";
    r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your personality is "+ p2 +" then, your perfect date would be on a park";
    }
    
    else if ( p1 <= 19 && p2 === "extroverted") {
     q1.style.display="none";
    q2.style.display="none";
    button.style.display="none";
     document.querySelector(".walk").style.display="block";
    r1.innerHTML="Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 +" then, your perfect date would be just going for a walk";
   
}
    
     else if ( p1===""&& p2===""){
        r1.innerHTML=" Try typing something......";
    }
    
};


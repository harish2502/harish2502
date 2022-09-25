// function printscrwhile(){
//     let a=0
//     while (a < 0)
//     console.log(a);
//     a++;
// }

console.log("hello world");
var age;
var gender;
var slry;
var result;
function calculator(){
    age=document.getElementById("age").value;
    gender=document.getElementById("gndr").value;
    slry=document.getElementById("slry").value;
    result=document.getElementById("result").value;
    console.log('calculator')
    console.log(document.getElementById("age").value);
    console.log(document.getElementById("gndr").value);
    if(slry <=100000){
        document.getElementById("result").value="you are tax free";
    }
    else if(slry => 100000  && slry <= 300000){
       if ( gender ==="female"){
        res= slry * 0.03;
        document.getElementById("result").value=res;
       }
       else if( age > 60 ||  age < 18){
        res=slry*0.06;
        document.getElementById("result").value=res;
       }
       else if (slry > 100000  && slry <= 300000) {
        res = slry * 0.04;
        document.getElementById("result").value =res;
    }

    else if(slry > 900000){
        res=slry*0.09
         document.getElementById("result").value =res;
    }
    }


    }


    function ternaryop(){
        let age=document.getElementById("ter").value;
        let type=age>18 ? "adult" : "child";
        document.getElementById("operate").innerHTML=type;
        console.log(type);
        }

// let stulist=[11,"bharath","Bca","completed"];
// console.log(stulist);

// stulist.push("allclear");
// console.log(stulist);

// stulist.unshift("avc college");
// console.log(stulist);

// stulist.pop();
// console.log(stulist);

// stulist.shift();
// console.log(stulist);


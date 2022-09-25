function funcheck() {
   pet=document.getElementById("pet").value;
   switch(pet)
   {
    case "lizard":
        console.log("i own a lizard");
        break;
    case "dog":
        console.log("i own a dog");
        break;
    case "lion":
        console.log("i own a lion");
        break;    
    case "cat":
        console.log("i own a cat");
        break;
    default:
        console.log("i don't own a pet");
        break;
   }

}

function funloop(){
    var a;
    a=document.getElementById("forloop").value;
    for(var b =a ; b>20 ; b--){
        console.log(b);
    }
}

function funwhile(){
    var a;
    a = document.getElementById("whilejs").value;
    while(a<50){
        console.log(a);
        a++;
    }
}

function fundowhile(){
    var a;
    a=document.getElementById("dowhile").value;
    do{
        console.log(a);
        a++;
    }while(a<30)
}

function funlength(){
    let a;
    a=document.getElementById("length").value;
    let b = a.length;
    console.log(b);
}


function funupper(){
    let a;
    a=document.getElementById("upper").value;
    let b = a.toUpperCase();
    console.log(b);
}

function funlower(){
    let a;
    a=document.getElementById("lower").value;
    let b = a.toLowerCase();
    console.log(b);
}

function funreplace(){
    let a;
    a=document.getElementById("replace").value;
    let b = a.replace("work","load");
    console.log(b);
}

function conct(){
    let a;
    let b;
    let c;
    a=document.getElementById("con").value;
    b=document.getElementById("cat").value;
    c=a.concat( "",b);
    console.log(c);
}

function trim(){
    let a;
    a=document.getElementById("trim").value;
    let b = a.trim();
    console.log(b);
}

function charat(){
    let a;
    let b;
    a=document.getElementById("cha").value;
    b=document.getElementById("rat").value;
    c=a.charAt(b);
    console.log(c);
}

function indexof(){
    let a;
    let b;
    let c;
    a=document.getElementById("sam").value;
    b=document.getElementById("ram").value;
    c=a.indexof(b);
    console.log(c);
}

function slice(){
    let a;
    let b;
    let c;
    a=document.getElementById("sli").value;
    b=document.getElementById("ce").value;
    c=a.slice(b);
    console.log(c);

}

function substring(){
    let a;
    let b;
    let c;
    a=document.getElementById("sub").value;
    b=document.getElementById("str").value;
    c = a.substring(b);
    console.log(c);


}

function split(){
    let a;
    a=document.getElementById("sp").value;
    b=a.split(" ");
    console.log(b);

}



// let test=["rose","badam","milk","mango","apple","juice","milkshakes","noodles"];
// console.log(test);

// console.log("----------------array of using loop--------------");
// for (i=0 ; i<test.length ; i++){
// console.log(test[i]);
// }

// console.log("----------------array of using foreach--------------");
// test.forEach(function(index,len){
//     console.log("the index is" + index + "the length is " + len);
// })
   

function assignstu(){
    let a;
    a= document.getElementById("totalmrk").value;
    console.log(a); 
  
    if(a>90 && a<=100){
        document.getElementById("drspg").innerHTML="the student grade is = A+" ;
    }
    else if(a>80 && a<=90)
    { document.getElementById("drspg").innerHTML="the student grade is = A" ;
   }
    else if (a>70 && a<=80){
        document.getElementById("drspg").innerHTML="the student grade is = B" ;

    }

    else if (a>60 && a<=70){
        document.getElementById("drspg").innerHTML="the student grade is = C" ;
    } 

    else if (a>40 && a<=60){
        document.getElementById("drspg").innerHTML="the student grade is  = D" ;

    }

    else if(a>0 && a>=40){
        document.getElementById("drspg").innerHTML="the student grade is = Fail" ;
    }
    
} 
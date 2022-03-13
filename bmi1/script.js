let weight = document.getElementById("weight");
let height = document.getElementById("height");
let ybmi = document.getElementById("ybmi");
let result = document.getElementById("result");
let interpret = document.getElementById("interpret");
let buttn = document.getElementById("buttn");
let reset = document.getElementById("reset");
let comment = document.getElementById("comment");
let comment1 = document.getElementById("comment1");
let a;
let b;
let answer;

      function calculate(){
           
        a=Number(weight.value);
        b=Number(height.value);
        answer= a/(b)**2;
        
         
        // if(answer >40){
        //     ybmi.innerHTML="Your BMI is : ";
        //     result.innerHTML=  answer.toFixed(2); 
        //     interpret.innerHTML=" You are morbidly obese, pls seek medical attention";
        //     comment.innerHTML="Thank you for using this App";
        //                return false;
        //    }
    
         if (answer >=30  && answer <=100 ){
                  ybmi.innerHTML="Your BMI is : ";
                  result.innerHTML=  answer.toFixed(2) + "kg/m&#178;"; 
                  interpret.innerHTML=" You are obese, pls seek immediate medical attention";
                  // comment.innerHTML="Thank you for using this App";
                  comment1.style.display="block";
                              return false;
                  }
        
        else if(answer >=25 && answer <30){
            ybmi.innerHTML="Your BMI is : ";
            result.innerHTML=  answer.toFixed(2)  + "kg/m&#178;";
            interpret.innerHTML="Overweight, pls seek medical attention";
            // comment.innerHTML="Thank you for using this App";
            comment1.style.display="block";
                   return false;
   
           }

        else if(answer >=18.5 && answer <25){
            ybmi.innerHTML="Your BMI is : ";
            result.innerHTML=  answer.toFixed(2)  + "kg/m&#178;" ;
            interpret.innerHTML="Your weight is normal";
            // comment.innerHTML="Thank you for using this App";
            comment1.style.display="block";
                     return false;
           }

          else if(answer <18.5){
            ybmi.innerHTML="Your BMI is : "
            result.innerHTML=  answer.toFixed(2) + "kg/m&#178;"; 
            interpret.innerHTML="Underweight, pls seek medical attention"
            // comment.innerHTML="Thank you for using this App"
            comment1.style.display="block";
                    return true;
           }




      }
      buttn.addEventListener( "click" , calculate);

      function reset1(){

           comment1.style.display="none";

           let values=[weight,height]

           for(let valued of values){
                        
                        valued.value="";
              }

        
           let others=[ybmi,result,interpret,comment]

           for ( let other of others){
              
                       other.innerHTML="";

              }

        
           }

      reset.addEventListener( "click" , reset1);
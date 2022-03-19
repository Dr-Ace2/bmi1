let weight = document.getElementById("weight");
let height = document.getElementById("height");
let pound = document.getElementById("pound");
let foot = document.getElementById("foot");
let inch = document.getElementById("inch");
let convertc = document.getElementById("convertc");
let ybmi = document.getElementById("ybmi");
let result = document.getElementById("result");
let interpret = document.getElementById("interpret");
let buttn = document.getElementById("buttn");
let buttnp = document.getElementById("buttnp");
let buttnf = document.getElementById("buttnf");
let buttni = document.getElementById("buttni");
let reset = document.getElementById("reset");
let resetc = document.getElementById("resetc");
let comment = document.getElementById("comment");
let show = document.getElementById("show");
let comment1 = document.getElementById("comment1");
let outputp = document.getElementById("outputp");
let outputf = document.getElementById("outputf");
let outputi = document.getElementById("outputi");
let error1= document.getElementById("error1")
let error2= document.getElementById("error2")
let error3= document.getElementById("error3")
let error4= document.getElementById("error4")
let error5= document.getElementById("error5")

let a;
let b;
let answer;


let pin;
let fin;
let iin;

let convert1;
let convert2;
let convert3;



      function showit(){
         
         if(show.innerHTML==="Show converter"){
            convertc.style.display="block";
            show.innerHTML="Hide converter";
         }
         else {
            convertc.style.display="none";
            show.innerHTML="Show converter";
         }

      }

      show.addEventListener("click" , showit)


      // validation of pounds


      function validatep(){
         if(isNaN(pound.value)){
          error1.innerHTML="Pls, enter a number"  
          return false;
         }
         else if(pound.value==""){
            error1.innerHTML="You can't submit empty input"
            return false;
         }
         
         else{
            error1.innerHTML="";
            return true;
         }
         
      }
      pound.addEventListener("blur" ,validatep)


      // validation of foot

      function validatef(){
         if(isNaN(foot.value)){
          error2.innerHTML="Pls, enter a number"  
          return false;

         }else if(foot.value==""){
            error2.innerHTML="You can't submit empty input"
            return false;
         }
         else{
            error2.innerHTML="";
            return true
         }
         
      }
      foot.addEventListener("blur" , validatef)


      // validation of inches

      function validatei(){
         if(isNaN(inch.value)){
          error3.innerHTML="Pls, enter a number"  
          return false;
         }
         else if(inch.value==""){
            error3.innerHTML="You can't submit empy input"
            return false;
         }
         else{
            error3.innerHTML="";
            return true
         }
         
      }
      
      inch.addEventListener("blur" ,validatei)




      // converts pound to kilogram

      function convertp(){
         if ( 
            !validatep()
            
        )
         {
            return
        }

         pin=Number(pound.value);
         convert1= pin*0.453592 ;
         outputp.innerHTML=convert1.toFixed(2)+"kg";

      }

      buttnp.addEventListener( "click" , convertp);


      

      // converts foot to metres

      function convertf(){  
         
         if ( 
            !validatef()
            
        )
         {
            return
        }

         fin=Number(foot.value);
         convert2= fin*0.3048;
         outputf.innerHTML=convert2.toFixed(2)+"m";
         
      }
      buttnf.addEventListener( "click" , convertf);



      
//   converts inches to metres

      function converti(){

         if ( 
            !validatei()
            
        )
         {
            return
        }

         iin=Number(inch.value);         
         convert3= iin*0.0254;
         outputi.innerHTML=convert3.toFixed(2)+"m";
        
      }
      buttni.addEventListener( "click" , converti);







         // validation of bmi calc


         function validatew(){
            if(isNaN(weight.value)){
             error4.innerHTML="Pls, enter a number"  
             return false;
   
            }else if(weight.value==""){
               error4.innerHTML="You can't submit empty input"
               return false;
            }
            else{
               error4.innerHTML="";
               return true
            }
            
         }
   
   
         weight.addEventListener("blur" , validatew)



         function validateh(){
            if(isNaN(height.value)){
             error5.innerHTML="Pls, enter a number"  
             return false;
   
            }else if(height.value==""){
               error5.innerHTML="You can't submit empty input"
               return false;
            }
            else{
               error5.innerHTML="";
               return true
            }
            
         }
         height.addEventListener("blur" , validateh)
   




     




      // this function calculates bmi


      function calculate(){

         if(!validatew()){
            alert("invalid input")        
            return
         }

         if(!validateh()){
            alert("invalid input")      
            return
         }
           
        a=Number(weight.value);
        b=Number(height.value);
        answer= a/(b)**2;
        
         

    
         if (answer >=30  && answer <=100 ){
                  ybmi.innerHTML="Your BMI is : ";
                  result.innerHTML=  answer.toFixed(2) + "kg/m&#178;"; 
                  interpret.innerHTML=" You are obese, pls seek immediate medical evaluation";
                  // comment.innerHTML="Thank you for using this App";
                  comment1.style.display="block";
                              return false;
                  }
        
        else if(answer >=25 && answer <30){
            ybmi.innerHTML="Your BMI is : ";
            result.innerHTML=  answer.toFixed(2)  + "kg/m&#178;";
            interpret.innerHTML="Overweight, pls seek medical evaluation";
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
            interpret.innerHTML="Underweight, pls seek medical evaluation"
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

        
         //   let others=[ybmi,result,interpret,comment,error4,error5]
           let others=[error4,error5,ybmi,result,interpret,comment]

           for ( let other of others){
              
                       other.innerHTML="";

              }

        
           }

      reset.addEventListener( "click" , reset1);

      function resetcv(){


           let values=[pound,foot,inch]

           for(let valued of values){
                        
                        valued.value="";
              }

        
           let others=[outputp,outputf,outputi,error1,error2,error3]

           for ( let other of others){
              
                       other.innerHTML="";

              }

        
           }

      resetc.addEventListener( "click" , resetcv);






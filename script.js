var count = 1;
var newmony;
var ans;
var target = Math.floor(Math.random()*100);
 //console.log(target);

var wallet = 150;

var x = 0;

var increase = document.querySelector(".increase");
var output = document.querySelector(".output");
var input = document.querySelector(".input");
var play = document.querySelector(".play");
var gobtn = document.querySelector(".go");
var cur = document.querySelector(".cur");
var restart = document.querySelector(".restart");
var myBtn = document.getElementById("myBtn");

var urans = document.querySelector(".urans");

cur.innerHTML = "₹ " + wallet;


    play.onclick = function(){
    
    input.style.display= "inline";
    gobtn.style.display="inline";
    play.innerHTML = '<i class="fa-solid fa-lock"></i>';
    play.style.color="#db2c2c";
  //  play.style.display = "none";                 
    restart.style.color="#fff";
                                                 
   if(count < 2){
       restart.innerHTML = "RESTART";
       count += 1;
   }                                          
                                                 
}

restart.onclick = function()
{
    target = Math.floor(Math.random()*100);
   //console.log(target); 
   input.value = "0";
    //myBtn.disabled = true;
    gobtn.disabled = false;
    
    gobtn.style.display = "inline";
    play.style.display = "inline";
  //  restart.innerHTML = '<i class="fa-solid fa-lock"></i>';
    input.disabled =false;
    
    output.innerHTML = "New number is generated for you.";
    urans.innerHTML = " ";
    increase.innerHTML = " ";
    x = 0
 }  
      
gobtn.onclick = function(){
    ans = input.value;
   // console.log(ans);
    x += 1;
    
    //
    
    if(wallet < 0){
        alert("Sorry but you have insufficient balance. Please completely RESTART the game. Thank You ");
    }
                 
    //
    
    if(x <= 5){
        
                         
    if(target != ans && ans < target){
    output.innerHTML = "Your predicted number is <span style='color:#db2c2c;'>less</span> than the actual one. Try again"    
                                   
 newmony = wallet - 10;         
 wallet = newmony;                
 cur.innerHTML = "₹ " + wallet;              
 urans.innerHTML = "Your last prediction : " + ans+";"
 
 increase.innerHTML = "<span style='color:#db2c2c;'>₹ 10</span> is debited from your wallet."
 
}
else if(target != ans && ans > target){
    output.innerHTML = "Your predicted number is <span style='color:#db2c2c;'>more</span> than the actual one. Try again"
               
    newmony = wallet - 10;         
   wallet = newmony;                
   cur.innerHTML = "₹ " + wallet;
   
 urans.innerHTML = "Your last prediction : " + ans+";"
 
   increase.innerHTML = "<span style='color:#db2c2c;'>₹ 10</span> is debited from your wallet."
 
}
else{
    output.innerHTML = "<span style='color:#32db2c;' >Congratulations.</span> Your prediction is correct" 
    
    newmony = wallet + 40;         
 wallet = newmony;                
 cur.innerHTML = "₹ " + wallet;
    input.disabled = true;
  myBtn.disabled = false;
  restart.innerHTML = 'RESTART';
    gobtn.disabled = true;
    gobtn.style.display = "none";
    play.style.display = "none";
    urans.innerHTML = "Your last prediction : " + ans+";"
           
        increase.innerHTML = 'You predicted the number with in <span style="color:#32db2c;">5</span> attempts. As a result <span style="color:#32db2c;">₹ 40</span> is credited to your wallet. Please click on "Restart" if you want to continue your prediction.'
           
}

                
        
    }else{
        
                         
    if(target != ans && ans < target){
    output.innerHTML = "Your predicted number is <span style='color:#db2c2c;'>less</span> than the actual one. Try again"    
                                   
 newmony = wallet - 20;         
 wallet = newmony;                
 cur.innerHTML = "₹ " + wallet;              
 urans.innerHTML = "Your last prediction : " + ans+";"
 
 increase.innerHTML = "As you can't predict the number in <span style='color:#db2c2c;'>5 </span>attempts. Thus, <span style='color:#db2c2c;'>₹ 20</span> is debited from your wallet."
 
}
else if(target != ans && ans > target){
    output.innerHTML = "Your predicted number is <span style='color:#db2c2c;'>more</span> than the actual one. Try again"
               
    newmony = wallet - 20;         
   wallet = newmony;                
   cur.innerHTML = "₹ " + wallet;
   
 urans.innerHTML = "Your last prediction : " + ans+";"
 
   increase.innerHTML = "As you can't predict the number in <span style='color:#db2c2c;'>5 </span>attempts. Thus, <span style='color:#db2c2c;'>₹ 20</span> is debited from your wallet."
 
}
else{
    output.innerHTML = "<span style='color:#32db2c;' >Congratulations.</span> Your prediction is correct" 
    
    newmony = wallet + 30;         
 wallet = newmony;                
 cur.innerHTML = "₹ " + wallet;
    input.disabled = true;
  myBtn.disabled = false;
  restart.innerHTML = 'RESTART';
    gobtn.disabled = true;
    gobtn.style.display = "none";
    play.style.display = "none";
    urans.innerHTML = "Your last prediction : " + ans+";"
           
        increase.innerHTML = "As you can't predict the number in <span style='color:#db2c2c;'>5 </span> attempts. Thus <span style='color:#32db2c;'>only ₹ 30</span> is credited to your wallet. Please click on 'Restart' if you want to continue your prediction."
           
}

   

    } // x lessthan 5 wala
    


    
} // main go btn


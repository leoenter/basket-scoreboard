// grabs buttons
const home1 = document.getElementById('Sone');
const home2 = document.getElementById('Stwo');
const home3 = document.getElementById('Sthree');

const guest1 = document.getElementById('Scone');
const guest2 = document.getElementById('Sctwo');
const guest3 = document.getElementById('Scthree');
// grab screens

const homeScreen = document.getElementById('screen1');
const guestScreen = document.getElementById('screen2');
let homeScore = 0;
let guestScore =0;
let time = 24;
let resultHome;
let resultGuest;
//const timer = document.getElementById('timer').textContent = time;


function add1() {
      resultHome = homeScore += 1;
      homeScreen.textContent = resultHome;
      home1.style.backgroundColor = 'grey';
       
       function change(){
    home1.style.backgroundColor = 'blue';

}
    setTimeout(change,2000)


 }




function add2(){
    resultHome = homeScore += 2;
    homeScreen.textContent = resultHome;
    
    
    home2.style.backgroundColor = 'grey';
       
       function change(){
    home2.style.backgroundColor = 'blue';
}
    setTimeout(change,2000)
}

function add3(){
    resultHome = homeScore += 3;
    homeScreen.textContent = resultHome;
    
    
    home3.style.backgroundColor = 'grey';
       
       function change(){
    home3.style.backgroundColor = 'blue';
}
    setTimeout(change,2000)
}


function guestadd1() {
      resultGuest = guestScore += 1;
      guestScreen.textContent = resultGuest;
      
      guest1.style.backgroundColor = 'grey';
       
       function change(){
    guest1.style.backgroundColor = 'blue';
}
    setTimeout(change,2000)
}

function guestadd2(){
    resultGuest = guestScore += 2;
    guestScreen.textContent = resultGuest;
    
    guest2.style.backgroundColor = 'grey';
       
       function change(){
    guest2.style.backgroundColor = 'blue';
}
    setTimeout(change,2000)
}

function guestadd3(){
    resultGuest = guestScore += 3;
    guestScreen.textContent = resultGuest;
    
    guest3.style.backgroundColor = 'grey';
       
       function change(){
    guest3.style.backgroundColor = 'blue';
}
    setTimeout(change,2000)
}



 home1.addEventListener('click',add1)
  home2.addEventListener('click',add2)
   home3.addEventListener('click',add3)
   
   
   guest1.addEventListener('click',guestadd1)
  guest2.addEventListener('click',guestadd2)
   guest3.addEventListener('click',guestadd3)
   
   
 
       const homeReset = document.getElementById('resetHome');
       const guestReset = document.getElementById('resetGuest');
       
       guestReset.addEventListener('click',function(){
           result = 0;
            guestScore = 0;
           guestScreen.textContent = result;
           
       })
       
        homeReset.addEventListener('click',function(){
           result = 0;
           homeScore = 0;
           homeScreen.textContent = result;
    
       })
       
       
      const timerBtn = document.getElementById('timerBtn');
      //const timer = document.getElementById('timer').textContent = time;
      
      timerBtn.addEventListener('click',function(){
          
          function backTime(){
              time = time - 1;
              const timer = document.getElementById('timer').textContent = time;
              //time = time - 1;
              
              
              if(time === 0){
            
                  clearInterval(myInter)
                  time = 24;
                  
              }
    
        
          }
          
        
      let myInter =  setInterval(backTime,1000)
          
         
      })
      
    
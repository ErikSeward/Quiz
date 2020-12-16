var qIndex = 0;

var questions = [
    {
        ask:"",
        select:[],
    },
    {
        ask:"",
        select:[],
    },
    {
        ask:"",
        select:[],
    },
    {
        ask:"",
        select:[],
    },
];
 

 var time = document.querySelector("#startTime");
 var askQuestion = document.querySelector("#qMe");
 var countdown = document.querySelector("#timeLeft");

 var ticToc = 100
 var penalty = 10;
 var int = 0;
 time.addEventListener("click", function (){
     if(int === 0) {
         int = setInterval(function () {
             ticToc--;
             timeLeft.textContent = "Time Left:" + ticToc;
         }

     }

 }






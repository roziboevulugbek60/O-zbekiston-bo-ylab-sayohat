
// ======================================
// 🇺🇿 O'ZBEKISTON BO'YLAB SAYOHAT
// GAME ENGINE
// Developer: Ulug'bek.R
// ======================================


const menu =
document.getElementById("menu");


const game =
document.getElementById("game");


const result =
document.getElementById("result");



const startBtn =
document.getElementById("start");


const restartBtn =
document.getElementById("restart");



const questionText =
document.getElementById("question");


const iconBox =
document.getElementById("placeIcon");


const answersBox =
document.getElementById("answers");



const scoreText =
document.getElementById("score");


const numberText =
document.getElementById("number");


const bestText =
document.getElementById("best");


const finalScore =
document.getElementById("finalScore");






let playerName = "";

let gameQuestions = [];

let current = 0;

let score = 0;

let totalQuestions = 15;







// ============================
// BOSHLASH
// ============================


startBtn.onclick = ()=>{


    playerName =

    document
    .getElementById("playerName")
    .value
    .trim()
    ||
    "Sayyoh";



    startGame();


};









function startGame(){


    menu.classList.add(
        "hidden"
    );


    game.classList.remove(
        "hidden"
    );



    score = 0;

    current = 0;



    scoreText.textContent =
    score;



    gameQuestions =

    shuffleQuestions()
    .slice(0,totalQuestions);



    showQuestion();


}









// ============================
// SAVOL KO'RSATISH
// ============================


function showQuestion(){



    let q =
    gameQuestions[current];



    numberText.textContent =
    current + 1;



    iconBox.textContent =
    q.icon;



    questionText.textContent =
    q.question;



    answersBox.innerHTML = "";





    let options =
    [...q.answers];



    options.sort(
        ()=>Math.random()-0.5
    );






    options.forEach(answer=>{


        let button =
        document.createElement("button");



        button.className =
        "answer";



        button.textContent =
        answer;



        button.onclick = ()=>{


            checkAnswer(
                button,
                answer,
                q.correct
            );


        };



        answersBox.appendChild(button);



    });



}









// ============================
// JAVOB TEKSHIRISH
// ============================


function checkAnswer(
button,
answer,
correct
){



    let buttons =
    document.querySelectorAll(
        ".answer"
    );



    buttons.forEach(btn=>{


        btn.disabled = true;


    });






    if(answer === correct){


        button.classList.add(
            "correct"
        );


        score += 10;


        scoreText.textContent =
        score;


    }

    else{


        button.classList.add(
            "wrong"
        );



        buttons.forEach(btn=>{


            if(
            btn.textContent === correct
            ){


                btn.classList.add(
                    "correct"
                );


            }


        });


    }







    setTimeout(()=>{


        nextQuestion();


    },1000);



}









// ============================
// KEYINGI SAVOL
// ============================


function nextQuestion(){


    current++;




    if(
    current < gameQuestions.length
    ){


        showQuestion();


    }

    else{


        finishGame();


    }


}









// ============================
// YAKUN
// ============================


function finishGame(){



    game.classList.add(
        "hidden"
    );



    result.classList.remove(
        "hidden"
    );



    finalScore.textContent =
    score;




    Storage.saveBest(
        score
    );



    Storage.saveLast(
        score,
        playerName
    );



    Storage.addGame();



    bestText.textContent =
    Storage.getBest();


}









// ============================
// QAYTA O'YNASH
// ============================


restartBtn.onclick = ()=>{


    result.classList.add(
        "hidden"
    );



    menu.classList.remove(
        "hidden"
    );


};







// Rekord chiqarish


bestText.textContent =
Storage.getBest();
const cardButtons = document.querySelectorAll('.btn');
const outermodal = document.querySelector('.outer-modal');
const innermodal = document.querySelector('.inner-modal');
let questionString; 
let answerString;
const revealAnswerButton = document.querySelector(".inner-btn");
const answerSpan = document.querySelector(".hidden") ;

cardButtons.forEach((button) =>
    button.addEventListener("click", handleClick)
);
function handleClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const number = card.dataset.number;
    const question = innermodal.querySelector(".question");
    const answer = innermodal.querySelector(".answer");

    switch(number){
        case '1':
            questionString  = "question 1"
            answerString  = "answer 1"
            break;
        case '2':
            questionString  = "question 2"
            answerString  = "answer 2"
            break;
        case '3':
            questionString  = "question 3"
            answerString  = "answer 3"
            break;
        case '4':
            questionString  = "question 4"
            answerString  = "answer 4"
            break;
        case '5':
            questionString  = "question 5"
            answerString  = "answer 5"
            break;
        case '6':
            questionString  = "question 6"
            answerString  = "answer 6"
            break;
        case '7':
            questionString  = "question 7"
            answerString  = "answer 7"
            break;
        case '8':
            questionString  = "question 8"
            answerString  = "answer 8"
            break;
        case '9':
            questionString  = "question 9"
            answerString  = "answer 9"
            break;
        case '10':
            questionString  = "question 10"
            answerString  = "answer 10"
            break;
        case '11':
            questionString  = "question 11"
            answerString  = "answer 11"
            break;
        case '12':
            questionString  = "question 12"
            answerString  = "answer 12"
            break;
        
            
    }
    question.innerText = questionString;
    outermodal.classList.add('active');

    function revealAnswer(){

        answerSpan.classList.remove("hidden")
        answerSpan.classList.add("answer");
        answerSpan.innerText = answerString ;
        
        revealAnswerButton.classList.add("hide");        
    }
    revealAnswerButton.addEventListener("click", revealAnswer);
    
}

function outsideClick(){
    answerSpan.classList.remove("answer")
    answerSpan.classList.add("hidden");
    outermodal.classList.remove('active');
    revealAnswerButton.classList.remove("hide");
}

outermodal.addEventListener("click", function(event){
    const isOutside = !event.target.closest('.inner-modal');
    if(isOutside){
        outsideClick();
    }
});





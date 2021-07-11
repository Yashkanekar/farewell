const cardButtons = document.querySelectorAll('.btn');
const outermodal = document.querySelector('.outer-modal');
const innermodal = document.querySelector('.inner-modal');
let questionString;
let answerString;
const revealAnswerButton = document.querySelector(".inner-btn");
const answerSpan = document.querySelector(".hidden");

cardButtons.forEach((button) =>
    button.addEventListener("click", handleClick)
);

function handleClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const number = card.dataset.number;
    const question = innermodal.querySelector(".question");
    const answer = innermodal.querySelector(".answer");

    switch (number) {
        case '1':
            questionString = "Jack of all trades, Madhuri Dixit of SoW"
            answerString = "Sakshi Kadam"
            break;
        case '2':
            questionString = "Mr.UPI, PLayboii, Keeper of secrets"
            answerString = "Shaad Qureshi"
            break;
        case '3':
            questionString = "Open hearted, Sasta Farhaan Akhtar"
            answerString = "Shashank Avhad"
            break;
        case '4':
            questionString = "Night owl, Grandmaster, Temperamental"
            answerString = "Megh Kurlekar"
            break;
        case '5':
            questionString = "Techie, Ekach chava, Intimidating"
            answerString = "Rohan Kokane"
            break;
        case '6':
            questionString = "Content Creator, Never replies in the group"
            answerString = "Adesh Patki"
            break;
            case '7':
            questionString = "Beloved Sir, Very friendly, Never gives party"
            answerString = "Aayush Sir🙏"
            break;
        case '8':
            questionString = "Talkative, Has 1000 brothers except 'THE ONE'"
            answerString = "Prithvi Dambal"
            break;
        case '9':
            questionString = "Jolly, Team person, Single point of contact"
            answerString = "Rutuja Jadhav"
            break;
        case '10':
            questionString = "Innocent, Password keeper, Smart"
            answerString = "Mrunal Kumbhar"
            break;
        case '11':
            questionString = "A head full of ideas, Miss Ghumakkad"
            answerString = "Janhavi Jadhav"
            break;
        case '12':
            questionString = "Bewafa Aashiq, Artistic, NRI"
            answerString = "Aryan Garg"
            break;

    }
    question.innerText = questionString;
    outermodal.classList.add('active');

    function revealAnswer() {

        answerSpan.classList.remove("hidden")
        answerSpan.classList.add("answer");
        answerSpan.innerText = answerString;

        revealAnswerButton.classList.add("hide");
    }
    revealAnswerButton.addEventListener("click", revealAnswer);

    button.classList.add("opened");
    button.innerText = "Opened";
    card.classList.add("noTransition");
    button.disabled = true;
}

function outsideClick() {
    answerSpan.classList.remove("answer")
    answerSpan.classList.add("hidden");
    outermodal.classList.remove('active');
    revealAnswerButton.classList.remove("hide");
}

outermodal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest('.inner-modal');
    if (isOutside) {
        outsideClick();
    }
});





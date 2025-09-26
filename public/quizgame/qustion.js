
const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following is used to read an HTML page and render it?",
    a: "Hyper Type Multi Language",
    b: "Hyper Text Multiple Language",
    c: "Hyper Text Markup Language",
    d: "Home Text Multi Language",
    correct: "c",
},
{
    question: "Which element is used for or styling HTML5 layout?",
    a: "CSS",
    b: "jQuery",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
},
{
    question: "Which of the following is used to read an HTML page and render it?",
    a: "Web server",
    b: "Web network",
    c: "Web browser",
    d: "Web matrix",
    correct: "c",
},
{
    question: "Which character is used to represent when a tag is closed in HTML?",
    a: "#",
    b: "!",
    c: "/",
    d: " | ",
    correct: "c",
},
{
    question: "Among the following, which is the HTML paragraph tag?",
    a: "<p>",
    b: "<pre>",
    c: "<hr>",
    d: "<a>",
    correct: "a",
}
];
let userscore = 0;
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
            userscore += 1;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
        headerscore()
    }

)
function headerscore() {
    const headerscoretext = document.getElementById("col-1");
    headerscoretext.textContent = `score: ${userscore} / ${total}`
}

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].style.paddingTop ="400px"
    document.getElementsByClassName("container")[0].style.height = "1350px"
    // document.getElementsByClassName("container")[0].style.marginTop ="500px"
    document.getElementsByClassName("container")[0].innerHTML = `
        <div id="col-2">
            <h3 class="w-100"> you've scored ${correct} / ${total} </h3>
            <div id="rightans">
                <p>1) Which of the following is a client site language?<br></P>
                <p>ans: JavaScript <br></P>
                <p>2) What year was JavaScript launched?<br></P>
                <p>ans: 1995<br></P>
                <p>3) What does CSS stands for?<br></P>
                <p>ans: Cascading Style Sheet<br></P>
                <p>4) Which of the following is used to read an HTML page and render it?<br></P>
                <p>ans: Hyper Text Markup Language<br></P>
                <p>5) Which element is used for or styling HTML5 layout?<br></P>
                <p>ans: CSS<br></P>
                <p>6) Which of the following is used to read an HTML page and render it?<br></P>
                <p>ans: Web browser<br></P>
                <p>7) Which character is used to represent when a tag is closed in HTML?<br></P>
                <p>ans: /<br></P>
                <p>8) Among the following, which is the HTML paragraph tag?<br></P>
                <p>ans: < p > </P>
            </div>
            <div id="btngroup">
                <a href="quiz.html" id="info-btn">EXIT GAME</a>
                <a href="qustion.html" id="info-btn" onclick="showqustions()">PLAY AGAIN</a>
            </div>
        </div>
    `
}
loadQuestion(index);
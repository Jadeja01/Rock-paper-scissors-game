let userscore=0;
let botscore=0;

let select = document.querySelectorAll(".images > img")
let userscorePara = document.querySelector("#user-score")
let botscorePara = document.querySelector("#bot-score")

let msgShower =document.querySelector("#shower")
let generatebotChoice = ()=>{
    const options =["rock","paper","scissor"];
    const randIdx =Math.floor(Math.random() * 3)
    return options[randIdx]
}
let showWinner =(userWin)=>{
    if (userWin){
        console.log("you win ")
        userscore++
        userscorePara.innerText =userscore
        msgShower.innerText="you win"
        msgShower.style.background="green"

    }
    else{
        botscore++
        botscorePara.innerText =botscore
        console.log("you lose ")
        msgShower.style.background="red"
        msgShower.innerText="you lose"

    }
}
const drawGame =()=>{
    console.log("game was draw ")
    msgShower.style.background="black"

    msgShower.innerText="game was draw"

}
let playgame = (userchoice)=>{
    console.log("user choice:",userchoice)
    const botchoice = generatebotChoice()
    console.log("bot choice:",botchoice)

    if(userchoice === botchoice){
        drawGame()
    }
    else{
        let userWin;
        if(userchoice === "rock"){
            //scissor,paper
            userWin = botchoice ==="paper" ? false : true
        }
        else if(userchoice ==="paper"){
            //rock,scissor
            userWin = botchoice ==="scissor" ? false : true

        }
        else{
            //rock paper
            userWin = botchoice ==="rock" ? false : true
        }
        showWinner(userWin)
    }

}

select.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
        playgame(userchoice)
    })
})

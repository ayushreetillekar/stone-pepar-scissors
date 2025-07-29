let compscore = 0;
let userscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

choices.forEach(choice=>{
  choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice)
  })
})

const gencompchoice=()=>{
  const options = ["rock", "pepar", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return options[randomindex];
}
const drawgame=()=>{
  msg.innerHTML = "Game was draw, Play again";
  msg.style.backgroundColor = "blue";
}
const playgame=(userchoice)=>{
  let compchoice = gencompchoice();
  if(userchoice === compchoice){
    drawgame();
  }
  else{
    let userwin = true;
    if(userchoice === "rock"){
      userwin = compchoice === "pepar" ? false : true;
    }
    else if(userchoice === "pepar"){
      userwin = compchoice === "rock" ? false : true;
    }
    else{
      userwin = compchoice === "scissors" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
}
const showwinner=(userwin, userchoice, compchoice)=>{
  if(userwin){
    userscore++;
    userscorepara.innerHTML = userscore;
    msg.innerHTML = `You win, ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor = "green"
  }
  else{
    compscore++;
    compscorepara.innerHTML = compscore;
    msg.innerHTML = `You lost, ${compchoice} beats ${userchoice}`
    msg.style.backgroundColor = "red"
  }
}
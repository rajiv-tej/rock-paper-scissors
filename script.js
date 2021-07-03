const game = () => {
  let computerScore = 0;
  let humanScore = 0;
  const startButton = document.querySelector("#start-btn");
  const introscreen = document.querySelector(".intro");
  const gameScreen = document.querySelector(".game");
  const buttons = document.querySelectorAll(".options button");
  const playerHand = document.querySelector("#player");
  const computerHand = document.querySelector("#computer");
  let humanscoreF = document.querySelector(".com p");

  const start = () => {
    startButton.addEventListener("click", () => {
      introscreen.classList.add("fadeout");
      gameScreen.classList.add("fadein");
    });
  };
  buttons.forEach((choice) => {
    choice.addEventListener("click", function () {
      playerHand.src = `./images/rock.png`;
      computerHand.src = `./images/rock.png`;
      const humanChoice = this.textContent;
      const available = ["rock", "paper", "scissor"];
      const computerChoice = available[Math.floor(Math.random() * 3)];
      const hScore = document.querySelector(".hum p");
      const cScore = document.querySelector(".com p");
      const result = document.querySelector(".result h1");
      const resultWin = () => {
        setTimeout(() => {
          result.textContent = "yayy!! you won😁 (+1)";
          setTimeout(() => {
            result.textContent = `let's go again😋`;
          }, 2500);
        }, 1500);
      };
      const resultTie = () => {
        setTimeout(() => {
          result.textContent = "oops! it's a Tie😐";
          setTimeout(() => {
            result.textContent = `let's go again😋`;
          }, 2500);
        }, 1500);
      };

      const resultLose = () => {
        setTimeout(() => {
          result.textContent = "you lost!😕";
          setTimeout(() => {
            result.textContent = `let's go again😋`;
          }, 2500);
        }, 1500);
      };

      computerHand.style.animation = "shake-computer 1.5s ease alternate";
      playerHand.style.animation = "shake-player 1.5s ease alternate";
      setTimeout(() => {
        playerHand.src = `./images/${humanChoice}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
      }, 1500);

      computerHand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
      playerHand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
      if (humanChoice === computerChoice) {
        resultTie();
      } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
          computerScore++;
          resultLose();
        } else {
          humanScore++;
          resultWin();
        }
      } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
          humanScore++;
          resultWin();
        } else {
          computerScore++;
          resultLose();
        }
      } else if (humanChoice === "scissor") {
        if (computerChoice === "rock") {
          computerScore++;
          resultLose();
        } else {
          humanScore++;
          resultWin();
        }
      }
      setTimeout(() => {
        hScore.textContent = humanScore;
        cScore.textContent = computerScore;
      }, 1500);
    });
  });

  start();
};
game();

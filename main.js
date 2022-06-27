alert("Welcome to Ninja quiz.");

const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diane Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

//viewObject
const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  render(target, contents, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = contents;
  },
};

// namespacing functions
const game = {
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0;

    // main loop
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    //end of main loop
    this.gameOver();
  },

  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    view.render(this.question, question);
    const response = prompt(question);
    this.check(response);
  },

  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result, "Correct!", { "class": "correct" });
      alert("Correct!");
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        "class": "wrong",
      });
      alert(`Wrong! The correct answer was ${answer}.`);
    }
  },

  gameOver() {
    view.render(
      view.info,
      `Game over. You scored ${this.score} point${score !== 1 ? "s" : ""}`
    );
  },
};

game.start(quiz);

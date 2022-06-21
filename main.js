alert("Welcome to Ninja quiz.");

const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diane Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

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
    const response = prompt(question);
    this.check(response);
  },

  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      alert("Correct!");
      this.score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}.`);
    }
  },
};

game.start(quiz);

//Open principle classes
class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }
    printQuestionChoice() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('Answer is _______________');
    }
}

class Quiz {

    constructor(questions) {
        this.questions = questions;
    }

    //Closed Principle class
    printQuiz() {
        questions.forEach(question => {
            console.log(question);
            console.log(question.description);
            question.printQuestionChoice();
            console.log(' ');
        });
    }
}

const questions = [
    new BooleanQuestion('This is boolean question'),
    new MultipleChoiceQuestion('This is multiple question', [1, 2, 4, 5]),
    new TextQuestion('This is text question')
];

new Quiz(questions).printQuiz();

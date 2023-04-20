function finishFunction() {
    alert("You've completed the quizzzz")
}

function checkAnswers() {
    let score = 0;
    // assign the quiz elements to variable 
    quiz = document.forms.Quiz.elements;

    // assign the answer to the question to the answer1 variable 
    answer1 = quiz.growth.value;

    //check the answer to the first question 
    if(answer1 == "20%"){
        //increment 1 to the score
        score = score + 1; 
    }

    answer2 = quiz.talent.value;
    if(answer2 == "50"){
        score += 1;
    }
    userName = quiz.name.value;


    answer3 = quiz.film.value;
    if(answer3 == "Both"){
        score++
    }

    answer4 = quiz.first.value;
    if(answer4 == "1826"){
        score++
    }

    answer5 = quiz.kids.value;
    if(answer5 == "Vespa"){
        score++
    }



    alert ("Well done, " + userName + 
    "your final score is..." + score);
}
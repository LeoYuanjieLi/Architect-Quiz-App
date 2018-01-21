'use strict';

// `STORE` is responsible for storing the underlying data
// that our app needs to keep track of in order to work.

let currentQuestionIndex = 0;

const STORE = [
  {question: "What is the name for a decorative strip of wood across the top of a wall?", 
  optionA: 'Sconce', optionB: 'Molding', optionC: 'Valance', optionD: 'Verandah', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false,},

  {question: "What is the name for an architectural drawing of a building's exterior?", 
  optionA: 'Floor Plan', optionB: 'Elevation', optionC: 'Facade', optionD: 'Landscape', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "What is the name of Elvis Presley's colonial-revival-style house in Memphis?",
  optionA: 'The Elms', optionB: 'Hope House', optionC: 'Graceland', optionD: 'Heartbreak Hotel', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "Which type of building is designed to keep birds?",
  optionA: 'Aviary', optionB: 'Barracks', optionC: 'Stable', optionD: 'Conservatory', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: `What does "Beaux Arts" mean in French?`,
  optionA: 'Brittle Sculpture', optionB: 'Engagement Ring', optionC: 'Beautiful Archtecture', optionD: 'Fine Arts', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "What is the name for a window that sticks out on the outside of a house?",
  optionA: 'A Beach Window', optionB: 'A Bay Window', optionC: 'An Outlet Window', optionD: 'A Johnson Window', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "Which part of a church is often made of stained glass?",
  optionA: 'The Floor', optionB: 'The Altar', optionC: 'The Windows', optionD: 'The Doors', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "Which New York building was the tallest building in the world in 1940?",
  optionA: 'The Metropolitan Museum of Art', optionB: 'The Brooklyn Museum', optionC: 'The Flatiron Building', optionD: 'The Empire State Building',
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "What is the name of the building mentioned in the Bible that was supposed to reach heaven?",
  optionA: 'The Tower of Babel', optionB: 'The Temple', optionC: `Pharaoh's Palace`, optionD: 'The Tabernacle', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},

  {question: "What type of buildings did Andrew Carnegie donate money to build in the 19th century?",
  optionA: 'Factories', optionB: 'Homes', optionC: 'Railroad Stations', optionD: 'Libraries', 
  chosenA:false, chosenB:false, chosenC:false, chosenD:false},
];

let userGrade = 0;

const USER_ANSWER = [
	{answer:'None',correctAnswer: 'A'},
	{answer:'None',correctAnswer: 'B'},
	{answer:'None',correctAnswer: 'C'},
	{answer:'None',correctAnswer: 'A'},
	{answer:'None',correctAnswer: 'D'},
	{answer:'None',correctAnswer: 'A'},
	{answer:'None',correctAnswer: 'A'},
	{answer:'None',correctAnswer: 'B'},
	{answer:'None',correctAnswer: 'C'},
	{answer:'None',correctAnswer: 'D'},						
]

let count = ["1","2","3","4","5","6","7","8","9","10"];
function questionToDo(questionCount) {
	console.log('questionToDo Ran!')

	for(let i =0; i<USER_ANSWER.length; i++){
		if (USER_ANSWER[i].answer !== 'None'){
			count[i] = '';
		}
	}


	return questionCount;
}

// click start
function getStart(){
	$('.start-page-button').click(event=>{
		$('.start-page').empty();
		$('.js-buttons-toggle').removeClass('js-hidden');
		$('.js-progress-bar').removeClass('js-hidden');
		$('.js-progress-bar').removeClass('js-hidden');
		renderQuizList2(STORE[currentQuestionIndex], currentQuestionIndex);
	})
}

// render progress bar
function renderProgressBar(){
	let questionsLeft = questionToDo(count).toString().replace(/,/g, " ");
	$('.js-progress-bar').find('.progressBarText').removeClass("done");
	$('.js-progress-bar').find('.progressBarText').addClass("notDone");
	$('.js-progress-bar').find('.progressBarText').html(`Questions to be done: ${questionsLeft}`);
	console.log(`The count array is ${count}`);
	if(count.toString() === ",,,,,,,,,"){
		$('.js-progress-bar').find('.progressBarText').removeClass("notDone");
		$('.js-progress-bar').find('.progressBarText').addClass("done");
		$('.js-progress-bar').find('.progressBarText').html(`You are done!`);
	}
	

}

// render the quiz list
function generateItemElement(item, itemIndex) {
	let index = itemIndex + 1;
	return `
		<div class="list-item radio-toolbar" data-item-index="${itemIndex}" >
			<legend>${index} . ${item.question}</legend>
			<br></br>
			    <input type="radio" name="question-${index}-answers" id="question-${index}-answers-A" value="A"  />
			    <label for="question-${index}-answers-A">A. ${item.optionA}<span class='correct-answer'></span></label>
			<br>
			    <input type="radio" name="question-${index}-answers" id="question-${index}-answers-B" value="B"  />
			    <label for="question-${index}-answers-B">B. ${item.optionB}<span class='correct-answer'></span></label>
			<br>
			    <input type="radio" name="question-${index}-answers" id="question-${index}-answers-C" value="C"  />
			    <label for="question-${index}-answers-C">C. ${item.optionC}<span class='correct-answer'></span></label>

			<br>
			    <input type="radio" name="question-${index}-answers" id="question-${index}-answers-D" value="D"  />
			    <label for="question-${index}-answers-D">D. ${item.optionD}<span class='correct-answer'></span></label>	
			<br>		
		</div>

		`
}

function generateQuizItemsString(quiz) {
  console.log("Generating quiz list element");
  // generate an array of strings representing individual
  // shopping list items
  const items = quiz.map((item, index) => generateItemElement(item, index));
  // join together the item strings into a single big string
  return items.join("");	
}


// function renderQuizList() {
//   // render the shopping list in the DOM
//   console.log('`renderQuizList` ran');
//   let quizListItemsString = generateQuizItemsString(STORE);

//   // insert that HTML into the DOM
//   $('.js-quiz-list').html(quizListItemsString);
// }

function renderQuizList2(item, i) {
	console.log('`renderQuizList-2` ran');
	$('.js-quiz-list').html(generateItemElement(item, i));
	// check if the answer has been chosen, if so, highlighted;
	let $options = $('.js-quiz-list').find('input');
	for(let j =0; j<$options.length; j++){
		if($($options[j]).attr('value') === USER_ANSWER[i].answer){
			$($options[j]).attr('checked','checked'); 
			console.log($options[j])
		}
	}

  
}



// get current question index
function getCurrentIndex(item) {
  let itemIndexString = $(item)
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);	
}

// previous and next
function handleNext() {
// when click, go to the next question
	$('.next').on('click', event => {
		renderProgressBar();
		let $target = $('.js-quiz-list').find('.list-item');
		let itemIndex = getCurrentIndex($target);
	    console.log('`handleNext` ran');
	    if (itemIndex < STORE.length-1){
		    // STORE[itemIndex].hidden = true;
		    // STORE[itemIndex+1].hidden = false;
		    currentQuestionIndex += 1;
			renderQuizList2(STORE[currentQuestionIndex], currentQuestionIndex);

		}

  });

}


function handlePrevious() {
// when click, go to the previous question
	$('.previous').on('click', event => {
		renderProgressBar();
		let $self = $('.js-quiz-list').find('.list-item');
		const itemIndex = getCurrentIndex($self);
	    console.log('`handlePrevious` ran')
	    if (itemIndex > 0){
		    // STORE[itemIndex].hidden = true;
		    // STORE[itemIndex-1].hidden = false;
		    currentQuestionIndex -= 1;
			renderQuizList2(STORE[currentQuestionIndex], currentQuestionIndex);
		}
  });

}

// store data into USER_ANSWER
function chooseAnswer() {
	$('.js-quiz-list').on('click', 'input', event => {
		
		// choose the answer and change the USER_ANSWER value of the current question
		let $self = $(event.currentTarget);
		let $target = $self.closest('.list-item');
		let $input = $self.closest('div').find('input');
		let index = getCurrentIndex($target);
		USER_ANSWER[index].answer = $input.attr('value');
		$($self).attr('checked',"checked");
		renderProgressBar();
		console.log(`'chooseAnswer' is running on question number ${index+1} and answer is now ${USER_ANSWER[index].answer}`);
	})
}

// submitQuiz
function submitQuiz() {
	$('.submit-button button').on('click',event =>{
		console.log(`'submitQuiz' is working!`)
		// debugger;
		event.preventDefault();
		let stopFunction = false;
		let $self = $(event.currentTarget);
		for(let i=0; i< USER_ANSWER.length; i++){
			if(USER_ANSWER[i].answer === 'None'){
				window.alert('Please check back and answer all questions!');
				break;
			};
		};
		for(let i=0; i< USER_ANSWER.length; i++){
			if(USER_ANSWER[i].answer === 'None'){
				stopFunction = true;
				break;
			    }
			};
		if (stopFunction === false){
			$('.js-buttons-toggle').addClass('js-hidden');
			$('.js-quiz-list').addClass('js-hidden');
			score();
			renderFinalPage();
			}


		// reset consts: count
		count = ["1","2","3","4","5","6","7","8","9","10"];

	})
}

// check scores
function score(){
	userGrade = 0;
	for (let i=0; i<USER_ANSWER.length; i++){
		if(USER_ANSWER[i].answer === USER_ANSWER[i].correctAnswer){
			userGrade += 10;
		}
	}
	return userGrade;
	console.log(`user grade is ${userGrade} of 100 points`);
}
// rending grading page
function renderFinalPage(){
	console.log(`renderFinalPage ran!`);
	$('.js-progress-bar').find('.progressBarText').empty();
	let finalPage = `
	<h3 class="text-color-grey">YOUR FINAL SCORE IS </h3><h2>${userGrade} / ${USER_ANSWER.length*10}</h2>
	<button class="retake">Retake</button>
	<button class="seeAnswers">See Answers</button>	

	`;
	// if user score 80% or more, give them good job, else give them try again.
	let goodJob = `<h2 class="text-color-green">Good job! You pass!</h2>`
	let tryAgain = `<h2>Work harder and try again!</h2>`
	if(userGrade/(USER_ANSWER.length*10) > 0.7){
		finalPage += goodJob
	}else{finalPage += tryAgain}
	$('.final-page').html(finalPage);
}

// retake function
function retake(){
	// this function should rerender the first question and the button, 
	// as well as reset score to 0, reset questionIndex to 0 and set all selected button to false
	$('.final-page').on('click','.retake', event=>{
		console.log('retake ran!');
		userGrade = 0;
		currentQuestionIndex = 0;
		cleanOutAnswers();
		$('.js-buttons-toggle').removeClass('js-hidden');
		$('.js-quiz-list').removeClass('js-hidden');
		$('.final-page').empty();
		renderQuizList2(STORE[currentQuestionIndex], currentQuestionIndex);
		renderProgressBar(count);

	})
}

// clean out answers and reset them to no selection
function cleanOutAnswers(){
	for(let i=0; i<STORE.length; i++){
	STORE[i].chosenA = false;
	STORE[i].chosenB = false;
	STORE[i].chosenC = false;
	STORE[i].chosenD = false;
	USER_ANSWER[i].answer = 'None';
	}
}
// see answer function
function seeAnswers(){
	// show all question with correct answer highlited
	$('.final-page').on('click', '.seeAnswers', event=>{
		console.log('seeAnswers ran!');
		$('.js-quiz-list').removeClass('js-hidden');
		$('.js-quiz-list').empty();
		$('.final-page').empty();
		let seeAnswersPage = ""
		for(let i=0; i<STORE.length; i++){
			seeAnswersPage += generateItemElement(STORE[i], i);
		}
		$('.js-quiz-list').html(seeAnswersPage);
		showAnswer();
		$('.js-see-answer-page').html(`
		<button class='see-answer-retake-test'>Try Again!</button>
		`
		)
	})

}


// see-answer-retake
function retakeSeeAnswer(){
	$('.js-see-answer-page').on('click', event =>{
		console.log('kekekeke!');
		$('.js-quiz-list').empty();
		userGrade = 0;
		currentQuestionIndex = 0;
		cleanOutAnswers();
		renderQuizList2(STORE[currentQuestionIndex], currentQuestionIndex);
		$('.js-see-answer-page').empty();
		$('.js-buttons-toggle').removeClass('js-hidden');	
		renderProgressBar(count);					
	})
}

// show answer

// Note for reviewer: I use wrapped for-loop here only because I don't want to set a correct answer in html tags. 
// In this way, we don't have any clue of which answer is correct on html file in case some people will try to find it
// in development tool. The JS file we can create a seperate JSON and store it in server in practice...
function showAnswer(){
	// show answer for the specific question
	console.log('showAnswer ran!');
	let $listItemArray = $('.js-quiz-list').find('.list-item');
	for(let j=0; j<$listItemArray.length; j++){
		let $listItem = $($listItemArray[j]).find('label');
		let $options = $($listItemArray[j]).find('input');
		let questionNumber = parseInt($($listItemArray[j]).attr('data-item-index'))+1;
		for(let i=0;i<$listItem.length; i++){
			// debugger;
			console.log(questionNumber);
			if ($($listItem[i]).attr('for') ===  `question-${questionNumber}-answers-${USER_ANSWER[questionNumber-1].correctAnswer}`){
				let correctText =' Correct.';
				$($listItem[i]).find('.correct-answer').text("");
				$($listItem[i]).find('.correct-answer').html(correctText + '&nbsp;' + '&nbsp;');
			};

			if($($options[i]).attr('value') === USER_ANSWER[questionNumber-1].answer){
				$($options[i]).attr('checked','checked');
				console.log($options[i]);
			}
		}

	}

	$("input[type=radio]").attr('disabled', true);
}





function handleQuizList() {
	getStart();
	renderProgressBar();
	handleNext();
	handlePrevious();
	chooseAnswer();
	submitQuiz();
	retake();
	seeAnswers();
	retakeSeeAnswer();
	
}

$(document).ready((handleQuizList));

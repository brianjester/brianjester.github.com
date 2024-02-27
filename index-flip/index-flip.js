
async function loadWelcome() {
  resetNavLinks();
  window.json = await fetch('https://brianjester.github.io/index-flip/welcome.json').then(response => { return response.json() });
  postInit();
}
async function loadCaDmvQuestions() {
  resetNavLinks();
  document.getElementById("calif_dmv_c_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_ca_dl.json').then(response => { return response.json() });
  postInit();
}
async function loadNyDmvQuestions() {
  resetNavLinks();
  document.getElementById("ny_dmv_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_ny_dl.json').then(response => { return response.json() });
  postInit();
}

async function loadFccTechQuestions() {
  resetNavLinks();
  document.getElementById("fcc_tech_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_fcc_tech.json').then(response => { return response.json() });
  postInit();
}

async function loadCaBasicQuestions() {
  resetNavLinks();
  document.getElementById("ca_basic_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_ca_basic.json').then(response => { return response.json() });
  postInit();
}

async function loadCaDreQuestions() {
  resetNavLinks();
  document.getElementById("calif_dre_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_ca_re.json').then(response => { return response.json() });
  postInit();
}

async function loadJp2Questions() {
  resetNavLinks();
  document.getElementById("jp_2_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_jp_2.json2').then(response => { return response.json() });
  postInit();
}

async function loadJpHiraQuestions() {
  resetNavLinks();
  document.getElementById("jp_hira_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_jp_hira.json').then(response => { return response.json() });
  postInit();
}

async function loadJpK1Questions() {
  resetNavLinks();
  document.getElementById("jp_kanji_1_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_jp_kanji_1.json').then(response => { return response.json() });
  postInit();
}
async function loadJlptN5KanjiQuestions() {
  resetNavLinks();
  document.getElementById("jlpt_n5_k_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_jlpt_n5_k.json').then(response => { return response.json() });
  postInit();
}
async function loadJlptN5VocabQuestions() {
  resetNavLinks();
  document.getElementById("jlpt_n5_v_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_jlpt_n5_v.json').then(response => { return response.json() });
  postInit();
}

async function loadMusicQuestions() {
  resetNavLinks();
  document.getElementById("music_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_music_notes_1.json').then(response => { return response.json() });
  postInit();
}

async function loadAwsMlQuestions() {
  resetNavLinks();
  document.getElementById("aws_ml_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_us_aws_ml.json').then(response => { return response.json() });
  postInit();
}

async function loadMorseQuestions() {
  resetNavLinks();
  document.getElementById("morse_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_morse.json').then(response => { return response.json() });
  postInit();
}

async function loadAslQuestions() {
  resetNavLinks();
  document.getElementById("asl_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_asl.json').then(response => { return response.json() });
  postInit();
}

async function loadBaybayinQuestions() {
  resetNavLinks();
  document.getElementById("baybayin_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_baybayin.json').then(response => { return response.json() });
  postInit();
}

async function loadPeriodicQuestions() {
  resetNavLinks();
  document.getElementById("periodic_link").className = "nav-link active";
  window.json = await fetch('https://brianjester.github.io/index-flip/questions_periodic.json').then(response => { return response.json() });
  postInit();
}

function resetNavLinks() {
  document.getElementById("calif_dmv_c_link").className = "nav-link";
  document.getElementById("ny_dmv_link").className = "nav-link";
  document.getElementById("fcc_tech_link").className = "nav-link";
  document.getElementById("ca_basic_link").className = "nav-link";
  document.getElementById("calif_dre_link").className = "nav-link";
  document.getElementById("jp_2_link").className = "nav-link";
  document.getElementById("jlpt_n5_k_link").className = "nav-link";
  document.getElementById("jlpt_n5_v_link").className = "nav-link";
  document.getElementById("jp_hira_link").className = "nav-link";
  document.getElementById("music_link").className = "nav-link";
  document.getElementById("aws_ml_link").className = "nav-link";
  document.getElementById("morse_link").className = "nav-link";
  document.getElementById("asl_link").className = "nav-link";
  document.getElementById("baybayin_link").className = "nav-link";
  document.getElementById("create_cards_link").className = "nav-link";
  document.getElementById("load_cards_link").className = "nav-link";
  document.getElementById("periodic_link").className = "nav-link";
}

function postInit() {
  setupPage();
  setupOrder();
}

function setupPage() {
  // Above card - title and options
  document.getElementById("title").innerHTML = window.json.title;
}

function setupOrder() {
  window.order = "inOrder";
  window.questionRowNum = -1;
  setupCard();
}

function randomize() {
  window.order = "randomize";
  setupCard();
}

function backOne() {
  window.order = "back-one";  // not actually used anywhere
  window.questionRowNum = (window.questionRowNum == 0) ? 0 : window.questionRowNum = window.questionRowNum -1;
  setupCard();
  window.order = "inOrder";
}

function setupCard() {
  window.candAnswer="";
  flipMe(0);
  const SHOW = "Reveal";
  const NEXT = "▶️";
  const FLIP = "⟳ Flip";
  const CHECK = "Check";
  const test = window.json.test;  // top level node is test
  const numQuestions = test.length;
  var questionRow;

  if (window.order == "inOrder") {
    if (window.questionRowNum < numQuestions-1) {
      window.questionRowNum++;
    } else {
      window.questionRowNum = 0;
    }
  } else if (window.order == "randomize") {
    window.questionRowNum = Math.floor(Math.random() * numQuestions);
  } 

  questionRow = test[window.questionRowNum];

  // Front of card - set up question
  document.getElementById("A").innerHTML = " ";
  document.getElementById("B").innerHTML = " ";
  document.getElementById("C").innerHTML = " ";
  document.getElementById("D").innerHTML = " ";
  document.getElementById("E").innerHTML = " ";
  document.getElementById("question_id").innerHTML = questionRow.id;
  document.getElementById("question").innerHTML = questionRow.question;
  document.getElementById("question-back").innerHTML = questionRow.question;

  applyFeatures();
  if (questionRow.hasOwnProperty("A")) {
    document.getElementById("A").innerHTML = questionRow.A;
  }
  if (questionRow.hasOwnProperty("B")) {
    document.getElementById("B").innerHTML = questionRow.B;
  }
  if (questionRow.hasOwnProperty("C")) {
    document.getElementById("C").innerHTML = questionRow.C;
  }
  if (questionRow.hasOwnProperty("D")) {
    document.getElementById("D").innerHTML = questionRow.D;
  }
  if (questionRow.hasOwnProperty("E")) {
    document.getElementById("E").innerHTML = questionRow.E;
  }
  document.getElementById("next-btn-1").innerHTML = NEXT;
  document.getElementById("flip-btn-front").innerHTML = FLIP;

  // Back of card
  document.getElementById("answer_id").innerHTML = questionRow.id;
  document.getElementById("question-back").innerHTML = questionRow.question;
  applyFeatures();

  // Remove any possible images from last card
  document.getElementById("figure-front").innerHTML = "";
  document.getElementById("figure-back").innerHTML = "";
  document.getElementById("figure-attribution").innerHTML = " ";
  
  // check for figures/images
  if (questionRow.hasOwnProperty("image")) {
    const cardImage = questionRow.image;
	  // add image
    document.getElementById("figure-front").innerHTML = "<img src=\""+cardImage+"\" alt=\""+cardImage+"\" class=\"img-fluid\">";
    document.getElementById("figure-back").innerHTML = "<img src=\""+cardImage+"\" alt=\""+cardImage+"\" class=\"img-fluid\">";
  }

  // check for figure/image attribution
  if (questionRow.hasOwnProperty("attribution")) {
	  // add image
    document.getElementById("figure-attribution").innerHTML = "<i><small>* "+questionRow.attribution+"</small></i>";
    document.getElementById("figure-attribution-back").innerHTML = "<i><small>* "+questionRow.attribution+"</small></i>";
  }

  document.getElementById("check-btn").innerHTML = CHECK;
  document.getElementById("reveal-btn").innerHTML = SHOW;
  document.getElementById("flip-btn-back").innerHTML = FLIP;

  // set up answer row
  const answerLetter = questionRow.answer;
  const answerDivLeft='<div id="answer">';
  const answerDivRight='</div>';
  
  switch (answerLetter)
  {
    case "A": 
		document.getElementById(answerLetter).innerHTML = answerDivLeft + questionRow.A + answerDivRight;
    break;
    case "B": 
		document.getElementById(answerLetter).innerHTML = answerDivLeft + questionRow.B + answerDivRight;
    break;
    case "C": 
		document.getElementById(answerLetter).innerHTML = answerDivLeft + questionRow.C + answerDivRight;
    break;
    case "D": 
		document.getElementById(answerLetter).innerHTML = answerDivLeft + questionRow.D + answerDivRight;
    break;
    case "E": 
		document.getElementById(answerLetter).innerHTML = answerDivLeft + questionRow.E + answerDivRight;
    break;
    default:
      // placeholder for case not covered
  }
  clearGuessAndAnswer();
  applyFeatures();
}

function applyFeatures() {
  // feature toggles
  //   show/hide morse code dots and dashes
  var morse_toggle_exists = document.getElementById("flexSwitchCheckChecked");
  if(morse_toggle_exists) {
    document.getElementById("flexSwitchCheckChecked").checked = show_morse;
  }
  if(show_morse) {
	document.getElementsByClassName("morse-text")[0].style.visibility = 'visible';
	} else {
	  document.getElementsByClassName("morse-text")[0].style.visibility = 'hidden';
	}
}
function updateFeatures() {
  // feature toggles
  //   show/hide morse code dots and dashes
  var morse_toggle_exists = document.getElementById("flexSwitchCheckChecked");
  if(morse_toggle_exists) {
    show_morse = document.getElementById("flexSwitchCheckChecked").checked;
  }
  if(show_morse) {
	document.getElementsByClassName("morse-text")[0].style.visibility = 'visible';
	} else {
	  document.getElementsByClassName("morse-text")[0].style.visibility = 'hidden';
	}
}

function reveal() {
  const HIDE = "Hide";
  const SHOW = "Reveal";
  if (document.getElementById("reveal-btn").innerHTML == HIDE) {
    document.getElementById("answer").className = "";
    document.getElementById("reveal-btn").innerHTML = SHOW;
  } else {
    document.getElementById("answer").className = "bg-success text-white";
    document.getElementById("reveal-btn").innerHTML = HIDE;
  }
}

function flipMe(degrees) {
  const div = document.getElementById("flip-card-inner");
  div.style.transform = 'rotateY('+degrees+'deg)';
  applyFeatures();
}

function clearGuessAndAnswer() {
  const letters = ["A", "B", "C", "D", "E"];  //TODO Code Smell breaks easily
  for (let i=0;i<letters.length;i++){
    document.getElementById(letters[i]).className = "";
  }
  document.getElementById("answer").className = "";
  document.getElementById("check-btn").className = "btn btn-secondary btn-med me-md-4";
  window.candAnswer="";
}

function selectAnswer(candidateAnswer) {
  clearGuessAndAnswer();
  document.getElementById("answer").className = "";
  window.candAnswer=candidateAnswer;
  document.getElementById(candidateAnswer).className = "bg-warning";
  //btn btn-secondary btn-med me-md-4
  document.getElementById("check-btn").className = "btn btn-info btn-med me-md-4";
}

function check() {
  const test = window.json.test;  // top level node is test
  questionRow = test[window.questionRowNum];
  const candidateAnswer = window.candAnswer;
  const letters = ["A", "B", "C", "D", "E"];  // TODO code smell
  if (window.candAnswer == questionRow.answer) {
    document.getElementById("answer").className = "bg-success text-white";
    var snd = new Audio("success.mp3"); // buffers automatically when created
    snd.play();
  } else {
    // ensure we're only checking if a choice was made
    if (letters.includes(candidateAnswer)) {
      document.getElementById(candidateAnswer).className = "bg-danger text-white";
    }
  }
}
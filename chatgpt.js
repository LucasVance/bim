let itemMetadata = {
  currentItem: LearnosityAssess.getCurrentItem().questions,
  UI: document.createElement('div'),
}

function getQuestion() {
  let questions = LearnosityAssess.getCurrentItem().questions;
  
  for (let i = 0; i < questions.length; i++) {
    let questionType = questions[i].type;
    
    if (questionType === 'clozeassociation' || questionType === 'clozedropdown') {
      let validResponse = LearnosityAssess.getCurrentItem().questions[i].validation.valid_response;
      
      for (let j = 0; j < validResponse.value.length; j++) {
        console.log('%c' + validResponse.value[j], 'font-size: 20px; color: red');
      }
    } else if (questionType === 'clozeformula') {
      let validResponse = LearnosityAssess.getCurrentItem().questions[i].validation.valid_response;
      
      for (let j = 0; j < validResponse.value.length; j++) {
        document.write(validResponse.value[j][0].value);
        console.log('');
      }
    } else if (questionType === 'longtypeV2' || questionType === 'longtextV2') {
      console.log('%ccant be done use google or smth', 'font-size: 20px; color: red');
      console.log('');
    } else if (questionType === 'mcq') {
      let validResponse = questions[i].validation.valid_response;
      
      for (let j = 0; j < validResponse.value.length; j++) {
        let response = validResponse.value[j];
        if (response == 0) console.log('%cA', 'font-size: 20px; color: red');
        else if (response == 1) console.log('%cB', 'font-size: 20px; color: red');
        else if (response == 2) console.log('%cC', 'font-size: 20px; color: red');
        else if (response == 3) console.log('%cD', 'font-size: 20px; color: red');
        console.log('');
      }
    } else if (questionType === 'graphplotting') {
      let validResponse = questions[i].validation.valid_response;
      
      for (let j = 0; j < validResponse.value.length; j++) {
        if (validResponse.value[j].type === 'point') {
          let coords = JSON.stringify(validResponse.value[j].coords);
          console.log('%c' + coords, 'font-size: 20px; color: red');
          console.log('');
        }
      }
    }
  }
}

function dragElement(element) {
  var startX = 0, startY = 0, endX = 0, endY = 0;
  
  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    endX = e.clientX;
    endY = e.clientY;
    document.onmouseup = dragEnd;
    document.onmousemove = dragging;
  }
  
  function dragging(e) {
    e = e || window.event;
    e.preventDefault();
    startX = endX - e.clientX;
    startY = endY - e.clientY;
    endX = e.clientX;
    endY = e.clientY;
    element.style.top = element.offsetTop - startY + 'px';
    element.style.left = element.offsetLeft - startX + 'px';
  }
  
  function dragEnd() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  document.getElementById(element.id + 'header')
    ? (document.getElementById(element.id + 'header').onmousedown = dragStart)
    : (element.onmousedown = dragStart);
}

itemMetadata.UI.innerHTML = /* your HTML code here */
document.body.appendChild(itemMetadata.UI);
dragElement(itemMetadata.UI.firstElementChild);

setInterval(function printAns() {
  document.getElementById('answer').onclick = getQuestion;
}, 100);

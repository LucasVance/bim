let itemMetadata = {
  getCurrentItem: LearnosityAssess.getCurrentItem().questions,
  UI: document.createElement('div'),
}
function getQuestion() {
  let _0x3154ed = LearnosityAssess.getCurrentItem().questions
  for (let _0x5d9c14 = 0; _0x5d9c14 < _0x3154ed.length; _0x5d9c14++) {
    let _0x17c8a2 = _0x3154ed[_0x5d9c14].type
    if (_0x17c8a2 === 'clozeassociation') {
      let _0x4faf78 =
        LearnosityAssess.getCurrentItem().questions[_0x5d9c14].validation
          .valid_response
      for (let _0x5dc133 = 0; _0x5dc133 < _0x4faf78.value.length; _0x5dc133++) {
        console.log(
          '%c' + _0x4faf78.value[_0x5dc133],
          'font-size: 20px; color: red'
        )
      }
    } else {
      if (_0x17c8a2 === 'clozeformula') {
        let _0x1bb23e =
          LearnosityAssess.getCurrentItem().questions[_0x5d9c14].validation
            .valid_response
        for (
          let _0x243a5c = 0;
          _0x243a5c < _0x1bb23e.value.length;
          _0x243a5c++
        ) {
          console.log(
            '%c' + _0x1bb23e.value[_0x243a5c][0].value,
            'font-size: 20px; color: red'
          )
          console.log('')
        }
      } else {
        if (_0x17c8a2 === 'longtypeV2' || _0x17c8a2 === 'longtextV2') {
          console.log(
            '%ccant be done use google or smth',
            'font-size: 20px; color: red'
          )
          console.log('')
        } else {
          if (_0x17c8a2 == 'mcq') {
            let _0x2f57be = _0x3154ed[_0x5d9c14].validation.valid_response
            for (
              let _0x46179f = 0;
              _0x46179f < _0x2f57be.value.length;
              _0x46179f++
            ) {
              _0x2f57be.value[_0x46179f] == 0 &&
                (console.log('%cA', 'font-size: 20px; color: red'),
                console.log(''))
              _0x2f57be.value[_0x46179f] == 1 &&
                (console.log('%cB', 'font-size: 20px; color: red'),
                console.log(''))
              _0x2f57be.value[_0x46179f] == 2 &&
                (console.log('%cC', 'font-size: 20px; color: red'),
                console.log(''))
              _0x2f57be.value[_0x46179f] == 3 &&
                (console.log('%cD', 'font-size: 20px; color: red'),
                console.log(''))
            }
          } else {
            if (_0x17c8a2 === 'clozedropdown') {
              let _0x4d7fef = _0x3154ed[_0x5d9c14].validation.valid_response
              for (
                let _0x2816bb = 0;
                _0x2816bb < _0x4d7fef.value.length;
                _0x2816bb++
              ) {
                console.log(
                  '%c' + _0x4d7fef.value[_0x2816bb],
                  'font-size: 20px; color: red'
                )
                console.log('')
              }
            } else {
              if (_0x17c8a2 === 'graphplotting') {
                let _0x13227e = _0x3154ed[_0x5d9c14].validation.valid_response
                for (
                  let _0x5b8c54 = 0;
                  _0x5b8c54 < _0x13227e.value.length;
                  _0x5b8c54++
                ) {
                  if (_0x13227e.value[_0x5b8c54].type === 'line') {
                  } else {
                    if (_0x13227e.value[_0x5b8c54].type === 'point') {
                      let _0x24cfee = JSON.stringify(
                        _0x13227e.value[_0x5b8c54].coords
                      )
                      console.log(
                        '%c' + _0x24cfee,
                        'font-size: 20px; color: red'
                      )
                      console.log('')
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function dragElement(_0x2105b1) {
  var _0x15fbbb = 0,
    _0xe73bac = 0,
    _0x404f81 = 0,
    _0x26f09d = 0
  function _0x150d14(_0x55ca33) {
    ;(_0x55ca33 = _0x55ca33 || window.event).preventDefault()
    _0x404f81 = _0x55ca33.clientX
    _0x26f09d = _0x55ca33.clientY
    document.onmouseup = _0x53d7f8
    document.onmousemove = _0x217bfa
  }
  function _0x217bfa(_0x5019a8) {
    ;(_0x5019a8 = _0x5019a8 || window.event).preventDefault()
    _0x15fbbb = _0x404f81 - _0x5019a8.clientX
    _0xe73bac = _0x26f09d - _0x5019a8.clientY
    _0x404f81 = _0x5019a8.clientX
    _0x26f09d = _0x5019a8.clientY
    _0x2105b1.style.top = _0x2105b1.offsetTop - _0xe73bac + 'px'
    _0x2105b1.style.left = _0x2105b1.offsetLeft - _0x15fbbb + 'px'
  }
  function _0x53d7f8() {
    document.onmouseup = null
    document.onmousemove = null
  }
  document.getElementById(_0x2105b1.id + 'header')
    ? (document.getElementById(_0x2105b1.id + 'header').onmousedown = _0x150d14)
    : (_0x2105b1.onmousedown = _0x150d14)
}
itemMetadata.UI.innerHTML =
  '<div id="Launcher" class="Launcher" style="outline: blue solid 2px;min-height: 250px;transform: \ntranslateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: \nblack;position: absolute;border-radius: 5px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">\n<center><h1 class="bottomTitle" ></h1></center>\n<img id="nullicon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAzUExURf///y4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkf///9I/hLEAAAAPdFJOUwBAkMAwELDQgGDg8KBQIBWXB8EAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5wMVFCkd252keQAAALtJREFUOMuFk1EOxCAIRFWK1uqW+99227gGFDbMF5FXmSKEMBQTTKUjKGEmqYw7UGgVbPmTdtUVuBRwrQ7mcYM2wwWIv8OO7BYtAMVt1g2j7oiLWSJyXE2gfUIdLnswAVa6HYDotAEQ3UYNlKcP3XqPCbyFsRlVovx3rtLuDYAN4Cv+AcUDyAUOD4gegA7QnD5QViP3xNWwwENbQDoQj6HH/nUgNrBawDJ1WX8fZT5g2vJdre9xAu9/FekvYGUfOUjDCIcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDMtMjFUMjA6NDE6MjgrMDA6MDAjWdlGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAzLTIxVDIwOjQxOjI4KzAwOjAwUgRh+gAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMy0yMVQyMDo0MToyOSswMDowMKNmS5EAAAAASUVORK5CYII=" class="center">\n    <h1 class="title"><center>BIM Bot</center></h1>\n    <center><h1 class="bottomTitle" >1.0</h1></center>\n<style id="bruh">\n@import url(\'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap\');\n@import url(\'https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap\');\n.title {\n    font-family: \'Nunito\', sans-serif;\n    font-size: 30px;\n    color: white\n}\n.bottomTitle {\n    font-family: \'Nunito\', sans-serif;\n    font-size: 15px;\n    margin-top: -0.7rem;\n}\n.button {\n  font-family: \'Nunito\', sans-serif;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n  width: 100%;\n  text-align: center;\n  color: white; \n  background-color: black;\n}\n.button:hover {\n  color: black;\n  background-color: grey\n}\n.button:active {\n  background-color: black;\n}\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n</style>\n    <button id="answer" class="button">Paste Answer In Console</button>\n    <br>\n</div>'
document.body.appendChild(itemMetadata.UI)
dragElement(itemMetadata.UI.firstElementChild)
setInterval(function printAns() {
  document.getElementById('answer').onclick = getQuestion
}, 100)

var header = document.getElementById('h1')
// alert(header);
header.style.color = "red";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeaderColor() {
  colorinput = getRandomColor()
  header.style.color = colorinput;
}

setInterval("changeHeaderColor()", 500)

var hoverMe = document.getElementById('one')
var clickMe = document.getElementById('two')
var doubleClick = document.getElementById('three')

hoverMe.addEventListener('mouseover', (e) => {
  hoverMe.textContent =  "Mouse is over me";
  hoverMe.style.color = 'red';
});

hoverMe.addEventListener('mouseout', (e) => {
  hoverMe.textContent =  "HOVER OVER ME!";
  hoverMe.style.color = 'black';
});

clickMe.addEventListener('click', (e) => {
  clickMe.textContent =  "I have been clicked";
  clickMe.style.color = 'blue';
});

doubleClick.addEventListener('dblclick', (e) => {
  doubleClick.textContent =  "I have been double clicked";
  doubleClick.style.color = 'red';
});



var tttBoard = document.querySelector('#tictacb')
var squares = tttBoard.querySelectorAll('td')

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }
  else if (this.textContent === "X") {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}

var restart = document.querySelector('#b')

function rsrt() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',rsrt);

//CONNECT 4

var pBlue = 'rgb(5, 5, 245)';

var pRed = 'rgb(245, 5, 5)';

var gameon = true;


var board = document.querySelector('#cboard')
var slots = board.querySelectorAll('td')

function changeColor(index,color) {
  return slots[index].querySelector('button').style.backgroundColor = color;
}

function returnColor(index) {
  return slots[index].querySelector('button').style.backgroundColor;
}


function returnClick(){
  slots.forEach((button, index) => {
    button.addEventListener("click",() => {
      return (index);
    });
  });
}
let rtnClick = returnClick();

function insertPiece(index,color) {
  if (returnColor(index+35) === '') {
    changeColor(index+35,color);
  }
  else {
    for (var i = 0; i < 36; i+=7) {
      if (returnColor(index+i) !== '') {
        // if (returnColor(index+i-7) !== pRed && returnColor(index+i-7) !== pBlue) {
          changeColor(index+i-7,color);
          break;
        // }
      }
    }
  }
}


// const ret = () => slots.indexOf(slots[i]);


// function returnClick() {
//   for (let i = 0; i < slots.length; i++)
//   {
//     slots[i].querySelector('button').onclick = function() {
//       return slots;
//     }
//
//
//   }
// }


let counter = 0;

function count(){


  slots.forEach((button, index) => {
    button.addEventListener("click",() => {
      counter++;
      return counter;
    });
  });

}

// returnClick();
// console.log(returnClick());

// function count() {
//   for (let i = 0; i < slots.length; i++)
//   {
//     slots[i].querySelector('button').onclick = function(){
//         return counter++;
//     }
//   }
// }
count();
console.log(counter)



  slots.forEach((button, index) => {
    button.addEventListener("click",() => {
      if (counter%2 === 0) {
        insertPiece(index,pRed);
      } else {
          insertPiece(index,pBlue);
        }
    });
  });

// for (let i = 0; i < 10; i++) {
//   slots[0].addEventListener("click",() => {
//     if (counter%2 === 0) {
//       insertPiece(0,pRed);
//     } else {
//         insertPiece(0,pBlue);
//       }
//   });
// // };
// slots[1].addEventListener("click",() => {
//   if (counter%2 === 0) {
//     insertPiece(1,pRed);
//   } else {
//       insertPiece(1,pBlue);
//     }
// });


//returnClick();






//Bottom

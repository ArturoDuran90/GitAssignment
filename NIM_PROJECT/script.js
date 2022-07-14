player_one = "p1";
player_two = "p2";

piece_taken = 0;

const board = document.getElementsByClassName('board flex-container center');
const piece = document.getElementsByClassName('piece');
const pieceOne = document.getElementById('pieceOne');
const pieceTwo = document.getElementById('pieceTwo');
const pieceThree = document.getElementById('pieceThree');
const pieceFour = document.getElementById('pieceFour');
const pieceFive = document.getElementById('pieceFive');
const pieceSix = document.getElementById('pieceSix');
const pieceSeven = document.getElementById('pieceSeven');
const pieceEight = document.getElementById('pieceEight');
const pieceNine = document.getElementById('pieceNine');
const pieceTen = document.getElementById('pieceTen');

function main() {
    handleClick();
}

const handleClick = evt => {
    if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        pieceOne.innerHTML = "";
    }
    if(evt.target.id == pieceTwo) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }if(evt.target.id == pieceOne) {
        console.log(piece_taken)
        piece_taken +=1;
        
    }
    
}

main();

pieceOne.addEventListener('click', handleClick);
pieceTwo.addEventListener('click', handleClick);
pieceThree.addEventListener('click', handleClick);
pieceFour.addEventListener('click', handleClick);
pieceFive.addEventListener('click', handleClick);
pieceSix.addEventListener('click', handleClick);
pieceSeven.addEventListener('click', handleClick);
pieceEight.addEventListener('click', handleClick);
pieceNine.addEventListener('click', handleClick);
pieceTen.addEventListener('click', handleClick);

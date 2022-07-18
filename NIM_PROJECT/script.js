player_one = "p1";
player_two = "p2";

piece_taken = 0;
deleted_piece = 0;

const takePiece = document.getElementById('takePiece');
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

nim_board = [pieceOne, pieceTwo, pieceThree, pieceFour, pieceFive, pieceSix, pieceSeven, pieceEight, pieceNine, pieceTen];

function handleClick(evt) {
    if(evt.target.id == "takePiece") {
        if(piece_taken == 3) {
            endTurn();
        } else {
            nim_board[deleted_piece].innerHTML = "";
            deleted_piece += 1;
            piece_taken += 1;
            console.log(piece_taken);
        }
    }
    
}

function endTurn() {

}

takePiece.addEventListener('click', handleClick);
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
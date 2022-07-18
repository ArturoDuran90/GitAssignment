player_one = "p1";
player_two = "p2";

piece_taken = 0;
deleted_piece = 0;

player = true;

const takePiece = document.getElementById('takePiece');
const playerTurn = document.getElementById('playerTurnText');
const end_turn = document.getElementById('end_turn');
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
    if(deleted_piece <=9){
        if(evt.target.id == "takePiece") {
            if(piece_taken == 3) {
                determineWinner()
                playerTurn.innerHTML="Cannot take any more pieces. Please click End Turn."
            } else {
                nim_board[deleted_piece].innerHTML = "";
                deleted_piece += 1;
                piece_taken += 1;
                console.log(piece_taken);
            }
        }
    }else{
        console.log("Game Still in Play");
    }
    determineWinner()
}
function determineWinner(){
    if(deleted_piece >=10){
        if(player==true){
            playerTurn.innerHTML="Player Two Wins!";
            console.log("Player Two Wins")
        }else if(player==false){
            playerTurn.innerHTML="Player One Wins!";
            console.log("Player One Wins")
        }
    }else{
        console.log("Game Still in Play");
    }
}

function determinePlayer(){
    if(player==true){
        playerTurn.innerHTML="Player One";
        player=false;
    }else if(player==false){
        playerTurn.innerHTML="Player Two";
        player=true;
    }
}

function endTurn() {
    if(piece_taken<=0){
        playerTurn.innerHTML="You must take at least one piece."
    }else{
        console.log(deleted_piece + " taken")
        piece_taken=0;
        determinePlayer()
        determineWinner()
        console.log(player)
        console.log("Turn Ended.")
    }
    
}
determinePlayer()

takePiece.addEventListener('click', handleClick);
end_turn.addEventListener('click', endTurn);
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
let player_name;
fields = [0, 1, 2, 3, 4, 5, 6, 7, 8]
isPlayerMove = true
listWithFields = ["arr0", "arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arr7", "arr8"]
computerMoves = []  // list with all moves done by computer
playerMoves = []  // list with all moves done by player
let win = false; // variable becomes true when user/computer wins
let canReplay = false;
let winnerFlag = -1; //if 0-draw 1-player 2-computer

document.addEventListener('DOMContentLoaded', () => {
  let start_button = document.getElementById('clickon');
  start_button.addEventListener('click', main);
});

function replay(flag){
    let winnerMessage = document.getElementById('endgame-message');
    if (flag===0){
    winnerMessage.innerHTML = `<span class='endgame-message'>DRAW</span>`;
    }
    else if (flag===1){
    winnerMessage.innerHTML = `<span class='endgame-message'>Player has won</span>`;
    }else if (flag===2){
    winnerMessage.innerHTML = `<span class='endgame-message'>Computer has won</span>`;
    }
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the popup
    var span = document.getElementsByClassName("close1")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
//    winnerMessage.innerHTML = `<span style="color: red;">Hello world</span> world`;

    let replay_button = document.getElementById('replay');
    if (replay_button.style.display === "none") {
    replay_button.style.display = "block";
    }

    replay_button.addEventListener('click', reload);

//    location.reload();
}

function reload(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none"
    fields = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    isPlayerMove = true
    winnerFlag=-1;
    listWithFields = ["arr0", "arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arr7", "arr8"]
    computerMoves = []  // list with all moves done by computer
    playerMoves = []  // list with all moves done by player
    let win = false; // variable becomes true when user/computer wins
    let canReplay = false;
    show_the_board();
    start_the_game();
}

function main(){
    player_name = document.getElementById('fname').value;
    console.log(player_name);
    let name_is_ok = name_ok(player_name);
    if (name_is_ok){
        show_the_board();
        start_the_game();
    }else
    document.getElementById('error_message').innerText = 'No nick or nick too long';

}

function start_the_game() {
    let cells = document.querySelectorAll('td');
    for (let field_index = 0; field_index < fields.length; field_index++)
        cells[field_index].addEventListener('click', () => {playerMove(cells[field_index].id)});
}

function name_ok(name){
    if (name.length > 0 && name.length<=10){
        return true;
    }else{
        return false;
    }
}

function playerMove(el){
    if (isPlayerMove===true && listWithFields.includes(el)){
        var img = document.createElement('img');
        img.src = "static/cross.JPG";
        img.width = 80;
        img.height = 80;
        document.getElementById(el).appendChild(img)
        removeFieldFromPossibleFields(el, 'User');
        isPlayerMove=false;
        win = checkIfWin();
        if (win===true){
            console.log("PLAYER HAS WON-end of the game");
            canReplay ===true;
            winnerFlag=1
            replay(winnerFlag);
//            alert("PLAYER HAS WON-end of the game");
        }else{
            computerMove();
        }
    }else if (listWithFields.length===0 && win===false){
        console.log("IT'S A DRAW");
        canReplay===true;
        winnerFlag=0;
        replay(winnerFlag);
        alert("IT'S A DRAW");
    }
}

function computerMove(){
    if (listWithFields.length===0 && win===false){
        console.log("IT'S A DRAW");
        canReplay===true;
        winnerFlag=0;
        replay(winnerFlag);
        alert("IT'S A DRAW");
    }else{
        var compField = listWithFields[Math.floor(Math.random() * listWithFields.length)];
        var imgComputer = document.createElement('img');
        imgComputer.src = "static/dot.JPG";
        imgComputer.width = 80;
        imgComputer.height = 80;
        document.getElementById(compField).appendChild(imgComputer);
    //    document.getElementById(compField).innerHTML = 'O';
        removeFieldFromPossibleFields(compField, 'Computer');
        console.log("computer move" + listWithFields);
        win = checkIfWin();
        if (win===true){
            console.log("COMPUTER HAS WON-end of the game");
            canReplay===true;
            winnerFlag=2;
            replay(winnerFlag);
//            alert("COMPUTER HAS WON-end of the game");

        }else{
            isPlayerMove=true;
            start_the_game();
        }
    }
}

function removeFieldFromPossibleFields(field_number, player){
    let index = listWithFields.indexOf(field_number);
    if (player==='Computer'){
        computerMoves.push(field_number);
        computerMoves.sort();
        console.log("computer: " + computerMoves)
    }else{
        playerMoves.push(field_number);
        playerMoves.sort();
         console.log("user: " + playerMoves)
    }
    if (index > -1)
        listWithFields.splice(index, 1);
}

function winnerWindowAlert()
{
    var elem = document.createElement('div');
    elem.style.cssText = 'position:block; top:50%;width:200px;height:400px;opacity:0.3;background:#000';
    document.body.appendChild(elem);
}

function checkIfWin()
{
    const winningCombinations = [
    ["arr0", "arr1", "arr2"],
    ["arr3", "arr4", "arr5"],
    ["arr6", "arr7", "arr8"],
    ["arr0", "arr3", "arr6"],
    ["arr1", "arr4", "arr7"],
    ["arr2", "arr5", "arr8"],
    ["arr0", "arr4", "arr8"],
    ["arr2", "arr4", "arr6"]];

    for(var x=0; x<winningCombinations.length; x++){
        console.log(winningCombinations[x]);
        if(computerMoves.includes(winningCombinations[x][0]) &&
         computerMoves.includes(winningCombinations[x][1]) &&
         computerMoves.includes(winningCombinations[x][2])){
            console.log("Computer wins");
            return true;
        }else if(playerMoves.includes(winningCombinations[x][0]) &&
        playerMoves.includes(winningCombinations[x][1]) &&
        playerMoves.includes(winningCombinations[x][2])){
            console.log("Player wins");
            return true;
        }
    }

    return false;
}



function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function show_the_board() {  // html text as string processed into JS
    let board_string = '';
    board_string+=`
    <table>
        <tr>
            <td id="arr0" class="field"></td>
            <td id="arr1" class="field"></td>
            <td id="arr2" class="field"></td>
        </tr>
        <tr>
            <td id="arr3" class="field"></td>
            <td id="arr4" class="field"></td>
            <td id="arr5" class="field"></td>
        </tr>
        <tr>
            <td id="arr6" class="field"></td>
            <td id="arr7" class="field"></td>
            <td id="arr8" class="field"></td>
        </tr>
    </table>
    `;

    document.querySelector('.container').innerHTML = board_string;
    let nick_to_display = document.getElementById('name_to_display');
    nick_to_display.innerHTML = `<span style="color: red;">${player_name}</span> is playing`;
//    document.getElementById('container').innerHTML = board_string;   -> ten zapis uzywamy gdy zamiast klasy w html mamy id
}




let player_name;
fields = [0, 1, 2, 3, 4, 5, 6, 7, 8]
isPlayerMove = true
listWithFields = ["arr0", "arr1", "arr2", "arr3", "arr4", "arr5", "arr6", "arr7", "arr8"]

document.addEventListener('DOMContentLoaded', () => {
  let start_button = document.getElementById('clickon');
  start_button.addEventListener('click', main);
});

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
        document.getElementById(el).appendChild(img)
//        document.getElementById(el).innerHTML = 'X';
        console.log("Wykonano ruch")
        removeFieldFromPossibleFields(el);
        isPlayerMove=false;
        computerMove();
    }
}

function computerMove(){
    var compField = listWithFields[Math.floor(Math.random() * listWithFields.length)];
    var img = document.createElement('img');
    img.src = "static/dot.JPG";
    document.getElementById(compField).appendChild(img)
//    document.getElementById(compField).innerHTML = 'O';
    removeFieldFromPossibleFields(compField);
    console.log("computer move" + listWithFields);
    isPlayerMove=true;
    start_the_game();
}

function removeFieldFromPossibleFields(field_number){
    let index = listWithFields.indexOf(field_number);
    console.log(field_number + " " + index);
    if (index > -1)
        listWithFields.splice(index, 1);
}

function reply_click()
{
    console.log("Button clicked, id "+this.id);
}



function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function show_the_board() {
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

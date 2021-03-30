let player_name;
fields = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//var isMouseDown = false;
//
//document.addEventListener('mousedown', function(event) {
//    if ( event.which ) isMouseDown = true;
//}, true);
//
//document.addEventListener('mouseup', function(event) {
//    if ( event.which ) isMouseDown = false;
//}, true);

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
//        playerMove();
        //timer_start();
        start_the_game();
    }else
    document.getElementById('error_message').innerText = 'No nick or nick too long';

}

function start_the_game() {
    let cells = document.querySelectorAll('td');

    for (let field_index = 0; field_index < fields.length; field_index++)
//    cells[field_index].addEventListener('click', () => console.log(field_index));
    cells[field_index].addEventListener('click', () => {document.getElementById(cells[field_index].id).innerHTML = 'X'});
}

function name_ok(name){
    if (name.length > 0 && name.length<=10){
        return true;
    }else{
        return false;
    }
}

function draw_figure(element) {
    document.getElementById(element).innerHTML = 'X';
}

function playerMove(){
   for(let i=0; i<tablica.length; i++){
        tablica[i].addEventListener('click', reply_click, false);
        document.getElementById(tablica[i].id).innerHTML = 'X';
//        document.getElementById(tablica[i].id).onclick = reply_click;
        console.log(tablica[i]);
    }
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

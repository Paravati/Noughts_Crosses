//document.addEventListener('click', () => {
////  let start_button = document.getElementById('clickon');
//  let player_name = document.getElementById('fname').value;
//  console.log(start_button);
//  let start_button = document.getElementById('clickon');
//  start_button.addEventListener('click', main(player_name));
//});
let player_name;
let name_is_ok = false;
let start_button = document.getElementById('clickon');
start_button.addEventListener('click', read_name);

function read_name() {
    player_name = document.getElementById('fname').value;
    console.log(player_name);
    let name_is_ok = name_ok(player_name);
    if (name_is_ok){
        main(player_name)
    }else
    document.getElementById('error_message').innerText = 'No nick or nick too long';
}

document.addEventListener('click', () => {
  let start_button = document.getElementById('clickon');
  console.log(start_button);
  start_button.addEventListener('click', main);
});

function main(){
    show_the_board();
//        //    timer_start();
//        start_the_game();
}

function start_the_game() {
    let cells = document.querySelectorAll('td');

//    for (let card_index = 0; card_index < cards.length; card_index++)
//    cells[card_index].addEventListener('click', () => player_puts_dot(card_index));
}

function name_ok(name){
    if (name.length > 0 && name.length<=10){
        return true;
    }else{
        return false;
    }
}
//document.addEventListener('DOMContentLoaded', () => {
//  let start_button = document.getElementById('start_button');
//  start_button.addEventListener('click', main);
//});


//show_the_board();

//var tablica = document.getElementsByClassName("field");
//console.log(tablica);
//console.log(tablica[0]);
//console.log(tablica[0].id)

//playerMove();

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

function rysuj() {
    console.log("Wybrano argument arr0")
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
//    let nick_to_display = document.getElementById('nick_to_display');
//    nick_to_display.innerHTML = `<span style="color: red;">${player_name}</span> is playing`;
//    document.getElementById('container').innerHTML = board_string;   -> ten zapis uzywamy gdy zamiast klasy w html mamy id
}

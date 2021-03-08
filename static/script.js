
//document.addEventListener('DOMContentLoaded', () => {
//  let start_button = document.getElementById('start_button');
//  start_button.addEventListener('click', main);
//});


show_the_board();

var tablica = document.getElementsByClassName("field");
console.log(tablica);
console.log(tablica[0]);
console.log(tablica[0].id)

playerMove();

function playerMove(){
   for(let i=0; i<tablica.length; i++){
        tablica[i].addEventListener('click', reply_click, false);
        document.getElementById(tablica[i].id).onclick = reply_click;
        console.log(tablica[i]);
    }
}

function reply_click()
{
    console.log("Button clicked, id "+this.id);
}
//document.getElementById('arr0').onclick = reply_click;
//document.getElementById('arr1').onclick = reply_click;
//document.getElementById('arr2').onclick = reply_click;

//function player() {
//   for (let i = 0; i < blocks.length; i++) {
//     blocks[i].addEventListener(‘click’, rysuj {
//         this.getElementsByTagName(‘field’)[0].classList.add(‘clicked’);
//     })
//   }
//};



//document.getElementById("field").addEventListener("click", function() {
//  var tablica = document.getElementsByClassName("field");
//    for(let i=0; i<9; i++){
//        tablica[i].addEventListener('click', rysuj, false);
//}
////  myFunction(p1, p2);
//});

//for(let i=0; i<9; i++){
//    tablica[i].addEventListener('click', rysuj, false);
//}
//var zmienna = document.getElementById("arr0");
//zmienna.addEventListener('click', rysuj, false);


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
//    document.getElementById('container').innerHTML = board_string;   -> ten zapis uzywamy gdy zamiast klasy w html mamy id
}

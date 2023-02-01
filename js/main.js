// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro 
//  ed emetto un messaggio in console con il numero della cella cliccata.


/****************************************** *
 *               ON LOAD                    *
 *                                          *
 * *****************************************/
//recupero gli elementi dall HTML
const buttonEl = document.getElementById("start_button")
const gridContainerEl = document.getElementById("grid_container")
const difficulSelectEl = document.getElementById("difficul_select")

const easyNumberBox = 49  // imposto i numeri di box in base alla difficoltà
const mediumNumberBox = 81
const hardNumberBox = 100


/****************************************** *
 *               ON CLICK                   *
 *                                          *
 * *****************************************/

//genero la griglia al "click"
buttonEl.addEventListener(
    "click",
    function(){
    const difficulGrade = difficulSelectEl.value // recupero il grado di difficoltà scelto dall'utente

    gridContainerEl.innerHTML = ""  // svuoto lHTML per un'altra partita

    

    if( difficulGrade == "facile"){ // se è facile richiamo la funzione e creo una griglia con 49 box
        gridGenerate(gridContainerEl, easyNumberBox )
    } 
    else if (difficulGrade == "medio"){
         gridGenerate(gridContainerEl, mediumNumberBox)  // se è medio richiamo la funzione e creo una griglia con 81 box
    }
    else if(difficulGrade == "difficile"){
         gridGenerate(gridContainerEl, hardNumberBox)  // se è difficle richiamo la funzione e creo una griglia con 100 box
    }


    }
)


/****************************************** *
 *               FUNCTION                   *
 *                                          *
 * *****************************************/

//creo una funzione che mi genera una griglia
function gridGenerate (grid, boxNumbers){
    for(let i = 0; i < boxNumbers; i++){ // credo N div in base alla difficoltà
        const gridBox = document.createElement("div") // creo un div

        if(boxNumbers == easyNumberBox){         // se la difficoltà è facile aggiungo la classe "box_easy"
            gridBox.classList.add("box_easy") 
        }
        else if(boxNumbers == mediumNumberBox){  // se la difficoltà è media aggiungo la classe "box_medium"
            gridBox.classList.add("box_medium") 
        }
        else{                                    // se la difficoltà è alta aggiungo la classe "box_difficult"
             gridBox.classList.add("box_difficult")
        }


        gridBox.append ([i + 1])  // inserisco il numero progressivo nel box

        gridBox.addEventListener(
            "click",
            function(){
                this.classList.add("active")  // con il this(riferito a "gridBox") assegno la classe active sul "click"
                console.log(`hai cliccato il box n ${[i + 1]}`);  // stampo su che box ho cliccato
            }
        )

        grid.append(gridBox) // inserisco il "div" nella griglia HTML
    }

}
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



/****************************************** *
 *               ON CLICK                   *
 *                                          *
 * *****************************************/

//genero la griglia al "click"
buttonEl.addEventListener(
    "click",
    function(){
    gridContainerEl.innerHTML = ""
    gridGenerate(gridContainerEl)   

    }
)




/****************************************** *
 *               FUNCTION                   *
 *                                          *
 * *****************************************/
//creo una funzione che mi genera una griglia
function gridGenerate (grid){
    for(let i = 0; i < 100; i++){ // creo 100 div
        const gridBox = document.createElement("div") // creo un div
        gridBox.classList.add("box") // accedo alla classlist di "div" aggiungo la classe "box"
        gridBox.append ([i + 1])  // inserisco il numero progressivo nel box

        gridBox.addEventListener(
            "click",
            function(){
                this.classList.add("active")
                console.log(`hai cliccato il box n ${[i + 1]}`);
            }
        )

        grid.append(gridBox) // inserisco il "div" nella griglia
    }

}
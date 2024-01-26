const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
const start_btn = document.getElementById("start_btn");
let counter = 0; 

start_btn.style.display = "block";
rock.style.display = "none";

function play_game() {

    start_btn.style.display = "none";
    rock.style.display = "block";
    rock.classList.add("rock");

    document.addEventListener("keydown", () => {
       
        let top_dino = window.getComputedStyle(dino).top;

        if (top_dino == "400px") {
            
            dino.classList.add("jump");
        
            setTimeout( () => {
                dino.classList.remove("jump");
            }, 500);
        }

    })

    setInterval( () => {
        let dino_top = parseInt(window.getComputedStyle(dino).top);
        //console.log("dino: " + dino_top);
        let rock_left = parseInt(window.getComputedStyle(rock).left);
        //console.log("rock: " + rock_left);

        if (rock_left < -16) {
            rock.style.display = "none";
            counter = counter + 1;
            score.innerHTML = counter;
            //console.log(counter);
        }
        else {
            rock.style.display = "block";
        }

        if (dino_top > 360 && rock_left > -20 && rock_left < 90) {
            alert("Game Over!\nScore: " + counter);
            rock.style.display = "none";
            location.reload();
        }

    }, 50);
}  


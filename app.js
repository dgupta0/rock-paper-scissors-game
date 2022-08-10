const arr = ["scissors.png",
    "rock.png",
    "note.png"]

const scissors = document.getElementById("sci")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const player = document.getElementById("player");
const computer = document.getElementById("computer")
const announce = document.getElementById("announce")


scissors.addEventListener("click", function () {
    player.innerHTML = `<img id="sci" src="scissors.png" alt="Scissors icons created by Freepik">`
    let compNum = Math.floor(Math.random() * 3)
    console.log(compNum)
    let compChoice = arr[compNum]
    computer.innerHTML = `<img src = "${compChoice}">`
    renderDisable()
    if (compNum === 0) {
        announce.textContent = "It's a draw"
    } else if (compNum === 1) {
        announce.textContent = "Player Lost!!"
    } else if (compNum === 2) {
        announce.textContent = "Player Won!!"
    }
    setTimeout(reset, 1000)
})

rock.addEventListener("click", function () {
    player.innerHTML = `<img id="rock" src="rock.png" alt="rock icon by DinosoftLabs">`
    let compNum = Math.floor(Math.random() * 3)
    console.log(compNum)
    let compChoice = arr[compNum]
    computer.innerHTML = `<img src = "${compChoice}">`
    renderDisable()
    if (compNum === 0) {
        announce.textContent = "Player Won!!"
    } else if (compNum === 1) {
        announce.textContent = "It's a draw"
    } else if (compNum === 2) {
        announce.textContent = "Player Lost!!"
    }
    setTimeout(reset, 2000)
})

paper.addEventListener("click", function () {
    player.innerHTML = `<img id="paper" src="note.png" alt="note icon by Freepik">`
    let compNum = Math.floor(Math.random() * 3)
    console.log(compNum)
    let compChoice = arr[compNum]
    computer.innerHTML = `<img src = "${compChoice}">`
    renderDisable()
    if (compNum === 0) {
        announce.textContent = "Player Lost!!"
    } else if (compNum === 1) {
        announce.textContent = "Player Won!!"
    } else if (compNum === 2) {
        announce.textContent = "It's a draw"
    }
    setTimeout(reset, 3000)
})

function renderDisable() {
    scissors.style.opacity = 0.5;
    rock.style.opacity = 0.5;
    paper.style.opacity = 0.5;
    scissors.disabled = true;
    paper.disabled = true;
    rock.disabled = true;
}
const resetBtn = document.createElement("button")
resetBtn.setAttribute("id", "restBtn")


function reset() {

    resetBtn.innerText = "Reset";
    allAnnounce.appendChild(resetBtn)
}
resetBtn.addEventListener("click", function () {
    resetBtn.remove()
    announce.textContent = "Choose your icon!"
    scissors.style.opacity = null;
    rock.style.opacity = null;
    paper.style.opacity = null;
    scissors.disabled = false;
    paper.disabled = false;
    rock.disabled = false;
    player.innerHTML = ""
    computer.innerHTML = ""

})


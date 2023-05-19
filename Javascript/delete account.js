function showConfirmBox() {
    document.getElementById("overlay").hidden = false;
}
function closeConfirmBox() {
    document.getElementById("overlay").hidden = true;
}

function isConfirm(answer) {
    if (answer) {
        console.log("Answer is yes");
        window.location = "Login-en.html"
    } else {
        console.log("Answer is no");
    }
    closeConfirmBox();
}

function isConfirmPl(answer) {
    if (answer) {
        console.log("Answer is yes");
        window.location = "Login-pl.html"
    } else {
        console.log("Answer is no");
    }
    closeConfirmBox();
}
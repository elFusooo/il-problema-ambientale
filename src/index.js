window.onload = function() {
    // Tutte le funzioni che esegue quando la pagina è caricata
    header = document.getElementById("head")
    body = document.getElementById("body")
    body.onclick = function() {
        if(header.classList.contains("open")){
            header.classList.remove("open")
        }
    }
}

function menu() {
    if(header.classList.contains("open")){
        header.classList.remove("open")
    } else {
        header.classList.add("open")
    }
}
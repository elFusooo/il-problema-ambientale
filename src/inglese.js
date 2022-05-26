const language = document.getElementById("language")
language.addEventListener("change", function(){
    lan = language.value
    if(lan == "eng"){
        window.location = "inglese.html"
    }
    if(lan == "ita"){
        window.location = "inglese_ita.html"
    }
})
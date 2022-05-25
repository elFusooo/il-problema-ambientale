const language = document.getElementById("language")
console.log(language)

language.addEventListener("change", function(e){
    console.log(language.value)
    lan = language.value
    if(lan == "eng"){
        window.location = "inglese.html"
    }
    if(lan == "ita"){
        window.location = "inglese_ita.html"
    }
})
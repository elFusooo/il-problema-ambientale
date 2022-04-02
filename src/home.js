//header-announcement-bar-wrapper


window.onload = function(){
    url = "https://climateclock.world"
    fetch(url, {"mode": "no-cors"})
  .then(res => res.text())
  .then((responseText) => {
    console.log(responseText)
  });
}
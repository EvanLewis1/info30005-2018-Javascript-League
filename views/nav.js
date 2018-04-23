window.onload = function(){


    var links = document.getElementsByClassName("layoutlink")

    for (var i = 0; i < links.length; i++){
        link = links[i]
        //if (link.getAttribute("href") == window.location){
        if (window.location.href.indexOf(link.getAttribute("href").substring(1)) != -1){
            link.setAttribute("class", "selected")
        }
    }
}

document.write(

)
function change(index){
    const p = document.getElementById("section");

    switch(index){
        case 1:
            p.innerHTML = "<iframe width=100% height=100% src='./w5-bootstrap/intro.html' />";
            break;
        case 2:
            p.innerHTML = "<iframe width=100% height=100% src='./w5-bootstrap/pokemon.html' />";
            break;
        case 3:
            p.innerHTML = "<iframe width=100% height=100% src='./w4-js/index.html' />";
            break;
        case 4:
            p.innerHTML = "<iframe width=100% height=100% src='./w6/index.html' />";
            break;
    }
}
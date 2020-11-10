function changeVideo(index){
    const p = document.getElementById('player');
    console.log(index);
    if(index == 1){
        p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if(index == 2){
        p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if(index == 3){
        p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if(index == 4){
        p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }

    // switch(index){
    //     case 1:
    //         p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    //         break;
    // }
}
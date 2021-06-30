
const wid = window.innerWidth;
if(wid < 700){
    let h = document.getElementsByClassName("htag");
    let d = document.getElementsByClassName("proj1");
    let iTag = document.getElementsByTagName("i");
    for(let i = 0; i < d.length; i++){
        d[i].removeAttribute("data-aos");
    }
    for(let i = 0; i < h.length; i++){
        h[i].removeAttribute("data-aos");
        h[i].removeAttribute("data-aos-duration");
    }
    for(let i = 0; i < iTag.length; i++){
        iTag[i].removeAttribute("data-aos");
        iTag[i].removeAttribute("data-aos-duration");
    }
}



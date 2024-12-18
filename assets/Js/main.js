let search = document.querySelector(".search-form");

document.getElementById("search-btn").onclick = () =>{
    search.classList.toggle("active");
    cartItem.classList.remove("active");
    responsiveNabar.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.getElementById("cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    search.classList.remove("active");
    responsiveNabar.classList.remove("active");
};

let responsiveNabar = document.querySelector(".navbar");
document.getElementById("menu-btn").onclick = () => {
    responsiveNabar.classList.toggle("active");
    cartItem.classList.remove("active");
    search.classList.remove("active");
};

document.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    if(document.documentElement.scrollTop > 50){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
})

// start scroll top
let calcscrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if( pos > 100){
        scrollProgress.style.display = "flex";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });
};
window.onscroll = calcscrollValue;
window.onload = calcscrollValue;
// end scroll top

//AOS function
AOS.init();
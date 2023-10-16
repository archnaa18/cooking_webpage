//counter design
document.addEventListener("DOMContentLoaded",()=>{
function counter(id,start,end,duration){
    let obj=document.getElementById(id),
    current=start,
    range=end-start,
    increment=end>start ? 1 :-1,
    step=Math.abs(Math.floor(duration / range)),
    timer=setInterval(()=>{
        current +=increment;
        obj.textContent=current;
        if(current==end){
            clearInterval(timer);
        }
    },step);
}
counter("count1",0,3456,3000);
counter("count2",100,4000,3000);
counter("count3",1000,6000,3000);
counter("count4",1500,7000,3000);
});

//active navbar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// Hide navbar
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
//owl-carousel
$('.team-slider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:1000,
    smartSpeed:450,
    margin:20,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        991:{
            items:3,
        },
        1200:{
            items:4,
        },
        1920:{
            items:5,
        },
        2300:{
            items:5,
        }
    }
});
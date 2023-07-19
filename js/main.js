//  Designed & Developed by:  Farhad Ahmed || Codeaims  

//sticky header
const navbar = document.querySelector('header');
window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    }
    else{
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }
}
// header script 
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#hlink');
const faSolid = document.querySelector('#bars');
hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
});
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
});
// header script 

// Testimonial script
const userPics = document.getElementsByClassName('user-pic');
const userTexts = document.getElementsByClassName('user-text');

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove('active-pic');
    }
    for(userText of userTexts){
        userText.classList.remove('active-text');
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
}

const toggleBtn = document.querySelector('#toggleBtn');
const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');
const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');
const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () =>{
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})

//  Designed & Developed by:  Farhad Ahmed || Codeaims  
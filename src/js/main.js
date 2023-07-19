const barBtn = document.querySelectorAll('.show_bar_btn')
const asideBar= document.querySelector("aside")

barBtn.forEach(i => {
    i.addEventListener('click', showBarBtn)
})


function showBarBtn() {
    asideBar.classList.toggle('active')
}


const slideImage = document.querySelector('#product_img')

const sliderImageArr = [
    '/public/images/slider/2021-rolls-royce-ghost_100787927_m.jpg',
    '/public/images/slider/DAL500033.webp',
    '/public/images/slider/FERRARI_Portofino-M-2020_main.jpg',
    '/public/images/slider/Tata-H2X-14.jpg'
]
let count = 0
let time = 3000

function changeSliderImage(){
    slideImage.src = sliderImageArr[count]
    console.log(slideImage.src);
    if(count < sliderImageArr.length - 1){
        count += 1
    }else{
        count = 0
    }

    setTimeout('changeSliderImage()', time)
}

changeSliderImage()

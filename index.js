
const sliders = [
    {
        background_image:"slider-1.jpg",
        slider_title:"Fast reliable & <br> efficient solutions",
        slider_description:"There are many variations in passages of lorem <br> but the majority have suffered alteration in some form",
        button_text:"Read now",
        alignment:"center"
    },
    {
    
        background_image:"slider-2.jpg",
        slider_title:`<span class="green-text"> IT SOFTWARE SOLUTION &</span> <br> <span class="major-text">technology</span></span>`,
        slider_description:"",
        button_text:"Discover More",
        alignment:"center"
    },
    {
        background_image:"slider-3.jpg",
        slider_title:"Experience in <br> Financial & Business<br> Services",
        slider_description:"There are many variations in passages of ipsum <br> but the majority have suffered alteration in some form",
        button_text:"Read More",
        alignment:"start"
    }
]
const carousel_1 = [
    {
        title:"Manage IT Services",
        content:"There are very lipsum of in past<br> stages of available some",
        image:"1.jpg"
    },
    {
        title:"Cyber Security",
        content:"There are very lipsum of in past<br> stages of available some",
        image:"2.jpg"
    },
    {
        title:"Digital Experience",
        content:"There are very lipsum of in past<br> stages of available some",
        image:"3.jpg"
    },
    {
        title:"Digital Marketing",
        content:"There are very lipsum of in past<br> stages of available some",
        image:"4.jpg"
    }
]
const carousel_2 = [
    {
        title:"Product development",
        icon:"bulb.svg",
        content:"Lorem ipsum dolor sit <br> amet do."
    },
    {
        title:"UI/UX designing",
        icon:"launch.svg",
        content:"Lorem ipsum dolor sit <br> amet do."
    },
    {
        title:"Digital marketing",
        icon:"marketing.svg",
        content:"Lorem ipsum dolor sit <br> amet do."
    },
    {
        title:"Content management",
        icon:"book.svg",
        content:"Lorem ipsum dolor sit <br> amet do."
    },
    {
        title:"Data analysis",
        icon:"analysis.svg",
        content:"Lorem ipsum dolor sit <br> amet do."
    }
]


var slider_index = 0

function show_sliders(){

    if(slider_index+1 <sliders.length){
        slider_index++;
    }
    else{
        slider_index = 0
    }


    var slider_element = document.getElementsByClassName("slider")[0];
    var slider_title = document.getElementById("slider-title");
    var slider_description = document.getElementById("slider-description")
    var slider_button = document.getElementById("slider-button")

    var slider = sliders[slider_index]

    const path = `./images/sliders/${slider.background_image}`


    slider_element.style.alignItems = slider.alignment
    slider_element.style.paddingLeft = slider.alignment=="start"? "10%":"0px"

    slider_title.style.textAlign = slider.alignment

    slider_element.style.backgroundImage = `url(${path})`
    slider_title.innerHTML = slider.slider_title
    slider_description.innerHTML = slider.slider_description
    slider_button.innerHTML = slider.button_text

}

function show_carousel_1(){

    for(carousel_index = 0; carousel_index<carousel_1.length; carousel_index++){
        var carousel_element = document.getElementsByClassName("carousel-item")[carousel_index];
        var carousel_overlapp = document.getElementsByClassName("carousel-overlapp")[carousel_index];
        var carousel_title = document.getElementsByClassName("carousel-title")[carousel_index];
        var carousel_description = document.getElementsByClassName("carousel-content")[carousel_index];

        var carousel = carousel_1[carousel_index]
    
        const path = `./images/carousel1/${carousel.image}`
    
        carousel_element.style.backgroundImage = `url(${path})`
        carousel_title.innerHTML = carousel.title;
        carousel_description.innerHTML = carousel.content;  
    
    }
}
function hover_carousel(index){
    const element = document.getElementsByClassName("carousel-overlapp")[index]
    const content = element.querySelector('.carousel-content');
    const button = element.querySelector('.carousel-button');

    element.style.backgroundColor = "rgba(0, 0, 0, 0.718)";
    content.style.color = "rgba(255, 255, 255, 0.69)"
    content.innerHTML = carousel_1[index].content
    button.innerHTML = `Read more <img src="./icons/arrow-righ.svg">`


}
function unhover_carousel(index){
    const element = document.getElementsByClassName("carousel-overlapp")[index]
    const content = element.querySelector('.carousel-content');
    const button = element.querySelector('.carousel-button');

    element.style.backgroundColor = "transparent";
    content.innerHTML = ""
    button.innerHTML = ""
}

function show_carousel_2(){

    for(carousel_index = 0; carousel_index<carousel_2.length; carousel_index++){
        var carousel_element = document.getElementsByClassName("carousel-parent")[carousel_index];
        const carousel_title = carousel_element.querySelector('.carousel-title');
        const carousel_content = carousel_element.querySelector('.carousel-content');
        const carousel_image = carousel_element.querySelector('.carousel-image');

        const carousel = carousel_2[carousel_index]

        const image_path = `./icons/${carousel.icon}`

        const words = carousel.title.split(' ')

        carousel_title.innerHTML =  `${words[0]}<br>${words[1]}`
        carousel_content.innerHTML = carousel.content
        carousel_image.src = image_path
    }

}
function hover_carousel_2(index){
    var carousel_element = document.getElementsByClassName("carousel-parent")[index];
    const carousel_title = carousel_element.querySelector('.carousel-title');
    const carousel_content = carousel_element.querySelector('.carousel-content');
    const carousel_line = carousel_element.querySelector('.line');

    carousel_element.style.backgroundColor = "rgba(255,255,255,1)"

    carousel_line.style.backgroundColor = "#6653E8"
    carousel_line.style.maxWidth = "100%"
    carousel_title.style.color = "black"
    carousel_content.style.color = "rgba(0,0,0,0.6)"

}
function unhover_carousel_2(index){
    var carousel_element = document.getElementsByClassName("carousel-parent")[index];
    const carousel_title = carousel_element.querySelector('.carousel-title');
    const carousel_content = carousel_element.querySelector('.carousel-content');
    const carousel_line = carousel_element.querySelector('.line');

    carousel_element.style.backgroundColor = "transparent"
    carousel_line.style.backgroundColor = "white"
    carousel_line.style.maxWidth = "30%"
    carousel_title. style.color = "white"
    carousel_content.style.color = "#ffffffa7"

}



function toggle_sticky_header(){
    
    var scroll_position = window.scrollY || window.pageYOffset;

    if(scroll_position>header_2_offset && scroll_position != 0){
        header_2.style.position = 'fixed'
    }
    else{
        header_2.style.position = 'sticky'

    }
}

const header_2 = document.getElementsByClassName("header2")[0]
const header_2_offset = header_2.offsetTop;


// window.addEventListener('scroll', toggle_sticky_header);

show_carousel_1()
show_carousel_2()

setInterval(() => {
    show_sliders()
}, 7000);
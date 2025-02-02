const generalImage = document.querySelector(".general--image");
const generalTitle = document.querySelector(".title--general--image")
const galleryElements = document.querySelectorAll(".gallery--item_image");

for(let i = 0; i < galleryElements.length; i++) {
    galleryElements[i].addEventListener("click", function () {
        setGeneralDesign(galleryElements[i]);
        animationStart(galleryElements[i])
        setTimeout(function(){
            animationStart("class", '');
          }, 100);
        animationStop(galleryElements[i])

    })
}
    function setGeneralDesign(galleryElement) {
    
        generalImage.src = galleryElement.getAttribute("src");
        generalTitle.innerHTML = galleryElement.getAttribute("data-alt-text")  
    }
    function animationStart(imageanimation){
        let classList = generalImage.classList;
        let classList1 = generalTitle.classList;
        classList.add("animate__fadeInLeft")
        classList1.add("animate__fadeInLeft")
       
    }
    function animationStop(imageanimationStop){
        let classList = generalImage.classList;
        let classList1 = generalTitle.classList;
        classList.remove("animate__fadeInLeft")
        classList1.remove("animate__fadeInLeft")
        
    }

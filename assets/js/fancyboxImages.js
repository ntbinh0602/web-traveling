// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
  });
  

function hideElement () {
    let cardImages = document.querySelectorAll(".card-image")
    let valueNumber = document.getElementById("fillMoreImgNumber")
    let addLastImage = document.getElementsByClassName("more-images")
    let sum = 1;
    // console.log(cardImages)
    for (i=0; i<cardImages.length; i++) {
        if(i>6) {
            cardImages[i].style.display = "none";
        }

        // if(i>5 && i<7) {
        //     addLastImage.classList.remove("hide");
        // }
        if(i && i>6) {
            sum = sum + 1
        }
    }

    valueNumber.innerHTML = sum;
    // console.log(sum)
}

hideElement();


let popupKeys = document.querySelectorAll(".popupkey"),
    popupEle = document.querySelector(".popup"),
    exit = popupEle.querySelector(".close"),
    popup = popupEle.querySelector(".box"),
    popupImgEle = popupEle.querySelector("img"),
    galleryImages = document.querySelectorAll("#Gallery img"),
    currentImgIndex,
    next = popupEle.querySelector(".next"),
    prev = popupEle.querySelector(".prev"),
    popupIndicatorsContainer = popupEle.querySelector(".indicators");

for(let i=0; i< galleryImages.length; i++){
    let newIndicator = document.createElement("li");

    newIndicator.textContent = i+1;
    if(i==0){
        newIndicator.classList.add("active");
    };
    popupIndicatorsContainer.append(newIndicator);
};

let popupIndicators=popupEle.querySelectorAll("li");

popupKeys.forEach(function(popupkey){
    popupkey.addEventListener("click",function(){
        let currentImgEle = popupkey.parentElement.previousElementSibling,
            currentImgSrc = currentImgEle.getAttribute("src"),
            galleryImgesArr = Array.from(galleryImages),
            currentImgIndex = galleryImgesArr.indexOf(currentImgEle);

        updatePopupImage(currentImgSrc);
        updateIndicators();
        openPopUp();
    });
});

popupEle.addEventListener("click",closePopUp);

exit.addEventListener("click",closePopUp);

popup.addEventListener("click", function(e){
    e.stopPropagation();
});

next.addEventListener("click",function(){
    currentImgIndex = ++currentImgIndex % galleryImages.length;
    let nextImgIndex = currentImgIndex,
        nextImgEle = galleryImages[nextImgIndex],
        nextImgSrc = nextImgEle.getAttribute("src");

    updateIndicators();
    updatePopupImage(nextImgSrc);
}); 

prev.addEventListener("click",function(){
    currentImgIndex = (--currentImgIndex+galleryImages.length)%galleryImages.length;
    let prevImgIndex = currentImgIndex,
        prevImgEle = galleryImages[prevImgIndex],
        prevImgSrc = prevImgEle.getAttribute("src");

    updateIndicators();
    updatePopupImage(prevImgSrc);
}); 

popupIndicators.forEach(function(popupIndicator, currentIndicatorIndex){
    popupIndicator.addEventListener("click", function(){
        let newImgEle = galleryImages[currentIndicatorIndex],
            newImgSrc = newImgEle.getAttribute("src");
        currentImgIndex = currentIndicatorIndex;

        updatePopupImage(newImgSrc);
        updateIndicators();
    });
});
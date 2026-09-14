function openPopUp(){
    popupEle.classList.add("active");
    setTimeout(function(){
        popupEle.classList.add("show");
    }, 1);
};

function closePopUp(){
    popupEle.classList.remove("show");
    setTimeout(function(){
        popupEle.classList.remove("active");
    }, 500);
};

function updatePopupImage(imgSrc){
    popupImgEle.setAttribute("src",imgSrc);
}

function updateIndicators(){
    let currentIndicator=popupIndicators[currentImgIndex],
        oldIndicator=popupEle.querySelector("li.active");

    oldIndicator.classList.remove("active");
    currentIndicator.classList.add("active");
};
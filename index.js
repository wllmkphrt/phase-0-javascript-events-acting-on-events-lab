function moveDodgerLeft(){
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if(left>0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const dodger = document.getElementById('dodger');
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    
    if(right<400){
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});
state = 0;

function changeImage() {

    if ( state == 0 ) {
        state = 1;
        document.getElementById('image').src = "heart2.png";
    }
    else {
        state = 0;
        document.getElementById('image').src = "heart1.png";
    }
}


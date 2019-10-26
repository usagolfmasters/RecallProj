// JavaScript Document\
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("dist");
var img2 = document.getElementById("hub1");
img1.onclick = function(){
  modal.style.display = "block";
  var modalImg = document.getElementById("img0");
  var captionText = document.getElementById("caption");
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
img2.onclick = function(){
  modal.style.display = "block";
  var modalImg = document.getElementById("img1");
  var captionText = document.getElementById("caption");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
https://stackoverflow.com/questions/40572787/how-set-modal-popup-multiple-image

var img2 = document.getElementById('myImg2');
    var img3 = document.getElementById('myImg3');

    //handle click for myImg2
    img2.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    //handle click for myImg3
    img3.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
*/
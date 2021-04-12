function displayNextImage() {
x = (x === images.length - 1) ? 0 : x + 1;
document.getElementById("flex1").src = images[x];
            }
function startTimer() {
setInterval(displayNextImage, 5000);
            }

var images = [], x = -1;
images [0] = "image/m1.jpeg";
images[1] = "image/m2.jpeg";
images[2] = "image/m3.jpeg";
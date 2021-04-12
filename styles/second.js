function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }
 
          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }
 
          function startTimer() {
              setInterval(displayNextImage, 2500);
          }
 
          var images = [], x = -1;
          images[0] = "image/b1.jpeg";
          images[1] = "image/b4.jpeg";
          images[2] = "image/b3.jpeg";
          images[3]="image/b5.jpeg";
          images[4]="image/b6.jpeg";
          
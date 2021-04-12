function swap(){
            var image1,image2,image3,image4;
            image1=document.getElementById('flex1').src;
            image2=document.getElementById('flex2').src;
            image3=document.getElementById('flex3').src;
            image4=document.getElementById('flex4').src;
            document.getElementById('flex1').src=image4;
            document.getElementById('flex2').src=image3;
            document.getElementById('flex4').src=image1;
            document.getElementById('flex3').src=image2;
            }
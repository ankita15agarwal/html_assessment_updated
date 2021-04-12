$(function(){
                var iArray=new Array();
                iArray[0]="image/b1.jpeg";
                iArray[1]="image/b3.jpeg";
                iArray[2]="image/b4.jpeg";
                iArray[3]="image/b5.jpeg";
    
                var thisId=0;
                window.setInterval(function(){
                    $('#img').attr('src',iArray[thisId]);
                    thisId++; 
                    if (thisId==3) 
                    {
                        thisId=0;
                    } 
                },2500);        
            });
            
            
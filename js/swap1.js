function swap(n, t){
            var img = document.images[parseInt(n)];
            var src = img.src;
            var val = img.getAttribute('value');
            img.src = t.src;
            img.setAttribute('value', t.getAttribute('value'));
            t.src = src;
            t.setAttribute('value', val);  
            }
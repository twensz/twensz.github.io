const mainImage = document.querySelector('.img-container img');
const thumbContain = document.querySelector('.thumb');
const overlayImage = document.querySelector('.overlay');
const imageContain = document.querySelector('.image-container')
const h1 = document.querySelector('h1');
const pContain = document.querySelector('.detail');


setTimeout(function() {
    h1.style.opacity = '1';
}, 2600);

thumbContain.addEventListener('click', function(e){
    if( e.target.className == 'thumb-img') {
        const number = e.target.getAttribute('id');
        const p = document.querySelector('.detail p');
        
        pContain.removeChild(p);

        const pBaru = document.createElement('p');


        mainImage.setAttribute('src', 'Img/kucing-'+ number +'.jpg');
        mainImage.classList.add('anima');
        setTimeout(function() {
            mainImage.classList.remove('anima');
        }, 700);

        switch(number){
            case '1':
                document.body.style.backgroundColor = 'rgb(232,184,170)';
                pBaru.style.color = 'rgb(232,184,170)';
                pBaru.appendChild( document.createTextNode('Jack, 9 Month'));
                break;
            case '2':
                document.body.style.backgroundColor = 'rgb(75,180,212)';
                pBaru.style.color = 'rgb(75,180,212)';
                pBaru.appendChild( document.createTextNode('Mickey, 13 Month'));
                break;
            case '3':
                document.body.style.backgroundColor = 'rgb(121, 156, 190)';
                pBaru.style.color = 'rgb(121, 156, 190)';
                pBaru.appendChild( document.createTextNode('Piko, 2 Month'));
                break;
            case '4':
                document.body.style.backgroundColor = 'rgb(232,232,232)';
                pBaru.style.color = 'rgb(232,232,232)';
                pBaru.appendChild( document.createTextNode('Kitty, 18 Month'));
                break;
        }
        pContain.appendChild(pBaru);
        
    }
});
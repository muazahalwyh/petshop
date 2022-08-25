function tumnelChange(num){
    var tumnel = 'assets/gmbr/gbr' + num + '.jpg';
    document.getElementById("img-main").src = tumnel;
}

/* const Tombol = document.querySelector('button.btn.beranda');

const Deskripsi = document.querySelector('div.keterangan');

const list = document.querySelectorAll('li list-menu')
list.forEach(list=>list.addEventListener('mouseover', function(e){
    list.classList.add('animated', 'rubberband')
}))

Tombol.addEventListener('click', (e)=>{
//    Tombol.classList.add('d-none');
//    Deskripsi.classList.add('d-none');
//    document.body.style.backgroundColor = 'red';
    
});*/


const Gallery = document.querySelector('#galery');
const thumb = document.querySelectorAll('img.thumb');
const imgGallery = document.querySelector('.img-thumbnail');

const tombolResponsif = document.querySelector('#responsif');
const menuResponsif = document.querySelector('ul.responsif-menu');

Gallery.addEventListener('click', (e)=>{
    if(e.target.classList.contains('thumb')){
        imgGallery.src = e.target.src;

        imgGallery.classList.add('fadeIn');
        setTimeout(()=>{
            imgGallery.classList.remove('fadeIn');
        }, 500);

        thumb.forEach((thumb)=>{
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
        });

        e.target.classList.add('active');

    }
})


tombolResponsif.addEventListener('click', ()=>{
    menuResponsif.classList.toggle('d-none');
});






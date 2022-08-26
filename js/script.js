const Gallery = document.querySelector('#galery');
const thumb = document.querySelectorAll('img.thumb');
const imgGallery = document.querySelector('.img-thumbnail');

const tombolResponsif = document.querySelector('#responsif');
const menuResponsif = document.querySelector('ul.responsif-menu');

//membuat gambar yang ada di halaman all galery ketika diklik gambarnya di akan berpindah/berubah bergantian.
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

//membuat gambar bar/tombol pada navbar saat diresponsif tombol tersebut ketika diklik menu navbarnya bisa ilang muncul.
tombolResponsif.addEventListener('click', ()=>{
    menuResponsif.classList.toggle('d-none');
});





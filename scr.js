const sMerah = document.querySelector('.s-merah');
const sHijau = document.querySelector('.s-hijau');
const sBiru = document.querySelector('.s-biru');
const canvas = document.querySelector('.canvas');

sMerah.addEventListener('input', function () {
    const m = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;

    canvas.style.backgroundColor = 'rgb(' + m + ',' + h + ',' + b + ')';
});


sHijau.addEventListener('input', function () {
    const m = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;

    canvas.style.backgroundColor = 'rgb(' + m + ',' + h + ',' + b + ')';
});


sBiru.addEventListener('input', function () {
    const m = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;

    canvas.style.backgroundColor = 'rgb(' + m + ',' + h + ',' + b + ')';
});


// jquery

$('.nav-item').on('click', function(e){

    var item = $(this).attr('href');

    var el = $(item);

    $('body').animate({
        scrollTop: el.offset().top - 50
    }, 1000);

    e.preventDefault();
    

})
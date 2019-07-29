$(window).on('load', function () {
var apofelement = $('.slide:first'),
speed = 400,
interval = speed * 10;
apofelement.animate({
top: '+=10px',
opacity: 1
}, speed).addClass('actived');
setInterval(function() {
apofelement.animate({
top: '-=10px',
opacity: 0
}, speed).removeClass('actived');
if (apofelement.next().html() == undefined) {
apofelement = $('.slide:first')
} else {
apofelement = apofelement.next();
};
setTimeout(function() {
apofelement.animate({
top: '+=10px',
opacity: 1
}, speed).addClass('actived');
}, speed)
}, interval);
});
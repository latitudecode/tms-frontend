$(function() {
    var slides = $('#instafeed .insta-img').children().length;
    var slideWidth = $('#instafeed').width();
    var min = 0;
    var max = -((slides - 1) * slideWidth);

    $("#instafeed .insta-img").width(slides*slideWidth).draggable({
        axis: 'x',
        drag: function (event, ui) {
            if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        }
    });
});
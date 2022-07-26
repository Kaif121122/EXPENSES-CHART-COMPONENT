// WHEN HOVER ON GRAPH COLUMNS 

$('.graph1').hover(function() {
    $(this).find('.graph-data').addClass('flex');
},
function () {
    $(this).find('.graph-data').removeClass('flex');
}
);

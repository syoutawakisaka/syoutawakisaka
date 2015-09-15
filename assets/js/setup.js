$(document).ready(function() {
    $('#promo').cycle({
        fx: 'scrollHorz',
        timeout:    4000,
        speed:      800,
        next: '#promonav .next',
        pager:    '#promoindex',
        height: 300,
        pause: 1
    });
});

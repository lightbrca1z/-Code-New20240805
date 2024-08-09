
// $(function(){
//     $('#typo .inner')
//     .css('top', '-100px')
//     .on('click', function(){
//         $('#typo .inner').animate({
//             top:'100px'
//         },
//         1500,
//         'linear'
//     );
//     });
// });

$(function(){
    $('#typo .inner')
    .css('top', '-100px')
    .on('click', function(){
        $('#typo .inner').animate({
            top:'100px'
        },
        1500,
        'linear',
        function(){
            $('#typo .inner').animate({top: '0px'}, 500);
        }
    );
    });
});
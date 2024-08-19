$(function(){
    // 
    var duration = 300;

    // aside ----------------------------------------
    var $aside = $('.page-main > aside');
    $('.menu > button').on('click', function(){
        // asideが表示されているかどうかをチェック
        if($aside.is(':visible')){
            // 表示されている場合は非表示にアニメーション
            $aside.stop(true).animate({left: '-350px'}, duration, 'easeInBack', function(){
                $aside.hide(); // アニメーション完了後に非表示にする
            });
        } else {
            // 非表示の場合は表示にアニメーション
            $aside.show().stop(true).animate({left: '0'}, duration, 'easeOutBack');
        }
    });
});
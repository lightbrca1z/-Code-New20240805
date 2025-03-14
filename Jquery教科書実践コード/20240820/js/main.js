$(function () {

    /*
     * Slideshow
     */
    $('.slideshow').each(function () {

    // 変数の準備
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        var $container = $(this),                                 // a
            $slideGroup = $container.find('.slideshow-slides'),   // b
            $slides = $slideGroup.find('.slide'),                 // c
            $nav = $container.find('.slideshow-nav'),             // d
            $indicator = $container.find('.slideshow-indicator'), // e
            // スライドショー内の各要素の jQuery オブジェクト
            // a スライドショー全体のコンテナー
            // b 全スライドのまとまり (スライドグループ)
            // c 各スライド
            // d ナビゲーション (Prev/Next)
            // e インジケーター (ドット)

            slideCount = $slides.length, // スライドの点数
            indicatorHTML = '',          // インジケーターのコンテンツ
            currentIndex = 0,            // 現在のスライドのインデックス
            duration = 500,              // 次のスライドへのアニメーションの所要時間
            easing = 'easeInOutExpo',    // 次のスライドへのアニメーションのイージングの種類
            interval = 7500,             // 自動で次のスライドに移るまでの時間
            timer;                       // タイマーの入れ物


    // HTML 要素の配置、生成、挿入
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 各スライドの位置を決定し、
        // 対応するインジケーターのアンカーを生成
        $slides.each(function (i) {
            $(this).css({ left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        // インジケーターにコンテンツを挿入
        $indicator.html(indicatorHTML);


    // 関数の定義
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 任意のスライドを表示する関数
        function goToSlide(index) {
            // インデックスが負なら最後のスライドに移動
            if (index < 0) {
                index = slideCount - 1;
            } else if (index >= slideCount) {
                // インデックスが最後のスライドを超えたら最初のスライドに戻る
                index = 0;
            }
        
            // スライドグループをターゲットの位置に合わせて移動
            $slideGroup.animate({ left: -100 * index + '%' }, duration, easing);
        
            // 現在のスライドのインデックスを上書き
            currentIndex = index;
        
            // ナビゲーションとインジケーターの状態を更新
            updateNav();
        }
        // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
        function updateNav() {
            var $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');
        
            // Prevボタンは無効化しないようにする
            $navPrev.removeClass('disabled');
        
            // 最後のスライドにいるときはNextボタンも無効化しないようにする
            $navNext.removeClass('disabled');
        
            // 現在のスライドのインジケーターを更新
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        // タイマーを開始する関数
        function startTimer () {
            // 変数 interval で設定した時間が経過するごとに処理を実行
            timer = setInterval(function () {
                // 現在のスライドのインデックスに応じて次に表示するスライドの決定
                // もし最後のスライドなら最初のスライドへ
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        // タイマーを停止る関数
        function stopTimer () {
            clearInterval(timer);
        }


    // インベントの登録
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // ナビゲーションのリンクがクリックされたら該当するスライドを表示
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        // インジケーターのリンクがクリックされたら該当するスライドを表示
        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });

        // マウスが乗ったらタイマーを停止、はずれたら開始
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });


    // スライドショーの開始
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 最初のスライドを表示
        goToSlide(currentIndex);

        // タイマーをスタート
        startTimer();

    });

});

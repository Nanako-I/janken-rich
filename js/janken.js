

        $("#judgement").on("click", function () {
            // alert("ok")
            $("#pc_hands").fadeOut(1000);
            $("#pc_hands").fadeIn(1000);
        });

        // じゃんけん部分
        // 【グー選択バージョン】
        $("#gu_btn").on("click", function () {
            // 1.乱数（1～5）
            var random = Math.floor(Math.random() * 3);
            console.log(random, "ランダムな手");

            // 2.if分岐処理
            let view = "";
            if (random === 0) {
                view = '<img src="img/gu-.jpg" width="250" height="auto">';
            } else if (random === 1) {
                view = '<img src="img/cho.jpg" width="250" height="auto">';
            } else if (random === 2) {
                view = '<img src="img/pa-.jpg" width="250" height="auto">';
            }

            // 3.表示処理
            setTimeout(()=> {          
            $("#pc_hands").html(view);
            if (random == 0) {
                result = 'あいこです。もう1度！！';
            } else if (random == 1) {
                result = '勝ち！やった！';
                    $("#you__win1").html("〇");
                    // 勝ち数に〇を追加↑
            } else if (random == 2) {
                result = '負け！残念！';
            }$("#judgement").html(result);},500);
        });


        // 【チョキ選択バージョン】
        $("#cho_btn").on("click", function () {
            // alert("ok");


            // 1.乱数（1～5）
            var random = Math.floor(Math.random() * 3);
            console.log(random, "ランダムな手");

            // 2.if分岐処理
            let view = "";
            if (random === 0) {
                view = '<img src="img/gu-.jpg" width="250" height="auto">';
            } else if (random === 1) {
                view = '<img src="img/cho.jpg" width="250" height="auto">';
            } else if (random === 2) {
                view = '<img src="img/pa-.jpg" width="250" height="auto">';
            }


            // 3.表示処理
            setTimeout(()=> {          
            $("#pc_hands").html(view);
            if (random == 0) {
                result = '負け！残念！！';
            } else if (random == 1) {
                result = 'あいこです。もう一度！';
            } else if (random == 2) {
                result = '勝ち！やった！'; 

                $("#you__win2").html("〇");
                
            }$("#judgement").html(result);},500);
        });
       
        // 【パー選択バージョン】
        $("#par_btn").on("click", function () {
            // alert("ok");


            // 1.乱数（1～5）
            var random = Math.floor(Math.random() * 3);
            console.log(random, "ランダムな手");

            // 2.if分岐処理
            let view = "";
            if (random === 0) {
        
                view = '<img src="img/gu-.jpg" width="250" height="auto">';
            } else if (random === 1) {
                view = '<img src="img/cho.jpg" width="250" height="auto">';
            } else if (random === 2) {
                view = '<img src="img/pa-.jpg" width="250" height="auto">';
            }


           
            // 3.表示処理
            setTimeout(()=> {          
            $("#pc_hands").html(view);
            if (random == 0) {
                result = '勝ち！やった！！';
                $("#you__win3").html("〇");
               

            } else if (random == 1) {
                result = '負け！残念！';
            } else if (random == 2) {
                result = 'あいこです。もう一度！';
            }$("#judgement").html(result);},500);
        });

        // 〇を選択するとoniku.htmlに飛びたかったが、このコードで上手くいかなかった↓
        // $("#you__win3").on("click", function() {location.href = 'oniku.html');




        $(function () {

                //画像クリックしたら発動
                $("#gensan").on("click", function() {
// alert("ok");
           $("#gensan").html(' <img src="img/real__genbudou.jpeg" width="250"height="300">');   
                });
            });

            //画像クリックしたら発動
            $("#o-chan").on("click", function() {
// alert("ok");
           $("#o-chan").html(' <img src="img/real__o-chan.png" width="250"height="300">');   
                });
            
                 //画像クリックしたら発動
            $("#ko-chan").on("click", function() {
// alert("ok");
           $("#ko-chan").html(' <img src="img/real__kounotori.jpg" width="250"height="300">');   
                });

                $("#ko-chan").on("click", function() {
// alert("ok");
           $("#ko-chan").html(' <img src="img/real__kounotori.jpg" width="250"height="300">');
        //    音声再生↓
           $("#sound").get(0).play();   
                });
       

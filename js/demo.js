$(function() {

    $(".go").click(function() {

        for (var i = 0; i <= 10000; i++) {

            $("#imgs").rotate({
                animateTo: i,//从当前的角度旋转到多少度
                duration: 10000//旋转持续时间，以毫秒为单位
            });

        }
    })

});
const debug = 1; // draw user cursor's position relative to element's center

$(document).ready(function () {
        document.body.addEventListener("mousemove", (e) => {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left; // x position within the element.
            let y = e.clientY - rect.top;  // y position within the element.

            if ($(".smactive")[0]){
                var curx = x-($('.smactive').width() / 2); // user cursor's x position relative to element's center
                var cury = y-($('.smactive').height() / 2); // user cursor's y position relative to element's center

                if(debug){ // draw coordinates to divs
                    $("#xdiv").text(curx.toFixed(4));
                    $("#ydiv").text(cury.toFixed(4));
                }

                $('.smactive').children().css("transform",'perspective(1000px) rotateY('+curx*0.05 +'deg) rotateX('+cury*-0.05 +'deg) scale3d(1, 1, 1)');
            };
        });

        $('.smtilt').hover(function(){
            $(this).children().css({"transition":'transform 50ms linear', "will-change":"transform"});
            $(this).addClass('smactive');
        },function(){
            if(!$(this).hasClass('hover-return')){
                $(this).children().css("transition",'transform 200ms linear');
                $(this).children().css("transform",'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)');
            };
            $(this).removeClass('smactive');
        });
});

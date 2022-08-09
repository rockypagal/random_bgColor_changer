$(document).ready(function () {

    let color = ['red', 'blue', 'green','hotpink','aqua','crimson','gold','darkorchid','lightblue','mediumblue','slateblue',' deeppink',];





    $('.color').click(function () {

        function ran() {
            return Math.floor(Math.random() * color.length);
        }
        let random = ran();
        $('.main').css('background', color[random]);

        $('.color-code p').text('Background Color: '+ color[random]);

        $('a').css('color',color[random])

    })


});
$(document).ready(function () {




    $('.color').click(function () {

        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        let hexColor = '#';

        for (let i = 0; i < 6; i++) {


           let x =  Math.floor(Math.random() * arr.length);
            hexColor +=arr[x]

        }
        console.log(hexColor);

        $('.main').css('background',hexColor);


        $('.bgc').text('Background Color: '+hexColor)


        $('a').css('color',hexColor);

    });







});
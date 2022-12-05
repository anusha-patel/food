// using javascript
// let menu =document.querySelector('.fa-burger');
// let navbar = document.querySelector('.navbar');

// menu.addEventListener('click',function(){
//     menu.classList.toggle('fa-x');
//     navbar.classList.toggle('nav-toggle');

// });


// using jquery
$(document).ready(function () {

    $('#menu-bar').click(function () {
        $(this).toggleClass('fa-x');
        $('.navbar').toggleClass('nav-toggle');
    });


    $(window).on('scroll load', function () {
        $(this).removeClass('fa-x');
        $('.navbar').removeClass('nav-toggle');
        // it removes x icon adds burger after nav toggles
        $('#menu-bar').removeClass('fa-x').addClass('fa-burger');

        // // scroll spy
        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');
            console.log(this)
            console.log(id);

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('a[href= "#(${id})"]').addClass('active');

            }
        });
    });


    // $('section').each(function(){
    //     let top = $(window).scrollTop();
    //     let offset = $(this).offset().top - 200;
    //     let height = $(this).height();
    //     let id = $('section').attr('id');
    //     console.log(id);

    //     if(top > offset && top < offset + height){
    //         $('.navbar ul li a').removeClass('active');
    //         $('.navbar').find('[href= "#(${id})"]').addClass('active');
    //     }
    // });

    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');

        $('#menu-img').attr('src', src);


    });

});






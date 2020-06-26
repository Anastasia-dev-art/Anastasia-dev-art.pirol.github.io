$(document).ready(function() {

//плавный переход на другие страницы
        $("body").css("display", "none");
        $("body").fadeIn(600);
        $("a.transition").click(function(event){
             event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(600, redirectPage);    
         });
    
        function redirectPage() {
               window.location = linkLocation
            }

        
            //прокрутка станицы

    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate ({
            scrollTop: $(target).offset().top
        }, 600)
    })


    //возврат страницы наверх

    function backToTop () {
        let button = $('.top');

        button.on('click', (e) =>{
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 900);
        })
    }
    backToTop();
    });


    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click', function(e){
        e.preventDefault();

        nav.toggleClass('show')
    } )




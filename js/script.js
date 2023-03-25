$(document).ready(function() {
    $(".card-header").click(function() {
        if($(this).next(".card-body").hasClass("active")) {
            $(this).next(".card-body").removeClass("active").slideToggle();
            $(this).children("i").removeClass("fa fa-light fa fa-angle-down").addClass("fa fa-light fa fa-angle-up");
        }
        else {
            $(this).next(".card-body").addClass("active").slideToggle();
            $(this).children("i").removeClass("fa fa-light fa fa-angle-up").addClass("fa fa-light fa fa-angle-down");
        }
    });

    $("#owl-carousel").owlCarousel({
        items:1,
        merge:true,
        nav:true,
        dots:false,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        navText:["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $("#owl-carouse").owlCarousel({
        items:1,
        merge:true,
        nav:true,
        dots:false,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        navText:["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
      $('.pho').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.pho-item',
        // use element for option
        percentPosition: true,
      });

      $('.active').magnificPopup({
        type: 'image'
      });

      $(window).resize(function() {
        var sz = $(window).width();
        
        if(sz > 768) {
            $(".rs-logo").hide();
            $(".logo-menu").removeAttr("style");
        }
        else {
            $(".rs-logo").show();
            $(".logo-menu").hide();
        }
      });

      $(".sld-menu").click(function() {
        $(".rs").animate({
            height: '100%',
            width: '100%'
        }, 600);
      });
      $(".close").click(function() {
        $(".rs").animate({
            height: '-100%',
            width: '100%'
        }, 600);
      });
      $(".rs-nav ul li").click(function() {
        $(".rs").animate({
            height: '-100%',
            width: '100%'
        }, 600);
      });
    

        
    
    
});
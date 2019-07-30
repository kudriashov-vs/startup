$(function() {
  // slick slider
  $(".about-slider-wrap").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  let header = $("#header");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    scrollPos = $(this).scrollTop();

    if (scrollPos > 10) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset
      },
      700
    );
  });

  let nav = $("#nav");
  $("#navToggle").on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
    header.addClass("fixed");
  });

  $("[data-target]").on("click", function(event) {
    event.preventDefault();
    let blockId = $(this).data("target");
    let blockOffset = $(blockId).offset().top;
    $("html, body").animate(
      {
        scrollTop: blockOffset
      },
      700
    );
  });
});

window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    // sign up
    $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
          $(".errorMsg").show();
        } else {
          $(".errorMsg").hide();
        }
      });
      $("header .eyes").click(function () {
        var attr = $("header .pass input").attr("type");
        if (attr == "password") {
          $("header .pass input").attr("type", "text");
        } else {
          $("header .pass input").attr("type", "password");
        }
      });
    
      /// header navbar signin close
    
      $(".headerLogin .close").click(function () {
        $(".headerLogin").fadeOut(500);
      });
    
      $("header .signUp").click(function () {
        $(".headerLogin").fadeIn();
        $(".headerLogin").css("display", "flex");
      });
     // main 
      $("main .kent").click(function () {
        if ($("main .activeCourses").hasClass("activeCourses")) {
          $("main .activeCourses").removeClass("activeCourses");
        } else {
          $("main .def").addClass("activeCourses");
        }
      });
      $(".felix .owl-carousel").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      });
      // students
      $(".students .owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
      });
      // lol
      $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
          $(".errorMsg").show();
        } else {
          $(".errorMsg").hide();
        }
      });
      $(".form .eyes").click(function () {
        var attr = $(".form .pass input").attr("type");
        if (attr == "password") {
          $(".form .pass input").attr("type", "text");
        } else {
          $(".form .pass input").attr("type", "password");
        }
      });
    
      /// header navbar signin close
    
      $(".headerLogin .close").click(function () {
        $(".headerLogin").fadeOut(500);
      });
    
      $(".form .signUp").click(function () {
        $(".headerLogin").fadeIn();
        $(".headerLogin").css("display", "flex");
      });
})

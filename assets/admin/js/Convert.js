"use strict";
function menuhrres() {
  $(window)[0].innerWidth < 992
  ? setTimeout(function () {
    $(".sidenav-horizontal-wrapper").addClass("sidenav-horizontal-wrapper-dis").removeClass("sidenav-horizontal-wrapper"), $(".theme-horizontal").addClass("theme-horizontal-dis").removeClass("theme-horizontal");
  }, 400): setTimeout(function () {
    $(".sidenav-horizontal-wrapper-dis").addClass("sidenav-horizontal-wrapper").removeClass("sidenav-horizontal-wrapper-dis"), $(".theme-horizontal-dis").addClass("theme-horizontal").removeClass("theme-horizontal-dis");
  }, 400),
  setTimeout(function () {
    $(".pcoded-navbar").hasClass("theme-horizontal-dis") &&
    ($(".sidenav-horizontal-wrapper-dis").css({
      height: "100%", position: "relative"
    }), $(".sidenav-horizontal-wrapper-dis")[0]) &&
    new PerfectScrollbar(".sidenav-horizontal-wrapper-dis", {
      wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
    });
  }, 1e3);
}
function togglemenu() {
  var e = $(window)[0].innerWidth;
  0 == $(".pcoded-navbar").hasClass("theme-horizontal") &&
  (e <= 1200 && e >= 992 && $(".pcoded-navbar:not(.theme-horizontal)").addClass("navbar-collapsed"), e < 992 && $(".pcoded-navbar:not(.theme-horizontal)").removeClass("navbar-collapsed"));
}
function toggleFullScreen() {
  $(window).height();
  document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
  ? document.cancelFullScreen
  ? document.cancelFullScreen(): document.mozCancelFullScreen
  ? document.mozCancelFullScreen(): document.webkitCancelFullScreen && document.webkitCancelFullScreen(): document.documentElement.requestFullscreen
  ? document.documentElement.requestFullscreen(): document.documentElement.mozRequestFullScreen
  ? document.documentElement.mozRequestFullScreen(): document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
  $(".full-screen > i").toggleClass("icon-maximize"),
  $(".full-screen > i").toggleClass("icon-minimize");
}
function togglemenulayout() {
  var e = $(window)[0].innerWidth;
  ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) &&
  (e <= 1200 && e >= 992 && $(".pcoded-navbar:not(.theme-horizontal)").addClass("navbar-collapsed"), e < 992 && $(".pcoded-navbar:not(.theme-horizontal)").removeClass("navbar-collapsed"));
}
function clrpop() {
  $(".navbar-popup").remove();
}
$(document).ready(function () {
  function e(e) {
    13 == e.which && s(e);
  }
  function s(e) {
    $(".header-chat .main-friend-chat").append(
      '<div class="media chat-messages"><div class="media-body chat-menu-reply"><div class=""><p class="chat-cont">' +
      $(".h-send-chat").val() +
      '</p></div><p class="chat-time">now</p></div><a class="media-right photo-table" href="#!"><img class="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image"></a></div>'
    ),
    o($(".h-send-chat").val()),
    d(),
    $(".h-send-chat").val(null);
  }
  function o(e) {
    setTimeout(function () {
      $(".header-chat .main-friend-chat").append(
        '<div class="media chat-messages typing"><a class="media-left photo-table" href="#!"><img class="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"></a><div class="media-body chat-menu-content"><div class="rem-msg"><p class="chat-cont">Typing . . .</p></div><p class="chat-time">now</p></div></div>'
      ),
      d();
    }, 1500),
    setTimeout(function () {
      (document.getElementsByClassName("rem-msg")[0].innerHTML = "<p class='chat-cont'>hello dear you write</p> <p class='chat-cont'>" + e + "</p>"), $(".rem-msg").removeClass("rem-msg"), $(".typing").removeClass("typing"), d();
    }, 3e3);
  }
  function d() {
    var e = $(".header-chat .main-friend-chat");
    $(".main-chat-cont.scroll-div").scrollTop(e.outerHeight());
  }
  togglemenu(), ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) && togglemenulayout(), menuhrres();
  var a = $(window)[0].innerWidth;
  if (
    ($('[data-toggle="tooltip"]').tooltip(),
      $('[data-toggle="popover"]').popover(),
      $(".to-do-list input[type=checkbox]").on("click", function () {
        $(this).prop("checked") ? $(this).parent().addClass("done-task"): $(this).parent().removeClass("done-task");
      }),
      $(".mobile-menu").on("click", function () {
        $(this).toggleClass("on");
      }),
      $("#mobile-collapse").on("click", function () {
        $(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed");
      }),
      $(".search-btn").on("click", function () {
        $(this);
        $(".main-search").addClass("open"), a <= 991 ? $(".main-search .form-control").css({
          width: "90px"
        }): $(".main-search .form-control").css({
          width: "150px"
        });
      }),
      $(".search-close").on("click", function () {
        $(this);
        $(".main-search").removeClass("open"), $(".main-search .form-control").css({
          width: "0"
        });
      }),
      $("#search-friends").on("keyup", function () {
        var e = $(this).val().toLowerCase();
        $(".header-user-list .userlist-box .media-body .chat-header").each(function () {
          var s = $(this).text().toLowerCase();
          $(this).closest(".userlist-box")[-1 !== s.indexOf(e) ? "show": "hide"]();
        });
      }),
      $("#m-search").on("keyup", function () {
        var e = $(this).val().toLowerCase(),
        s = $(this).val().length;
        $(".pcoded-inner-navbar > li").each(function () {
          var o = $(this).attr("data-username");
          if (o) var d = o.toLowerCase();
          if (d) {
            -1 !== d.indexOf(e) ? $(this).show(): $(this).hide(),
            s > 0 ? $(".pcoded-menu-caption").hide(): $(".pcoded-menu-caption").show();
          }
        });
      }),
      $(".displayChatbox").on("click", function () {
        $(".header-user-list").toggleClass("open");
      }),
      $(".header-user-list .userlist-box").on("click", function () {
        $(".header-chat").addClass("open"), $(".header-user-list").toggleClass("msg-open");
      }),
      $(".h-back-user-list").on("click", function () {
        $(".header-chat").removeClass("open"), $(".header-user-list").removeClass("msg-open");
      }),
      $(".h-close-text").on("click", function () {
        $(".header-chat").removeClass("open"), $(".header-user-list").removeClass("open"), $(".header-user-list").removeClass("msg-open");
      }),
      $(".btn-attach").click(function () {
        $(".chat-attach").trigger("click");
      }),
      $(".h-send-chat").on("keyup", function (s) {
        e(s);
      }),
      $(".btn-send").on("click", function (e) {
        s(e);
      }),
      a <= 991 && ($(".main-search").addClass("open"), $(".main-search .form-control").css({
        width: "60px"
      })),
      $(".main-friend-cont")[0] &&
      $(".main-friend-cont").each(function () {
        new PerfectScrollbar(this,
          {
            wheelSpeed: 0.5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40
          });
      }),
      $(".main-chat-cont")[0])
  ) {
    new PerfectScrollbar(".main-chat-cont", {
      wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
    });
  }
  if ($(".noti-body")[0]) {
    new PerfectScrollbar(".notification  .noti-body", {
      wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
    });
  }
  if (!$(".pcoded-navbar").hasClass("theme-horizontal")) {
    var a = $(window)[0].innerWidth;
    if ($(".navbar-content")[0])
      if (a < 992 || $(".pcoded-navbar").hasClass("menupos-static")) {
      new PerfectScrollbar(".navbar-content", {
        wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
      });
    } else {
      new PerfectScrollbar(".navbar-content", {
        wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
      });
    }
  }
  $(".card-option .close-card").on("click", function () {
    var e = $(this);
    e.parents(".card").addClass("anim-close-card"),
    e.parents(".card").animate({
      "margin-bottom": "0"
    }),
    setTimeout(function () {
      e.parents(".card").children(".card-block").slideToggle(),
      e.parents(".card").children(".card-body").slideToggle(),
      e.parents(".card").children(".card-header").slideToggle(),
      e.parents(".card").children(".card-footer").slideToggle();
    }, 600),
    setTimeout(function () {
      e.parents(".card").remove();
    }, 1500);
  }),
  $(".card-option .reload-card").on("click", function () {
    var e = $(this);
    e.parents(".card").addClass("card-load"),
    e.parents(".card").append('<div class="card-loader"><i class="pct-loader1 anim-rotate"></div>'),
    setTimeout(function () {
      e.parents(".card").children(".card-loader").remove(), e.parents(".card").removeClass("card-load");
    }, 3e3);
  }),
  $(".card-option .minimize-card").on("click", function () {
    var e = $(this),
    s = $(e.parents(".card"));
    $(s).children(".card-block").slideToggle(), $(s).children(".card-body").slideToggle();
    s.hasClass("full-card") || $(s).css("height", "auto"), $(this).children("a").children("span").toggle();
  }),
  $(".card-option .full-card").on("click", function () {
    var e = $(this),
    s = $(e.parents(".card"));
    if ((s.toggleClass("full-card"), $(this).children("a").children("span").toggle(), s.hasClass("full-card"))) {
      $("body").css("overflow", "hidden"),
      $("html,body").animate({
        scrollTop: 0
      }, 1e3);
      var o = $(s, this),
      d = o.offset(),
      a = d.left,
      i = d.top,
      n = $(window).height(),
      t = $(window).width();
      s.animate({
        marginLeft: a - 2 * a, marginTop: i - 2 * i, width: t, height: n
      });
    } else
      $("body").css("overflow", ""),
    s.removeAttr("style"),
    setTimeout(function () {
      $("html,body").animate({
        scrollTop: $(s).offset().top - 70
      }, 500);
    }, 400);
  }),
  setTimeout(function () {
    $(".loader-bg").fadeOut("slow", function () {
      $(this).remove();
    });
  },
    400);
}),
$(window).resize(function () {
  togglemenu(), menuhrres(), ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) && togglemenulayout();
});
var ost = 0;
if (
  ($(window).scroll(function () {
    if ($(window)[0].innerWidth >= 768) {
      var e = $(this).scrollTop();
      400 == e
      ? $(".theme-horizontal").addClass("top-nav-collapse"): e > ost && 400 < ost
      ? $(".theme-horizontal").addClass("top-nav-collapse").removeClass("default"): $(".theme-horizontal").addClass("default").removeClass("top-nav-collapse"),
      (ost = e);
    }
  }),
    ($.fn.pcodedmenu = function (e) {
      var s = (this.attr("id"), {
        themelayout: "vertical", MenuTrigger: "click", SubMenuTrigger: "click"
      }),
      e = $.extend({}, s, e),
      o = {
        PcodedMenuInit: function () {
          o.HandleMenuTrigger(),
          o.HandleSubMenuTrigger(),
          o.HandleOffset();
        },
        HandleSubMenuTrigger: function () {
          var s = $(window),
          o = s.width();
          if (1 == $(".pcoded-navbar").hasClass("theme-horizontal") || 1 == $(".pcoded-navbar").hasClass("theme-horizontal-dis"))
            if ((o >= 992 && $("body").hasClass("layout-6")) || (o >= 992 && $("body").hasClass("layout-7"))) {
            var d = $("body[class*='layout-6'] .theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu, body[class*='layout-7'] .theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
            d.off("click")
            .off("mouseenter mouseleave")
            .hover(
              function () {
                $(this).addClass("pcoded-trigger").addClass("active");
              },
              function () {
                $(this).removeClass("pcoded-trigger").removeClass("active");
              }
            );
          } else if ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) {
            if ($(".pcoded-navbar").hasClass("theme-horizontal-dis")) {
              var d = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
              d.off("click")
              .off("mouseenter mouseleave")
              .hover(
                function () {
                  $(this).addClass("pcoded-trigger").addClass("active");
                },
                function () {
                  $(this).removeClass("pcoded-trigger").removeClass("active");
                }
              );
            }
            if (!$(".pcoded-navbar").hasClass("theme-horizontal-dis")) {
              var d = $(".pcoded-navbar:not(.theme-horizontal-dis) .pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li");
              d
              .off("mouseenter mouseleave")
              .off("click")
              .on("click", function () {
                0 === $(this).closest(".pcoded-submenu").length
                ? $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown());
              }),
              $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on("click", function (e) {
                e.stopPropagation(),
                0 === $(this).closest(".pcoded-submenu").length
                ? $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown());
              });
            }
          } else if (o >= 992) {
            var d = $(".pcoded-navbar.theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
            d.off("click")
            .off("mouseenter mouseleave")
            .hover(
              function () {
                $(this).addClass("pcoded-trigger").addClass("active");
              },
              function () {
                $(this).removeClass("pcoded-trigger").removeClass("active");
              }
            );
          } else {
            var d = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li");
            d.off("mouseenter mouseleave")
            .off("click")
            .on("click", function () {
              0 === $(this).closest(".pcoded-submenu").length
              ? $(this).hasClass("pcoded-trigger")
              ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                $(this).addClass("pcoded-trigger"),
                $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
              ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                $(this).addClass("pcoded-trigger"),
                $(this).children(".pcoded-submenu").slideDown());
            });
          }
          switch (e.SubMenuTrigger) {
            case "click":
              $(".pcoded-navbar .pcoded-hasmenu").removeClass("is-hover"),
              $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on("click", function (e) {
                e.stopPropagation(),
                0 === $(this).closest(".pcoded-submenu").length
                ? $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown());
              }),
              $(".pcoded-submenu > li").on("click", function (e) {
                e.stopPropagation(),
                0 === $(this).closest(".pcoded-submenu").length
                ? $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown());
              });
          }
        },
        HandleMenuTrigger: function () {
          var s = $(window),
          o = s.width();
          if (o >= 992) {
            if (1 == $(".pcoded-navbar").hasClass("theme-horizontal"))
              if ((o >= 768 && $("body").hasClass("layout-6")) || (o >= 768 && $("body").hasClass("layout-7"))) {
              var d = $("body[class*='layout-6'] .theme-horizontal .pcoded-inner-navbar > li,body[class*='layout-7'] .theme-horizontal .pcoded-inner-navbar > li ");
              d.off("click")
              .off("mouseenter mouseleave")
              .hover(
                function () {
                  if (($(this).addClass("pcoded-trigger").addClass("active"), $(".pcoded-submenu", this).length)) {
                    var e = $(".pcoded-submenu:first", this),
                    s = e.offset(),
                    o = s.left,
                    d = e.width();
                    $(window).height();
                    if (o + d <= $(window).width()) $(this).removeClass("edge");
                    else {
                      var a = $(".sidenav-inner").attr("style");
                      $(".sidenav-inner").css({
                        "margin-left": parseInt(a.slice(12, a.length - 3)) - 80
                      }),
                      $(".sidenav-horizontal-prev").removeClass("disabled");
                    }
                  }
                },
                function () {
                  $(this).removeClass("pcoded-trigger").removeClass("active");
                }
              );
            } else if ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) {
              if ($(".pcoded-navbar").hasClass("theme-horizontal-dis")) {
                var d = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar > li");
                d.off("click")
                .off("mouseenter mouseleave")
                .hover(
                  function () {
                    if (($(this).addClass("pcoded-trigger").addClass("active"), $(".pcoded-submenu", this).length)) {
                      var e = $(".pcoded-submenu:first", this),
                      s = e.offset(),
                      o = s.left,
                      d = e.width();
                      $(window).height();
                      if (o + d <= $(window).width()) $(this).removeClass("edge");
                      else {
                        var a = $(".sidenav-inner").attr("style");
                        $(".sidenav-inner").css({
                          "margin-left": parseInt(a.slice(12, a.length - 3)) - 80
                        }),
                        $(".sidenav-horizontal-prev").removeClass("disabled");
                      }
                    }
                  },
                  function () {
                    $(this).removeClass("pcoded-trigger").removeClass("active");
                  }
                );
              }
              if (!$(".pcoded-navbar").hasClass("theme-horizontal-dis")) {
                var d = $(".pcoded-navbar:not(.theme-horizontal-dis) .pcoded-inner-navbar > li");
                d.off("mouseenter mouseleave")
                .off("click")
                .on("click", function () {
                  $(this).hasClass("pcoded-trigger")
                  ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($("li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                    $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                    $(this).addClass("pcoded-trigger"),
                    $(this).children(".pcoded-submenu").slideDown());
                });
              }
            } else {
              var d = $(".theme-horizontal .pcoded-inner-navbar > li");
              d.off("click")
              .off("mouseenter mouseleave")
              .hover(
                function () {
                  if (($(this).addClass("pcoded-trigger").addClass("active"), $(".pcoded-submenu", this).length)) {
                    var e = $(".pcoded-submenu:first", this),
                    s = e.offset(),
                    o = s.left,
                    d = e.width();
                    $(window).height();
                    if (o + d <= $(window).width()) $(this).removeClass("edge");
                    else {
                      var a = $(".sidenav-inner").attr("style");
                      $(".sidenav-inner").css({
                        "margin-left": parseInt(a.slice(12, a.length - 3)) - 80
                      }),
                      $(".sidenav-horizontal-prev").removeClass("disabled");
                    }
                  }
                },
                function () {
                  $(this).removeClass("pcoded-trigger").removeClass("active");
                }
              );
            }
          } else {
            var d = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar > li");
            d.off("mouseenter mouseleave")
            .off("click")
            .on("click", function () {
              $(this).hasClass("pcoded-trigger")
              ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($("li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                $(this).addClass("pcoded-trigger"),
                $(this).children(".pcoded-submenu").slideDown());
            });
          }
          switch (e.MenuTrigger) {
            case "click":
              $(".pcoded-navbar").removeClass("is-hover"),
              $(".pcoded-inner-navbar > li:not(.pcoded-menu-caption) ").on("click", function () {
                $(this).hasClass("pcoded-trigger")
                ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($("li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
                  $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
                  $(this).addClass("pcoded-trigger"),
                  $(this).children(".pcoded-submenu").slideDown());
              });
          }
        },
        HandleOffset: function () {
          switch (e.themelayout) {
            case "horizontal":
              "hover" === e.SubMenuTrigger
              ? $("li.pcoded-hasmenu").on("mouseenter mouseleave", function (e) {
                if ($(".pcoded-submenu", this).length) {
                  var s = $(".pcoded-submenu:first", this),
                  o = s.offset(),
                  d = o.left,
                  a = s.width();
                  $(window).height();
                  d + a <= $(window).width() ? $(this).removeClass("edge"): $(this).addClass("edge");
                }
              }): $("li.pcoded-hasmenu").on("click",
                function (e) {
                  if ((e.preventDefault(), $(".pcoded-submenu", this).length)) {
                    var s = $(".pcoded-submenu:first", this),
                    o = s.offset(),
                    d = o.left,
                    a = s.width();
                    $(window).height();
                    d + a <= $(window).width() || $(this).toggleClass("edge");
                  }
                });
          }
        },
      };
      o.PcodedMenuInit();
    }),
    $("#pcoded").pcodedmenu({
      MenuTrigger: "click", SubMenuTrigger: "click"
    }),
    $("#mobile-collapse,#mobile-collapse1").click(function (e) {
      $(window)[0].innerWidth < 992 && ($(".pcoded-navbar").toggleClass("mob-open"),
        e.stopPropagation());
    }),
    $(window).ready(function () {
      var e = $(window)[0].innerWidth;
      $(".pcoded-navbar").on("click tap",
        function (e) {
          e.stopPropagation();
        }),
      $(".pcoded-main-container,.pcoded-header").on("click",
        function () {
          e < 992 && 1 == $(".pcoded-navbar").hasClass("mob-open") && ($(".pcoded-navbar").removeClass("mob-open"), $("#mobile-collapse,#mobile-collapse1").removeClass("on"));
        }),
      $("#mobile-header").on("click",
        function () {
          $(".navbar-collapse,.m-header").slideToggle();
        });
    }),
    $(".pcoded-navbar .close").on("click", function () {
      $(this).parents(".card").fadeOut("slow").remove();
    }),
    $(".layout-1 .sidemenu a").on("click", function () {
      var e = $(this);
      e.parents("li").siblings().removeClass("active"), e.parents("li").addClass("active"), $(".side-content .sidelink").slideUp(), $(".side-content .sidelink." + e.attr("data-cont")).slideDown();
    }),
    $(".layout-1 .toggle-sidemenu").on("click", function () {
      $(this);
      $(".pcoded-navbar").toggleClass("hide-sidemenu");
    }),
    $("#mobile-collapse1").click(function (e) {
      var s = $(window)[0].innerWidth;
      ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) &&
      setTimeout(function () {
        s <= 992 && $(".pcoded-navbar:not(.theme-horizontal-dis)").removeClass("mob-open"),
        s > 992 && ($(".pcoded-navbar:not(.theme-horizontal)").toggleClass("mob-open"), e.stopPropagation());
      },
        100);
    }),
    $("#show-toggle").on("click", function () {
      $(".pcoded-navbar:not(.theme-horizontal-dis)").toggleClass("mob-open-h");
    }),
    ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) && $(".navbar-content")[0])
)
var px = new PerfectScrollbar(".navbar-content", {
  wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
});
$(".pcoded-main-container,.pcoded-header,.pcoded-navbar.theme-horizontal").on("click", function () {
  var e = $(window)[0].innerWidth;
  ($("body").hasClass("layout-6") || $("body").hasClass("layout-7")) && e > 992 && 1 == $(".pcoded-navbar").hasClass("mob-open") && ($(".pcoded-navbar").removeClass("mob-open"), $("#mobile-collapse,#mobile-collapse1").removeClass("on"));
}),
$("body.layout-8 .pcoded-navbar .dropdown-toggle").on("click", function () {
  $(this).siblings(".dropdown-menu").addClass("show");
}),
$(document).mouseup(function (e) {
  var s = $("body.layout-8 .pcoded-navbar .dropdown-menu");
  s.is(e.target) || 0 !== s.has(e.target).length || s.removeClass("show");
}),
$(".layout-9 .sidemenu a").on("click", function () {
  var e = $(this);
  e.parents("li").siblings().removeClass("active"), e.parents("li").addClass("active"), $(".side-content .sidelink").slideUp(1), $(".side-content .sidelink." + e.attr("data-cont")).slideDown(1);
});
var vw = $(window)[0].innerWidth;
if (
  (vw < 992 &&
    ($(".page-wrapper>.page-header")[0]
      ? ($(".pcoded-header > .collapse:not(.show)>.mr-auto").css("display", "none"),
        $(".pcoded-header > .collapse:not(.show)>.ml-auto").css("display", "block"),
        $(".pcoded-header > .container> .collapse:not(.show)>.mr-auto").css("display", "none"),
        $(".pcoded-header > .container> .collapse:not(.show)>.ml-auto").css("display", "block"),
        $(".pcoded-header > .container> .collapse")[0] && (console.log("hii"), $(".pcoded-header > .container> .collapse:not(.show)").append('<a href="#!" class="mob-toggler"></a>'))): $(".pcoded-header > .collapse:not(.show)").append('<a href="#!" class="mob-toggler"></a>')),
    $(".pcoded-header .page-header")[0])
) {
  var dt = $(".pcoded-main-container .page-header").clone();
  $(".pcoded-header .page-header").html(dt),
  $(".pcoded-main-container .page-header").remove();
}
if ($(".page-header-title h5")[0]) {
  var page = $(".page-header-title h5").html();
  $(document).attr("title", "Sistem Pendafataran Seminar - " + page);
}
$(".pcoded-header > .collapse:not(.show) .mob-toggler").click(function () {
  $(".pcoded-header > .collapse:not(.show) > ul").slideToggle(1);
}),
$(".pcoded-header > .container>.collapse:not(.show) .mob-toggler").click(function () {
  $(".pcoded-header > .container> .collapse:not(.show) > ul").slideToggle(1);
}),
vw >= 992 && $(".layout-14 .pcoded-inner-navbar > li.pcoded-hasmenu").unbind("click"),
$(".layout-14 .pcoded-inner-navbar > li.pcoded-hasmenu").on("mouseenter", function () {
  if (vw >= 992) {
    clrpop(),
    $(".navbar-wrapper").append('<div class="navbar-popup"></div>');
    var e = $(this),
    s = $(".navbar-popup"),
    o = e.children(".pcoded-submenu").clone();
    s.addClass("pcoded-inner-navbar"),
    s.html(o);
    var d = $(e, this),
    a = d.offset(),
    i = (a.left, a.top),
    n = (d.width(), $(window).height()),
    t = ($(window).width(), $(window).scrollTop()),
    r = s.innerHeight();
    s.show(),
    console.log(t),
    n <= i + r - t ? (s.addClass("vedge"), s.animate({
      top: i - 240 - t
    }, 1)): (s.removeClass("vedge"), s.animate({
      top: i - 8 - t
    }, 1)),
    $(".navbar-popup > .pcoded-submenu").css({
      "max-height": "300px", position: "relative"
    });
    new PerfectScrollbar(".navbar-popup > .pcoded-submenu", {
      wheelSpeed: 0.5, swipeEasing: 0, suppressScrollX: !0, wheelPropagation: 1, minScrollbarLength: 40
    });
    $(".navbar-popup .pcoded-submenu > li").on("click", function (e) {
      e.stopPropagation(),
      0 === $(this).closest(".pcoded-submenu").length
      ? $(this).hasClass("pcoded-trigger")
      ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
        $(this).closest(".pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
        $(this).addClass("pcoded-trigger"),
        $(this).children(".pcoded-submenu").slideDown()): $(this).hasClass("pcoded-trigger")
      ? ($(this).removeClass("pcoded-trigger"), $(this).children(".pcoded-submenu").slideUp()): ($(".pcoded-hasmenu li.pcoded-trigger").children(".pcoded-submenu").slideUp(),
        $(this).closest(".pcoded-submenu").find("li.pcoded-trigger").removeClass("pcoded-trigger"),
        $(this).addClass("pcoded-trigger"),
        $(this).children(".pcoded-submenu").slideDown());
    });
  }
}),
$(".layout-14 .pcoded-navbar").on("mouseleave", function () {
  clrpop();
}),
$(".layout-14 .pcoded-inner-navbar > li:not(.pcoded-hasmenu)").on("mouseenter", function () {
  clrpop();
}),
$(".pcoded-navbar .pcoded-inner-navbar a").each(function () {
  var e = window.location.href.split(/[?#]/)[0];
  if (
    !$("body").hasClass("layout-14") &&
    this.href == e &&
    "" != $(this).attr("href") &&
    ($(this).parent("li").addClass("active"),
      $(".pcoded-navbar").hasClass("theme-horizontal") ||
      ($(this).parent("li").parent().parent(".pcoded-hasmenu").addClass("active").addClass("pcoded-trigger"),
        $(this).parent("li").parent().parent(".pcoded-hasmenu").parent().parent(".pcoded-hasmenu").addClass("active").addClass("pcoded-trigger")),
      ($("body").hasClass("layout-7") || $("body").hasClass("layout-6")) &&
      ($(this).parent("li").parent().parent(".pcoded-hasmenu").addClass("active").addClass("pcoded-trigger"),
        $(this).parent("li").parent().parent(".pcoded-hasmenu").parent().parent(".pcoded-hasmenu").addClass("active").addClass("pcoded-trigger"),
        $(".theme-horizontal .pcoded-inner-navbar").find("li.pcoded-trigger").removeClass("pcoded-trigger")),
      $(this).parent("li").parent().parent(".sidelink").addClass("active"),
      $(this).parent("li").parent().parent().parent().parent(".sidelink").addClass("active"),
      $(this).parent("li").parent().parent().parent().parent().parent().parent(".sidelink").addClass("active"),
      $("body").hasClass("layout-1") || $("body").hasClass("layout-9"))
  ) {
    var s = $(".sidelink.active").attr("class");
    (s = s.replace("sidelink", "")),
    (s = s.replace("active", "")),
    $(".sidemenu  .nav-link[data-cont=" + s.trim() + "]")
    .parent()
    .addClass("active");
  }
});
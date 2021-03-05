$(document).ready(function(){
  let filter = $("[data-filter]");

  filter.on("click", function(event){
    event.preventDefault();
    
    let ctg = $(this).data("filter");

    if (ctg == "all") {
      $("[data-ctg]").removeClass("hide");
    } else {
      $("[data-ctg]").each(function(){
        let workCtg = $(this).data("ctg");
        
        if (workCtg != ctg) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  let burgerMenu = $(".burger-menu");
  let burgerLine = $(".burger-menu__line");
  let menuList = $(".header__menu-list");
  let headerInner = $(".header__inner");
  let headerMenu = $(".header__menu");
  let menuLink = $(".header__menu-link");

  burgerMenu.on("click", function(event){
    event.preventDefault();
    burgerMenu.toggleClass("active");
    burgerLine.toggleClass("active");
    menuList.toggleClass("active");
    headerInner.toggleClass("active");
    headerMenu.toggleClass("active");
  });

  menuLink.on("click", function(){
    burgerMenu.removeClass("active");
    burgerLine.removeClass("active");
    menuList.removeClass("active");
    headerInner.removeClass("active");
    headerMenu.removeClass("active");
  })
});
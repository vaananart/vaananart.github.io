{
    let menuBurgerEnabled = false;
    function closeNav() {
        document.getElementById("sidebar-wrapper").style.width = "0px";
        document.getElementById("main").style.paddingLeft = "0px";
        document.getElementById("menuBurger").style.transform = "rotate(0deg)";
    }

    function openNav() {
        document.getElementById("sidebar-wrapper").style.width = "200px";
        document.getElementById("main").style.paddingLeft = "200px";
        document.getElementById("menuBurger").style.transform = "rotate(90deg)";
    }

    function toggleNav() {
        if (menuBurgerEnabled === true) {
            openNav();
            menuBurgerEnabled = false;
        }
        else {
            closeNav();
            menuBurgerEnabled = true;
        }
    }
}

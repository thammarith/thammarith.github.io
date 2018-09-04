function theScroll() {

    // The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.
    winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log("winScroll " + winScroll);

    // The scrollHeight property returns the entire height of an element in pixels, including padding, but not the border, scrollbar or margin.
    // = 2400px
    // The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes, otherwise it's the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin.
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var thetime = (winScroll / height) * 24;
    thetime = Math.floor(thetime);
    console.log("scrolled: " + thetime);
    document.getElementById("position").innerText = thetime;

    if (6 <= thetime && 18 >= thetime) {
        document.getElementById("event").innerText = "SUN RISE";
        document.getElementById("body").style.backgroundColor = "green";
    } else {
        document.getElementById("event").innerText = "";
    }
}

window.onscroll = function () {
    theScroll();
};

// Sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    height: 200
});

// scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    throttle: 10,
    scrollOffset: 50
});
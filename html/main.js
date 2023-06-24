$(document).ready(function () {
    // Select all elements with class 'car-info'
    var carInfoElements = $('.car-info');

    // If there are more than 5 car-info elements, show the buttons
    if (carInfoElements.length > 5) {
        $('.left-btn').show();
        $('.right-btn').show();
    } else {
        $('.left-btn').hide();
        $('.right-btn').hide();
    }

    // Implementing carousel
    let index = 0;
    let displayCount = 4;

    function showCars() {
        // Hide all cars first
        carInfoElements.hide();
        
        // Show the ones that should be visible
        for (let i = index; i < index + displayCount; i++) {
            if (i < carInfoElements.length) {
                $(carInfoElements[i]).show();
            }
        }
    }

    // Initial display
    showCars();

    // Setup button clicks
    $('.left-btn').click(function () {
        if (index > 0) {
            index--;
        }
        showCars();
    });

    $('.right-btn').click(function () {
        if (index + displayCount < carInfoElements.length) {
            index++;
        }
        showCars();
    });

    // Exit Garage Button
    $(".close-button").click(function() {
        $(".tablet-outline").animate({top: '100%', opacity: 0}, 800);
    });

    $(".transfercar-btn").click(function() {
        $(".modal-overlay, .modal").fadeIn(200);
    });

    $(".m-close-button").click(function() {
        $(".modal-overlay, .modal").fadeOut(200);
    });

    $(".m-dropdown").click(function() {
        $(".m-dropdown-active").toggleClass("show");
    });

    $(".m-make-model").click(function() {
        var selectedMakeModel = $(this).text();
        $(".m-make-model-selected").text(selectedMakeModel);
        $(".m-dropdown-active").removeClass("show");
    });
});
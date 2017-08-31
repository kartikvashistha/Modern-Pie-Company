/**
 * Created by kartikvashistha on 07/03/2017.
 */
//Showing a message to the console - Open Chrome Developer tools to see the result
console.log(10 + 10); //shows success

// create the module and name it angularExample
var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: 'home.html'
        })
        .when("/about", {
            templateUrl: 'about.html'
        })
        .when("/menu", {
            templateUrl: 'menu.html'
        })
        .when("/contact" ,{
            templateUrl:'contact-us.html'
        })
        .when("/checkout", {
            templateUrl: 'checkout.html'
        })

});


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//js for the menu
$(document).on('click', '.number-spinner button', function () {
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up' && oldValue < 10) {
        newVal = parseInt(oldValue) + 1;
    }
    else if(btn.attr('data-dir') == 'dwn' && oldValue > 0) {

        newVal = parseInt(oldValue) - 1;
    }

    btn.closest('.number-spinner').find('input').val(newVal);
});

//js for the notifications
$(document).on('click', '.cart-adding .add-to-cart', function() {
    var btn = $(this);
    var itemNum = btn.closest('.cart-adding').find('.number-spinner').find('input').val();

    //depending on what the value is in the field, send success or fail message
    if(itemNum > 0) {
        $(btn).notify(
            "Item(s) added to cart!", "success" ,
            {position: 'bottom'}
        );
    }
    else {
        $(btn).notify(
            "Nothing selected", "error" ,
            {position: "bottom"}
        );
    }

    //reset the counter
    $(".number-spinner input").val(0);

});

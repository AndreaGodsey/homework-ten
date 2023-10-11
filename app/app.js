import { changePageContent } from "../model/model.js";




function initListeners(){
    $("nav #links a").on("click", function (e) {
       let btnID = e.currentTarget.id;
       changePageContent(btnID);
        });
}

// Learn More Buttons
var homePromo = ".tour input";
var toursPromo = ".tour .content a";

// Home Promo Click
$(document).on("click", homePromo, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Tours Page Click
$(document).on("click", toursPromo, function (e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})


$(document).ready(function () {
    initListeners();
    changePageContent("home");
});
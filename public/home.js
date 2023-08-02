function search_place() {
    let input = document.getElementById('search-item').value;
    input = input.toLowerCase();
    let flag = 0;
    let x = document.getElementsByClassName('places');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
var UL = document.getElementById("search-list");
var x = document.getElementById("close");
UL.style.display = "none";
var searchBox = document.getElementById("search-item");
var li = document.getElementsByClassName("places")
searchBox.addEventListener("focus", function () {
    UL.style.display = "block";
    x.style.display = "inline-block";
});
document.addEventListener('click',function(event){
    se = document.getElementById('search-container');
    if(!se.contains(event.target))
    {
        UL.style.display = "none";
    x.style.display = "none";
    }
})
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
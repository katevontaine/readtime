//REGULAR SPEED
$.fn.readtime = (function(zeebdoy) {
      var wordsonPage = document.body.textContent;
      var wordsArr = wordsonPage.split(" ");
      var readSpeed = 230;
      var wordSpeed = Math.round(wordsArr.length / readSpeed);
      document.querySelector('#time').innerHTML = "<h5>This is a " + wordSpeed + " minute read for a regular person.</h5>";

}( jQuery ));



//SPEED READ
 $.fn.speedreadtime = (function(second) {
           var wordsonPage = document.body.textContent;
           var wordsArr = wordsonPage.split(" ");
           var readSpeed = 400;
           var wordSpeed = Math.round(wordsArr.length / readSpeed);

         document.querySelector('#time2').innerHTML = "<h5>This is a " + wordSpeed + " minute read for a smartie pants.</h5>";

    }( jQuery ));



//READ ME SECTION
//In order for this code to work the div containing the javascript
//element calculating the time must have a class of "time".

window.onload = function () {
  // reset the scroll position
  window.scroll(0, 0); 
  
  
  var elmnt1 = document.querySelector("#elem-1");
  var elmnt2 = document.querySelector("#elem-2");
  var elmnt3 = document.querySelector("#elem-3");


//  function scrollToElem(e) {
//    e.nextElementSibling.scrollIntoView({
//      behavior: 'smooth'
//    });
//  }
//
//  elmnt1.onclick = scrollToElem(elmnt1);
//  elmnt2.onclick = scrollToElem(elmnt2);
//  elmnt3.onclick = scrollToElem(elmnt3);
//


console.log(elmnt1.innerHTML);
  
    elmnt1.onclick = function () {
      elmnt2.scrollIntoView({
        behavior: 'smooth'
      });
  
    };
  
    elmnt2.onclick = function () {
      elmnt3.scrollIntoView({
        behavior: 'smooth'
      });
  
    };
    elmnt3.onclick = function () {
      elmnt1.scrollIntoView({
        behavior: 'smooth'
      });
  
    };
};

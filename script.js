//var elmnt1, elmnt2, elmnt3;

$(function () {
  // reset the scroll position
  window.scroll(0, 0);
  var elmnt1 = $("#elem-1");
  var elmnt2 = $("#elem-2");
  var elmnt3 = $("#elem-3");

//  elmnt1.get(0).scrollIntoView({
//    behavior: 'smooth'
//  });




  function scrollToElem(e) {
    e.get(0).scrollIntoView({
      behavior: 'smooth'
    });
  }

  elmnt1.click(scrollToElem(elmnt2));
  elmnt2.click(scrollToElem(elmnt3));
  elmnt3.click(scrollToElem(elmnt1));


  //    elmnt2.onclick = scrollToElem(elmnt3);
  //    elmnt3.onclick = scrollToElem(elmnt1);



  //console.log(elmnt1.innerHTML);

  //  elmnt1.get(0).onclick = function () {
  //    elmnt2.get(0).scrollIntoView({
  //      behavior: 'smooth'
  //    });
  //
  //  };
  //
  //  elmnt2.get(0).onclick = function () {
  //    elmnt3.get(0).scrollIntoView({
  //      behavior: 'smooth'
  //    });
  //
  //  };
  //  elmnt3.get(0).onclick = function () {
  //    elmnt1.get(0).scrollIntoView({
  //      behavior: 'smooth'
  //    });
  //
  //  };
});

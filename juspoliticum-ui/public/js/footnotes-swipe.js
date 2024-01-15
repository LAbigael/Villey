const footnoteList = document.querySelector(".footnote-list");

footnoteList.addEventListener("touchstart", handleTouchStart, false);
footnoteList.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;

  var xDiff = xDown - xUp;

  //if swipe if significant enough
  if (Math.abs(xDiff) > 10 || Math.abs(xDiff) < -10) {
    /*most significant*/
    if (xDiff > 0) {
      footnoteList.classList.add("hidden");
    } else {
      footnoteList.classList.add("hidden");
    }
  }
  /* reset values */
  xDown = null;
}

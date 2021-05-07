// Copy and paste from here to the bottom
// CKRBOMB functions
// Begin

function openLessonReading () { // Only use this function when the browser is in the lesson reader
  alert("The following popup will probably be blocked, so allow popups when you see the failed window icon at the side of your browser tab.");
  alert("Lesson Reading Link (Copy and paste this link in a new tab): " + location.href);
  
  window.open(location.href);
}

export default function outsideCLick(element, eventsUser, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    eventsUser.forEach((eventUser) => {
      setTimeout(() => {
        html.addEventListener(eventUser, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      eventsUser.forEach((eventUser) => {
        html.removeEventListener(eventUser, handleOutsideClick);
      });
      callback();
    }
  }
}

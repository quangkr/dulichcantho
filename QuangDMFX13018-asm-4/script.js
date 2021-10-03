// conditionally show go-to-top button
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
      document.body.classList.add("should-go-to-top-show");
    } else {
      document.body.classList.remove("should-go-to-top-show");
    }
  });
  observer.observe(document.querySelector("#go-to-top-check"));
}

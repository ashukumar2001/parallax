let gallery = document.querySelector("ul");
let wrapper = document.querySelector(".gallery");

let moveValue = 0,
  dragging = false,
  mouseLocation,
  galleryLocation;

const easeOutQuad = (t) => t * (2 - t);

const moveGallery = () => {
  moveValue = easeOutQuad(window.scrollY * 0.004);
  gallery.style.transform = `rotateZ(-5deg) translateX(${moveValue}%)`;
};

requestAnimationFrame(moveGallery);

const dragStart = (e) => {
  dragging = true;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};
const dragStop = (e) => {
  dragging = false;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};

const dragActive = (e) => {
  if (!dragging) return;

  let offset = e.pageX - mouseLocation;
  wrapper.scrollLeft = galleryLocation - offset;
};

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);
document.addEventListener("scroll", moveGallery);

const cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY + window.scrollY; // Add scroll position to the Y coordinate

  cursorBlur.style.left = `${x - cursorBlur.offsetWidth / 2}px`;
  cursorBlur.style.top = `${y - cursorBlur.offsetHeight / 2}px`;
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "tops -70%",
    scrub: 2,
  },
});
// Optional: You can use GSAP animations here if you want additional effects on the membership cards, such as zoom-in effects or scroll animations.

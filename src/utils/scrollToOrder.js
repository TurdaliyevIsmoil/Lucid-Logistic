export default () => {
  const scrollLength = document
    .getElementById("orderToScroll")
    .getBoundingClientRect().top;
  window.scrollTo({
    top: Math.round(scrollLength + window.scrollY - window.innerHeight * 1.4),
    behavior: "smooth",
  });
};

// ============ Experience Slider ==============
experience.addEventListener("input", (event) => {
  let yearsOf = experience.value;
  if (yearsOf > 29) {
    yearsOf = yearsOf + "+";
  }
  years.innerHTML = yearsOf;
});

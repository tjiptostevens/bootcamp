const handleBlur = (dataClass) => {
  let pc = document.querySelector(dataClass);
  pc.classList.toggle("__blur");
};

export { handleBlur };

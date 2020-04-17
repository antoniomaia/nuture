export const jumpTo = element => () => {
  if (element && element.current) {
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
};

export const animateValue = (ref, start, end, duration) => {
  const range = end - start;
  let current = start;
  const increment = end > start ? 0.1 : -0.1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function() {
    current += increment;
    const fixedCurrent = current.toFixed(1);
    if (ref.current) {
      ref.current.innerText = fixedCurrent;
    }
    if (fixedCurrent == end) {
      clearInterval(timer);
    }
  }, stepTime);
};

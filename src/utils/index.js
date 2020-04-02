export const jumpTo = element => () => {
  if (element && element.current) {
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }
};

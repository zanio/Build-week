export const utility = (oldstate, elementState) => ({
  ...oldstate,
  ...elementState,
});

export const getNextDay = () => {
  const date = new Date();
  return date.setDate(date.getDate() + 1);
};

export const randomizeFeed = (array) => {
  const id = Math.ceil(Math.random() * 227) - 1;
  const content = array.filter((n, i) => i == id);
  return content;
};

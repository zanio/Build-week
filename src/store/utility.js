export const utility = (oldstate, elementState) => ({
  ...oldstate,
  ...elementState,
});

export const getNextDay = () => (new Date().getTime()) * 24;

export const randomizeFeed = (array) => {
  const id = Math.ceil(Math.random() * 4) - 1;
  console.log(new Date().getTime());
  const content = array.filter((n, i) => i == id);
  return content;
};

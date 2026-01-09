
export const getRandom = (array, count) => {
  try {
    return Array.from(
      {length: count},
      ()=> array[Math.floor(Math.random() * array.length)]
    )
  } catch (err) {
    console.log(err);
    return Array(count).fill(null)
  }
};

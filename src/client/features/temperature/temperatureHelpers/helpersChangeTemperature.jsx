const generateMarks = () => {
  const result = [];
  for (let i = 0; i < 100; i += 10) {
    result.push({
      value: i,
      label: `${i}°`,
    });
  }
  return result;
};

const valueText = (value) => {
  return `${value}°`;
};

export { generateMarks, valueText}
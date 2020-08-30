const generateMarks = ():{value:number, label:string}[] => {
  const result = [];
  for (let i = 0; i < 100; i += 10) {
    result.push({
      value: i,
      label: `${i}°`,
    });
  }
  return result;
};

const valueText = (value:number):string => `${value}°`;

export { generateMarks, valueText };

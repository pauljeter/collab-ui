import buttonTokens from '../src/button';

const flatten = (objectOrArray, prefix = 'md_button_', formatter = k => k) => {
  const nestedFormatter = k => '_' + k;
  const nestElement = (prev, value, key) => {
    const formattedKey = key
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();

    return value && typeof value === 'object'
      ? { ...prev, ...flatten(value, `${prefix}${formatter(formattedKey)}`, nestedFormatter) }
      : { ...prev, ...{ [`${prefix}${formatter(formattedKey)}`]: value } };
  };

  return Array.isArray(objectOrArray)
    ? objectOrArray.reduce(nestElement, {})
    : Object.keys(objectOrArray).reduce(
        (prev, element) => nestElement(prev, objectOrArray[element], element),
        {}
      );
};

const buttonJSON = JSON.stringify(buttonTokens);
console.log('buttonJSON', buttonJSON);

const flatTokens = flatten(buttonTokens);
const flatJSON = JSON.stringify(flatTokens);
console.log('flatJSON', flatJSON);


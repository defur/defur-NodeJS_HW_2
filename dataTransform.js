

function addValues(a, b) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' || typeof b === 'string') return String(a) + String(b);
    if (Array.isArray(a) && Array.isArray(b)) return a.concat(b);
    throw new Error('Addition not possible for these types');
  }
  
  function stringifyValue(value) {
    if (typeof value === 'object' && value !== null) return JSON.stringify(value);
    return String(value);
  }
  
  function invertBoolean(value) {
    if (typeof value !== 'boolean') throw new Error('Expected a boolean');
    return !value;
  }
  
  function convertToNumber(value) {
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      if (isNaN(parsed)) throw new Error('Cannot convert string to number');
      return parsed;
    }
    const number = Number(value);
    if (isNaN(number)) throw new Error('Cannot convert to number');
    return number;
  }
  
  function coerceToType(value, type) {
    switch (type) {
      case 'string':
        return String(value);
      case 'number':
        return convertToNumber(value);
      case 'boolean':
        return Boolean(value);
      default:
        throw new Error(`Unsupported type coercion: ${type}`);
    }
  }
  
  function isPrimitive(value) {
    return (value !== Object(value));
  }
  
  const dataTransform = {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType,
    isPrimitive,
  };
  
  export default dataTransform;
  
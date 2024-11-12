type PropType = {
  key: string;
  value?: unknown;
};

const getOrSetLocalStorage = ({ key, value }: PropType) => {
  if (typeof window !== "undefined") {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    } else {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : data;
    }
  }
};

const extractValueParts = (value: string) => {
  const match = value.match(/^(\d+)(\D+)$/);
  if (match) {
    return {
      numberValue: parseInt(match[1]) || 0,
      suffixValue: match[2],
    };
  }
  return {
    numberValue: 0,
    suffixValue: "",
  };
};

export { getOrSetLocalStorage, extractValueParts };

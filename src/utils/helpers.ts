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

export { getOrSetLocalStorage };

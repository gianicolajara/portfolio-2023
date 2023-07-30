export const setLocalStore = (key: string, value: Record<string, any>) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStore = (key: string) => {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
};

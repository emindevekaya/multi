import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const storedItemJson = localStorage.getItem(key);
  const storedItem = JSON.parse(storedItemJson);
  return storedItem || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

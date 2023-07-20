import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItems = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItems);
        setItem(parsedItem);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

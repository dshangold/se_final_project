export function storeItems(items) {
  Object.entries(items).forEach(([key, value]) => {
    const val = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, val);
  });
}

export function clearItems(keys) {
  keys.forEach((key) => localStorage.removeItem(key));
}

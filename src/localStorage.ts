export class localStorageTools {
  static setItemToLocalStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItemFromLocalStorage<T>(key: string): T {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  }
}
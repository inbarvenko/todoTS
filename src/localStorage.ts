export class LocalStorageTools {
  static setItemToLocalStorage<T>(name: string, value: T): void {
    localStorage.setItem(name, JSON.stringify(value));
  }

  static getItemFromLocalStorage<T>(name: string, defaultValue: T): T {
    const item = localStorage.getItem(name);

    return item ? JSON.parse(item) : defaultValue;
  }
}
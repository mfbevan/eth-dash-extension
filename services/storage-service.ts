const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === "development";

export class StorageService {
  public static setItem(key: string, value: string) {
    if (isDevelopment) {
      localStorage.setItem(key, value);
    } else {
      chrome.storage.local.set({ [key]: value });
    }
  }

  public static async getItem(key: string): Promise<string> {
    if (isDevelopment) {
      return localStorage.getItem(key) ?? "";
    } else {
      return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => {
          resolve(result[key]);
        });
      });
    }
  }

  public static removeItem(key: string) {
    chrome.storage.local.remove(key);
  }
}

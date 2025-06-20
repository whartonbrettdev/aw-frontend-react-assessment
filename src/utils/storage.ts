// Utility to generate consistent storage keys
export const getStorageKey = (baseKey: string): string => {
  return `task-app_${baseKey}`;
};

// Storage operations with error handling
export const storageService = {
  save: (key: string, data: any): boolean => {
    try {
      const storageKey = getStorageKey(key);
      localStorage.setItem(storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      return false;
    }
  },

  load: (key: string): any => {
    try {
      const storageKey = getStorageKey(key);
      const data = localStorage.getItem(storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return null;
    }
  },

  loadLegacy: (key: string): any => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to load legacy data from localStorage:', error);
      return null;
    }
  },

  clear: (key: string): boolean => {
    try {
      const storageKey = getStorageKey(key);
      localStorage.removeItem(storageKey);
      return true;
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
      return false;
    }
  }
};
// Simulated API delay to create race conditions for testing
export const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

// Different delay patterns for various operations
export const delayPatterns = {
  short: () => delay(Math.random() * 100 + 25),
  medium: () => delay(Math.random() * 300 + 50),
  long: () => delay(Math.random() * 500 + 100),
  variable: (min: number = 50, max: number = 500) => delay(Math.random() * (max - min) + min)
};
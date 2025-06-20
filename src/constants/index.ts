// Application constants
export const APP_CONFIG = {
  APP_NAME: 'Task Management App',
  VERSION: '1.0.0',
  STORAGE_PREFIX: 'task-app',
  MAX_TASK_LENGTH: 500,
  AUTO_SAVE_DELAY: 1000,
  DEFAULT_PAGE_SIZE: 20
} as const;

// Storage keys
export const STORAGE_KEYS = {
  TASKS: 'tasks',
  USER_PREFERENCES: 'user-preferences',
  THEME: 'theme'
} as const;

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  STORAGE: 'Unable to save data. Please check your browser storage.',
  VALIDATION: 'Please check your input and try again.',
  TASK_TOO_LONG: `Task description cannot exceed ${APP_CONFIG.MAX_TASK_LENGTH} characters.`,
  TASK_EMPTY: 'Task description cannot be empty.'
} as const;

// UI states
export const UI_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export type UIState = typeof UI_STATES[keyof typeof UI_STATES];
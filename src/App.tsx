import React from 'react';
import { TaskProvider } from './context/TaskContext';
import ErrorBoundary from './components/ErrorBoundary';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <TaskApp />
      </TaskProvider>
    </ErrorBoundary>
  );
}

export default App;
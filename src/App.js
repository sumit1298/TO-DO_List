import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

// Main application component
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>To-Do List</h1>
          <TaskInput />
          <TaskList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

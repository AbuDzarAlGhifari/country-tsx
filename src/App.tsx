import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './component/ThemeToggle';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <header className="flex items-center justify-between p-4 px-8">
          <h1 className="text-lg font-bold text-black dark:text-white">
            What Country
          </h1>
          <ThemeToggle />
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

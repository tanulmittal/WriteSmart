import React, { useState } from 'react';
import { Pen, Zap, AlertTriangle, Loader2, Moon, Sun, LogOut, User } from 'lucide-react';
import TextEditor from './components/TextEditor';
import AIFeedback from './components/AIFeedback';
import LoginPage from './components/LoginPage';
import { analyzeText } from './services/openai';

function App() {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeText(text);
      setFeedback(result);
    } catch (err) {
      setError('An error occurred while analyzing the text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    console.log('Google login successful');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setText('');
    setFeedback(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-4 px-6`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className={`text-2xl font-bold flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Pen className="mr-3" /> WriteSmart
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAnalyze}
              disabled={loading || text.trim().length === 0}
              className={`${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center`}
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <Zap className="mr-2" />
              )}
              {loading ? 'Analyzing...' : 'Analyze Text'}
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
              aria-label="User profile"
            >
              <User size={24} />
            </button>
            <button
              onClick={handleLogout}
              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
            >
              <LogOut className="mr-2" size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-6">
        <TextEditor text={text} setText={setText} darkMode={darkMode} />
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
            <AlertTriangle className="mr-2 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        {feedback && <AIFeedback feedback={feedback} darkMode={darkMode} />}
      </main>
    </div>
  );
}

export default App;
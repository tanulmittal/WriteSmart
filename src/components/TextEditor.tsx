import React from 'react';

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  darkMode: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, setText, darkMode }) => {
  return (
    <div className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        className={`w-full h-64 p-4 ${
          darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-indigo-500'
            : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-500'
        } rounded-lg focus:outline-none focus:ring-2 transition-shadow duration-300 resize-none`}
        style={{ minHeight: '300px' }}
      />
    </div>
  );
};

export default TextEditor;
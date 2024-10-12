import React from 'react';
import { CheckCircle, AlertCircle, Zap } from 'lucide-react';

interface AIFeedbackProps {
  feedback: {
    grammar: string;
    content: string;
    tone: string;
  };
  darkMode: boolean;
}

const AIFeedback: React.FC<AIFeedbackProps> = ({ feedback, darkMode }) => {
  const sections = [
    { title: 'Grammar & Style', content: feedback.grammar, icon: CheckCircle },
    { title: 'Content Enhancement', content: feedback.content, icon: Zap },
    { title: 'Tone Analysis', content: feedback.tone, icon: AlertCircle },
  ];

  return (
    <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg`}>
      <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>AI Feedback</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h3 className={`text-lg font-medium mb-3 flex items-center ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            <section.icon className="mr-2 text-blue-600" size={24} />
            {section.title}
          </h3>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm prose max-w-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="whitespace-pre-wrap">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIFeedback;
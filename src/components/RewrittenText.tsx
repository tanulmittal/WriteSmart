import React from 'react';

interface RewrittenTextProps {
  original: string;
  rewritten: string;
}

const RewrittenText: React.FC<RewrittenTextProps> = ({ original, rewritten }) => {
  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Text Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">Original Text</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm whitespace-pre-wrap">{original}</div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">Rewritten Text</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm whitespace-pre-wrap">{rewritten}</div>
        </div>
      </div>
    </div>
  );
};

export default RewrittenText;
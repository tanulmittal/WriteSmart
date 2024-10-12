import React from 'react';
import { Pen, Zap, Brain, Sparkles, CheckCircle, Users, Lightbulb, Target, Rocket } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const GoogleLoginButton = () => (
    <button
      onClick={onLogin}
      className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition duration-300 flex items-center justify-center shadow-md mx-auto"
    >
      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
      Login with Google
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center w-full">
        <div className="flex items-center">
          <Pen className="w-8 h-8 text-indigo-600 mr-2" />
          <span className="text-2xl font-bold text-indigo-900">WriteSmart</span>
        </div>
        <div className="hidden sm:block">
          <GoogleLoginButton />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="text-center py-12 sm:py-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-6">Elevate Your Writing with AI-Powered Precision</h1>
            <p className="text-lg sm:text-xl text-black mb-8">Transform your writing process with our intelligent AI assistant</p>
            <p className="text-base sm:text-lg text-black mb-12">Get instant feedback, enhance your content, and perfect your tone - all in one place</p>
            <GoogleLoginButton />
          </section>

          <section className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-8 sm:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {[
                { icon: Zap, title: "Instant Feedback", description: "Real-time grammar and style suggestions" },
                { icon: Brain, title: "AI-Powered Analysis", description: "Advanced AI enhances writing quality" },
                { icon: Sparkles, title: "Content Enhancement", description: "Make content more engaging and impactful" },
                { icon: CheckCircle, title: "Tone Perfection", description: "Ensure the right tone for your audience" }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <GoogleLoginButton />
          </section>

          <section className="py-12 sm:py-16 bg-indigo-50 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {[
                { icon: Pen, title: "Write", description: "Enter your text" },
                { icon: Zap, title: "Analyze", description: "AI processes in seconds" },
                { icon: Lightbulb, title: "Improve", description: "Apply AI suggestions" },
                { icon: Rocket, title: "Excel", description: "Watch quality soar" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 sm:p-4 rounded-full shadow-md mb-3 sm:mb-4">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            <GoogleLoginButton />
          </section>

          <section className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-8 sm:mb-12">Who Can Benefit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {[
                { icon: Users, title: "Students", description: "Improve essays and papers" },
                { icon: Target, title: "Professionals", description: "Enhance communications" },
                { icon: Pen, title: "Writers", description: "Refine your craft" }
              ].map((user, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <user.icon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2">{user.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{user.description}</p>
                </div>
              ))}
            </div>
            <GoogleLoginButton />
          </section>

          <section className="text-center py-12 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4 sm:mb-6">Ready to Transform Your Writing?</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">Join thousands of satisfied users and start writing smarter today.</p>
            <GoogleLoginButton />
          </section>
        </div>
      </main>

      <footer className="bg-indigo-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} WriteSmart. All rights reserved. | Created by{' '}
            <a
              href="https://www.linkedin.com/in/tanulmittal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
            >
              Tanul Mittal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
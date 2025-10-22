import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <p className="text-gray-300 text-sm leading-relaxed">
            Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br/><br/>
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.
          </p>
        );
      case 'experiences':
        return (
          <p className="text-gray-300 text-sm leading-relaxed">
            Over the past decade, I’ve built strong client relationships, focusing on digital transformation strategies. My experience spans across sales enablement, cloud adoption, and CRM optimization.
          </p>
        );
      case 'recommended':
        return (
          <p className="text-gray-300 text-sm leading-relaxed">
            Dave is highly recommended for his professionalism, client empathy, and ability to drive measurable results. His peers describe him as dependable and forward-thinking.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1e1e1e] rounded-2xl shadow-lg p-4 w-full mb-6">
      <div className="flex space-x-3 mb-3">
        <button onClick={() => setActiveTab('about')} className={`px-4 py-1 rounded-xl font-medium ${activeTab === 'about' ? 'bg-[#2b2b2b] text-white' : 'text-gray-400'}`}>About Me</button>
        <button onClick={() => setActiveTab('experiences')} className={`px-4 py-1 rounded-xl font-medium ${activeTab === 'experiences' ? 'bg-[#2b2b2b] text-white' : 'text-gray-400'}`}>Experiences</button>
        <button onClick={() => setActiveTab('recommended')} className={`px-4 py-1 rounded-xl font-medium ${activeTab === 'recommended' ? 'bg-[#2b2b2b] text-white' : 'text-gray-400'}`}>Recommended</button>
      </div>
      <div className="max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        {renderContent()}
      </div>
    </div>
  );
}

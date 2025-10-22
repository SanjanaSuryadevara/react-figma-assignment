import React from 'react';
import './index.css';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] flex justify-center items-center p-6">
      <div className="grid grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="hidden md:block"></div>
        <div className="flex flex-col space-y-6">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";

export default function Gallery() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=500&q=60"
  ]);

  const scrollRef = useRef(null);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1e1e1e] rounded-2xl shadow-lg p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white font-semibold text-lg">Gallery</h2>
        <div className="flex space-x-2 items-center">
          <label className="bg-[#2b2b2b] text-white px-3 py-1 rounded-xl cursor-pointer hover:bg-[#333]">
            + Add Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            />
          </label>
          <button
            onClick={scrollLeft}
            className="bg-[#2b2b2b] text-white p-2 rounded-full hover:bg-[#333]"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#2b2b2b] text-white p-2 rounded-full hover:bg-[#333]"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto custom-scrollbar pb-2 scroll-smooth"
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-${idx}`}
            className="rounded-xl w-40 h-40 object-cover shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

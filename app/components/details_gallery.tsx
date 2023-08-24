import { useState } from 'react';

export default function DetailsGallery({images}:{images: string[]}) {
  // image index state
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {/* In Focus */}
      <img
        alt="Les Paul"
        src={images[selectedIndex]}
        className="aspect-square w-full rounded-xl object-cover"
      />

      {/* Remaining Images */}
      <div className="grid grid-cols-6 gap-4 lg:mt-4">
        {images.map((image, index)=>{
          return (
            <img
            key={index}
              alt="Les Paul"
              onClick={()=>{
                setSelectedIndex(index);
              }}
              src={image}
              className={`aspect-square w-full rounded-xl object-cover ${selectedIndex === index? "border-4 border-indigo-400":""}`}
            />
          )
        })}
      </div>
    </div>
  );
}

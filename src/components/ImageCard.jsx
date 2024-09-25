import React from 'react'
import image1 from "../assets/bird.jpg";
import image2 from "../assets/views.jpg";
import image3 from "../assets/paint.jpg";
import image4 from "../assets/ship.jpg";

export default function ImageCard() {
  // lets first create a list of objects
  const imagesList = [
    {
      id: 1,
      src: image1,
      alt: "bird",
    },
    {
      id: 2,
      src: image2,
      alt: "views",
    },
    {
      id: 3,
      src: image3,
      alt: "paint",
    },
    {
      id: 4,
      src: image4,
      alt: "ship",
    },
  ];

  return (
    <div className='images'>
      {imagesList.map(img => (
          <img className='img-card' key={img.id} src={img.src} alt={img.alt}/>
        ))}
    </div>
  )
}

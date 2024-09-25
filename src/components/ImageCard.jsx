import React from 'react'
import image1 from "../assets/bird.jpg";
import image2 from "../assets/views.jpg";
import image3 from "../assets/paint.jpg";
import image4 from "../assets/ship.jpg";
import image5 from "../assets/ship.jpg";
import image6 from "../assets/ship.jpg";
import image7 from "../assets/ship.jpg";
import image8 from "../assets/ship.jpg";
import image9 from "../assets/ship.jpg";
import image10 from "../assets/ship.jpg";
import image11 from "../assets/ship.jpg";
import image12 from "../assets/ship.jpg";

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
    {
      id: 5,
      src: image5,
      alt: "ship",
    },
    {
      id: 6,
      src: image6,
      alt: "ship",
    },
    {
      id: 7,
      src: image4,
      alt: "ship",
    },
    {
      id: 8,
      src: image5,
      alt: "ship",
    },
    {
      id: 9,
      src: image6,
      alt: "ship",
    },
    {
      id: 10,
      src: image4,
      alt: "ship",
    },
    {
      id: 11,
      src: image5,
      alt: "ship",
    },
    {
      id: 12,
      src: image6,
      alt: "ship",
    },
  ];

  return (
    <section className='container images-grid'>
      {imagesList.map(img => (
          <img className='img-card' key={img.id} src={img.src} alt={img.alt}/>
        ))}
    </section>
  )
}

import React from 'react'
import image1 from "../assets/bird.jpg";
import image2 from "../assets/views.jpg";
import image3 from "../assets/paint.jpg";
import image4 from "../assets/ship.jpg";
import image5 from "../assets/duck.jpg";
import image6 from "../assets/flower.png";
import image7 from "../assets/forest.jpg";
import image8 from "../assets/lost.jpg";
import image9 from "../assets/road.jpg";
import image10 from "../assets/roller.jpg";
import image11 from "../assets/diver.jpg";
import image12 from "../assets/humming.jpg";

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
      alt: "duck",
    },
    {
      id: 6,
      src: image6,
      alt: "flower",
    },
    {
      id: 7,
      src: image7,
      alt: "forest",
    },
    {
      id: 8,
      src: image8,
      alt: "lost",
    },
    {
      id: 9,
      src: image9,
      alt: "road",
    },
    {
      id: 10,
      src: image10,
      alt: "roller",
    },
    {
      id: 11,
      src: image11,
      alt: "diver",
    },
    {
      id: 12,
      src: image12,
      alt: "humming bird",
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

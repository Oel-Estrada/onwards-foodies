"use client";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./ImageSlideshow.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * An array of objects, each representing an image and its alt text.
 */
const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

/**
 * Represents an image slideshow component.
 *
 * @returns {JSX.Element}
 */
const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) =>
        prevImageIndex < images.length - 1 ? prevImageIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;

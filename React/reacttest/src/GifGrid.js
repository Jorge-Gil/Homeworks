import React from "react";
import { useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./useFetchGifs";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Lqw9Rv7MajHLSgoLdOI8s8oQvJkkijt2&q=${category}&limit=25&offset=0&rating=pg-13&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

const GifGrid = ({ category }) => {
  const{ images, isLoading } = useFetchGifs(category);

  // const getImages = async () => {
  //   const images = await getGifs(category);
  //   setImages(images);
  // };
  // useEffect(() => {
  //   getImages();
  //   console.log(category);
  // }, []);

  return (
    <>
      <h3> {category}</h3>
      <div className="card-grid">
        <h2> {images.title}</h2>
        {images.map((image, key) => {
          return (
            <>
              <h2> {image.title}</h2>
              <GifItem key={key} {...image}></GifItem>
            </>
          );
        })}
      </div>
    </>
  );
};
export default GifGrid;

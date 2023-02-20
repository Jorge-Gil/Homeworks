import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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

const addImages = (images) => {
  const img = images.map((img) => {
    return (
      <div>
        <h2> {img.title}</h2>
        <li key={img.id}>
          <img src={img.url} alt={img.title} />
        </li>
      </div>
    );
  });
  return img;
};

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((gifs) => setImages(gifs));
    console.log(category);
  }, [category]);

  getGifs(category);

  const Gifs = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    console.log(gifs);
  };
  Gifs.then((gifs) => setImages(gifs));

  return (
    <>
      <h3> {category}</h3>
      <p>Hello world</p>
      <ul>{addImages(images)}</ul>
      <ul> {Gifs} </ul>
    </>
  );
};
export default GifGrid;

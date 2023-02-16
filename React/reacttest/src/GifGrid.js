import React from "react";
import { useEffect } from "react";

const getGifs = async (category) => {
  const url =
  `https://api.giphy.com/v1/gifs/search?api_key=Lqw9Rv7MajHLSgoLdOI8s8oQvJkkijt2&q=${category}&limit=25&offset=0&rating=pg-13&lang=en`;
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
  useEffect(() => {
    console.log(category);
  }, []);

    getGifs(category);
  return (
    <>
      <h3> {category}</h3>
      <p>Hello world</p>
    </>
  );
};
export default GifGrid;

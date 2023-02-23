import React from "react";
import { useEffect, useState } from "react";

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

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
        };
        useEffect(() => {
            getImages();
        }, []);

    return {
        images: images,
        isLoading: false
    };
};
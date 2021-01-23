import { useEffect, useState } from "react";
import youtubeApi from "../api/youtubeApi";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const response = await youtubeApi.get("/search", {
      params: { q: searchTerm },
    });
    setVideos(response.data.items);
  };

  return [videos,search];
};

export default useVideos;

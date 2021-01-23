import axios from "axios";

const KEY = "AIzaSyBtr8wPQmcZw18VIIbP4jX5wTZuS1JZlgk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

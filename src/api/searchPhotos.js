import axios from "axios";

const ACCESS_KEY = "";

export const searchPhotos = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: term,
    },
  });
  const data = await res.data;
  console.log(data);
};

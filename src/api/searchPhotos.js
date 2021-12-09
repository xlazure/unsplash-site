import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const searchPhotos = async (term) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        per_page: 30,
        client_id: ACCESS_KEY,
        query: term,
      },
    });
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

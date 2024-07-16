import axios from "axios";


const baseUrl = axios.create({
  baseURL: "http://localhost:3000"
});
const videosApi = axios.create({
  baseURL: "http://localhost:3000/videos/"
});


export const deleteVideo = (id) => videosApi.delete(`/${id}/`);
export const updateVideo = (id, video) => videosApi.put(`/${id}/`, video);
export const createVideo = (video) => videosApi.post("/", video);
export const getVideo = (id) => videosApi.get(`/${id}/`);
export const filterVideosBySection = (section) => baseUrl.get("/videos", {
  params: { section }
});
import API from "./api";

export const uploadResult = async (data) => {
  const res = await API.post("/results", data);
  return res.data;
};
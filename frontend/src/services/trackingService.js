import API from "./api";

export const updateTracking = async (clientId, status) => {
  const res = await API.put(`/tracking/${clientId}`, { status });
  return res.data;
};
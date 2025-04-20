const BASE = "https://picsum.photos/";

export const getImage = async (id) => {
  const response = await fetch(`${BASE}/id/${id}/info`);
  const data = await response.json();
  return data;
};

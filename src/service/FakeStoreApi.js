const API = "https://fakestoreapi.com/products";

export async function GetData(data) {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${API}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

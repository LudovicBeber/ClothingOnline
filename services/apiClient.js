const API_URL = "https://fakestoreapi.com/"

export const apiRequest = async (endpoint, options = {}) => {
  const { method = "GET", body, headers = {} } = options;

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error API (${response.status})`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};
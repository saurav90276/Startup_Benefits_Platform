const BASE_URL = "http://localhost:5000/api";

export const apiFetch = async (url: string, options: any = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  return res.json();
};

import axios from "axios";

export const getEvent = async ({ id }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  console.log(id);

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/event/${id}`,
    requestOptions,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data && data.Events) {
    console.log(data);
    return data.Events;
  } else {
    throw new Error("Invalid data structure");
  }
};

export const createEvent = async (newEvent) => {
  const res = axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/events`,
    newEvent,
    {
      withCredentials: "include",
    },
  );
  return res;
};

export const editEvent = async (newEvent, id) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/events`,
    { newEvent, id },
    {
      withCredentials: "include",
    },
  );
  return res;
};

export const deleteEvent = async (id) => {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/events/${id}`,
      requestOptions,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

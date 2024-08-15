import axios from "axios";

export const getEvent = async ({ id }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/events/${id}`,
    requestOptions,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data && data.Event) {
    return data.Event;
  } else {
    throw new Error("Invalid data structure");
  }
};

export const editEvent = async (newEvent, id) => {
  console.log(newEvent);

  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_URL}/api/events/update/${id}`,
    newEvent,
    {
      withCredentials: "include",
    },
  );

  const data = await response.json();
  console.log(data);
};

export const deleteEvent = async (id) => {
  console.log(id);

  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/events/delete/${id}`,
      id,
      {
        withCredentials: "include",
      },
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

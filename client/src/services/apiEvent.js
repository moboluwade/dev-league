import axios from "axios";

export const getEvent = async ({ id }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/events/${id}`,
    requestOptions
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
  console.log(id, newEvent);
  // DEBUG: FOR SOME REASON ID IS NOT PASSED INTO THE EDITEVENT  //FUTURE
  // HACK RIGHT NOW IS TO REMOVE THE ID FROM THE NEW EVENT OBJECT

  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_URL}/api/events/update/${newEvent.eventId}`,
    newEvent,
    {
      withCredentials: "include",
    }
  );

  console.log(response);
  return await response;
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/events/delete/${id}`,
      id,
      {
        withCredentials: "include",
      }
    );
    console.log(response);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

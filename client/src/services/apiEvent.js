import axios from "axios";

export const getEvents = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins cannot be loaded");
  }

  return data;
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
  const res = axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/events`,
    { newEvent, id },
    {
      withCredentials: "include",
    },
  );
  return res;
};

export const deleteEvent = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin cannot be deleted");
  }
};

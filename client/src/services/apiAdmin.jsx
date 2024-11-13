import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Mutation to add admin
const addAdmin = async (email) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/permissions`,
    {
      email: email
    },
    { withCredentials: true }
  );
  console.log("I am hit on the client")
  return response.data;
};

// Mutation to remove admin
const removeAdmin = async (email) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/permissions/${email}`,
    { withCredentials: true }
  );
  return response.data;
};

// Hook to add an admin
export const useAddAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addAdmin,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["admins"]);
      console.log("Admin added successfully:", data);
    },
    onError: (error) => {
      console.error("Error adding admin:", error);
    },
  }); 
};

// Hook to remove an admin
export const useRemoveAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["admins"]);
      console.log("Admin removed successfully");
    },
    onError: (error) => {
      console.error("Error removing admin:", error);
    },
  });
};

const loadAdmins = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/permissions/`,
    { withCredentials: true }
  );
  return response.data;
};


export const useLoadAdmins = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loadAdmins,

    onSuccess: () => {
      queryClient.invalidateQueries(["admins"]);
      console.log("Admin removed successfully");
    },
    onError: (error) => {
      console.error("Error removing admin:", error);
    },
  });
};

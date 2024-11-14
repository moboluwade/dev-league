import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// Mutation to add admin
const addAdmin = async (email) => {
  console.log("email from addAdmin ", email);
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/permissions`,
    {
      email: email,
    },
    { withCredentials: true }
  );
  console.log("I am hit on the client");
  return response.data;
};

// Mutation to remove admin
const removeAdmin = async (email) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/permissions/`,
    { data: { email: email }, withCredentials: true }
  );
  return response.data;
};

// Hook to add an admin
export const useAddAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email) => addAdmin(email),
    onSuccess: (email) => {
      queryClient.invalidateQueries(["admins"]);
      console.log(email);
      toast.success(`Account added as admin`);
    },
    onError: (error) => {
      toast.error(`failed to add admin`);
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
      toast.success(` Account is no longer an admin`);
    },
    onError: (error) => {
      toast.error(`failed to remove as admin`);
      console.error("Error removing admin:", error);
    },
  });
};

// export const useLoadAdmins = () => {
//   const queryClient = useQueryClient();

//   return useQuery({

//   })

//   // return useMutation({
//   //   mutationFn: loadAdmins,

//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(["admins"]);
//   //     console.log("Admin removed successfully");
//   //   },
//   //   onError: (error) => {
//   //     console.error("Error removing admin:", error);
//   //   },
//   // });
// };

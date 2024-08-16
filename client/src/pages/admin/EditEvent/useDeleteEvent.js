import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../../services/apiEvent";
import toast from "react-hot-toast";

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteEvent } = useMutation({
    mutationFn: (id) => deleteEventApi(id),
    onSuccess: () => {
      toast.success("Event successfully deleted");
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error) => {
      // Extract error message from error object
      const message =
        error.response?.data?.message || error.message || "An error occurred";
      toast.error(message);
    },
  });

  return { isDeleting, deleteEvent };
};

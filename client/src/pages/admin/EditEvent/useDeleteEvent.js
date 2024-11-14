import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../../services/apiEvent";
import { toast } from "react-hot-toast";
export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  let deleteError = null;
  const {
    isPending: isDeleting,
    mutate: deleteEvent,
    isSuccess: isDeleted,
  } = useMutation({
    mutationFn: (id) => deleteEventApi(id),
    onSuccess: () => {
      console.log("success");
      toast.success("Event succcessfully deleted");
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error) => {
      // Extract error message from error object
      const message =
        error.response?.data?.message || error.message || "An error occurred";
      deleteError = message;
    },
  });

  return { isDeleting, deleteEvent, isDeleted, deleteError };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editEvent as editEventApi } from "../../../services/apiEvent";

export const useEditEvent = (reset) => {
  const queryClient = useQueryClient();

  const {
    mutate: editEvent,
    isPending: isEditing,
    isSuccess: isSuccess,
  } = useMutation({
    mutationFn: (newEventData, id) => editEventApi(newEventData, id),
    onSuccess: () => {
      toast.success("Event successfully edited");
      queryClient.invalidateQueries({ queryKey: ["events"] });
      if (reset) reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editEvent, isSuccess };
};

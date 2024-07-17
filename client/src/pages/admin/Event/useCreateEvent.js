import toast from "react-hot-toast";
import { createEvent as createEventApi } from "../../../services/apiEvent";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateEvent = (reset) => {
  const queryClient = useQueryClient();

  const { mutate: createEvent, isPending: isCreating } = useMutation({
    mutationFn: createEventApi,
    onSuccess: () => {
      toast.success("Event successfully created");
      queryClient.invalidateQueries({ queryKey: ["events"] });
      if (reset) reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEvent };
};

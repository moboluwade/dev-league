import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../../services/apiEvent";

export const useEvent = ({ id }) => {
  const {
    isLoading,
    data: event,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: () => getEvent({ id }),
  });

  return { isLoading, error, event };
};

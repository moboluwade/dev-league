import CardDisplay from "../Card/CardDisplay";
import { useEffect, useState } from "react";
// import { customEventsData } from '../../../../utils/data'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NoCards from "./NoCards";
import Loader from "../../../../components/Loader/Loader";

const EventsContext = (props) => {
  const [eventsData, setEventsData] = useState([]);
  // const [cardsData, setCardsData] = useState(eventsData)

  // fetch events from the fetch events endpoint
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["fetch events"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/events/last-five`
        );
        const events = await response.data;
        const eventRes = events.Events;
        console.log(eventRes);
        return eventRes;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw new Error("Failed to fetch events. Please try again.");
      }
    },
  });

  useEffect(() => {
    data && setEventsData(data);
    // console.log(data)
  }, [data]);

  const [showNoCards, setShowNoCards] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isFetched && eventsData.length === 0) {
      // Delay the display of NoCards by 1 second
      timeoutId = setTimeout(() => {
        setShowNoCards(true);
      }, 1000); // 1000ms = 1 second
    } else {
      setShowNoCards(false);
    }

    // Clean up the timeout if conditions change
    return () => clearTimeout(timeoutId);
  }, [isFetched, eventsData]);

  return (
    <div>
      <div className="px-6 mx-auto my-12 lg:px-16 max-w-screen-2xl min-h-[566px]">
        <div className="flex items-center justify-between gap-8 py-2">
          <h1 className="text-2xl font-bold capitalize md:text-4xl text-primary500 ">
            {props.displayType} Events
          </h1>

          <button
            className="font-bold text-black underline text-md md:text-xl underline-offset-2"
            onClick={() => props.filterCards("all")}
          >
            View all
          </button>
        </div>
        {/* cards  */}
        <div className="relative mt-4">
          {/* show no cards if there is fetch has occured and event list is empty */}
          {/* prevent users seeing the no events everytime they come to the events page. */}
          <div className="relative w-full -top-32">
            {isLoading && <Loader />}
            {isFetched && showNoCards && <NoCards />}
          </div>

          <CardDisplay
            displayType={props.displayType}
            eventsData={eventsData}
            setEventsData={setEventsData}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsContext;

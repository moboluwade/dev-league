'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import NoCards from "../../../components/regular/Events/Context/NoCards";
import Card from "../../../pages/admin/ManageEvent/EventCard.jsx";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, SearchIcon, LayoutGridIcon } from 'lucide-react';

const ManageEvent = () => {
  const [eventsData, setEventsData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('All');

  const { data } = useQuery({
    queryKey: ["fetch events"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/events`
        );
        const events = await response.data;
        return events.Events;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw new Error("Failed to fetch events. Please try again.");
      }
    },
  });

  useEffect(() => {
    if (data) {
      setEventsData(data);
      setFilteredEvents(data);
    }
  }, [data]);

  useEffect(() => {
    const filtered = eventsData.filter(event => 
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeType === 'All' || event.eventType === activeType)
    );
    setFilteredEvents(filtered);
  }, [searchTerm, activeType, eventsData]);

  const handleCardClick = (cardId) => {
    const updatedCards = eventsData.map((card) =>
      card._id === cardId ? { ...card, eventStatus: !card.eventStatus } : card
    );
    setEventsData(updatedCards);
  };

  const eventTypes = ['All', ...new Set(eventsData.map(event => event.eventType))];

  return (
    <div className="flex flex-col w-full h-screen bg-text-dev-light-orange">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container px-4 py-4 mx-auto md:px-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <LayoutGridIcon className="w-8 h-8 text-primary500" />
              <div>
                <h1 className="text-2xl font-bold text-primary500">Events</h1>
                <p className="text-sm text-gray-500">Total events: {eventsData.length}</p>
              </div>
            </div>
            <div className="flex-grow max-w-md">
              <div className="relative">
                <SearchIcon className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  className="w-full py-2 pl-10 pr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-4 p-4 md:p-6">
        <div className="flex flex-wrap gap-2">
          {eventTypes.map(type => (
            <Badge 
              key={type} 
              variant={activeType === type ? "default" : "outline"}
              className="transition-colors duration-200 cursor-pointer hover:bg-primary500/90"
              onClick={() => setActiveType(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      <ScrollArea className="flex-grow px-4 pb-6 md:px-6">
        {filteredEvents.length === 0 ? (
          <NoCards />
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filteredEvents.map((card) => {
              const {
                _id,
                title,
                description,
                eventType,
                eventStatus,
                startDate,
              } = card;

              return (
                <div
                  key={_id}
                  style={{ cursor: eventStatus ? "pointer" : "not-allowed" }}
                >
                  <Card
                    isEventOpen={new Date(startDate) > new Date() && true}
                    title={title}
                    type={eventType}
                    startDate={startDate}
                    description={description}
                    onClick={handleCardClick}
                    id={_id}
                  />
                </div>
              );
            })}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ManageEvent;
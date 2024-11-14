"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// This would typically come from an API call
// const subscribers = [
//   "john.doe@example.com",
//   "jane.smith@example.com",
//   "alice.johnson@example.com",
//   "bob.williams@example.com",
//   "emma.brown@example.com",
//   "michael.davis@example.com",
//   "olivia.miller@example.com",
//   "william.wilson@example.com",
//   "sophia.moore@example.com",
//   "james.taylor@example.com",
// ];

export default function AllPost() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subscribers, setSubscribers] = useState([]);

  const { data } = useQuery({
    queryKey: ["fetchSubscriber"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/emails`,
        {
          withCredentials: "include",
        }
      );
      return res.data;
    },
  });

  useEffect(() => {
    data && setSubscribers(data.Emails);
  }, [data]);

  const filteredEmails = subscribers.filter((subscriber) => subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen bg-[#fff6f3] text-gray-800 w-full">
      <div className="container p-4 mx-auto sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Newsletter Subscribers
          </h1>
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Total subscribers:{" "}
              <span className="text-[#FF4405]">{subscribers.length}</span>
            </p>
          </div>
        </div>

        <Card className="overflow-hidden bg-white shadow-md">
          <CardHeader className="border-b bg-white/50">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search subscribers..."
                className="pl-8 bg-white border-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-280px)] w-full">
              <div className="divide-y">
                {filteredEmails && filteredEmails.map((subscriber, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-3 transition-colors hover:bg-orange-50"
                  >
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-[#FF4405] rounded-full">
                      {subscriber.email[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-medium">{subscriber.email}</span>
                  </div>
                ))}
                {filteredEmails.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No matching subscribers found
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

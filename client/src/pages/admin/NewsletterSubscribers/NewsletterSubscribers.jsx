import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Users } from "lucide-react";

const NewsletterSubscribers = () => {
  const [subscribers, setSubscribers] = useState([
    { email: "user1@example.com", subscriptionDate: "2023-05-01" },
    { email: "user2@example.com", subscriptionDate: "2023-05-02" },
    { email: "user3@example.com", subscriptionDate: "2023-05-03" },
    { email: "user4@example.com", subscriptionDate: "2023-05-04" },
    { email: "user5@example.com", subscriptionDate: "2023-05-05" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-[#fff6f3] text-gray-800 min-h-screen overflow-y-scroll">
      <h1 className="mb-6 text-3xl font-bold">Newsletter Subscribers</h1>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Subscribers
            </CardTitle>
            <Users className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white shadow-md ">
        <CardHeader>
          <CardTitle>Subscriber List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search subscribers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border-gray-300"
            />
          </div>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-800">Email</TableHead>
                  <TableHead className="text-gray-800">
                    Subscription Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscribers.map((subscriber) => (
                  <TableRow key={subscriber.email}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-orange-500" />
                        {subscriber.email}
                      </div>
                    </TableCell>
                    <TableCell>{subscriber.subscriptionDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterSubscribers;

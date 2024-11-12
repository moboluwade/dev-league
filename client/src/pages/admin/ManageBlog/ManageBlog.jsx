"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PencilIcon,
  TrashIcon,
  SearchIcon,
  LayoutGridIcon,
} from "lucide-react";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState("All");

  // INITIALIZE THIRD PARTY HOOKS
  const queryClient = useQueryClient();

  // FETCH BLOGS
  const { data } = useQuery({
    queryKey: ["fetch blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/blog`
      );
      const response = res.data;
      const blogArray = response.blogs;
      return blogArray;
    },
  });

  // DELETE BLOGS
  const handleDelete = useMutation({
    mutationFn: async ({ id }) => {
      console.log("Delete blog with id:", id);
      return await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/blog/delete/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["fetch blogs"]); // Triggers a refresh of the blogs list
    },
  });

  
  useEffect(() => {
    if (data) {
      setBlogs(data);
      setFilteredBlogs(data);
    }
  }, [data]);

  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (activeType === "All" || blog.blogType.includes(activeType))
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, activeType, blogs]);

  const blogTypes = ["All", ...new Set(blogs.flatMap((blog) => blog.blogType))];


  return (
    <div className="flex flex-col w-full h-screen bg-text-dev-light-orange">
      <header className="sticky top-0 z-10 border-b shadow-sm">
        <div className="container px-4 py-4 mx-auto md:px-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <LayoutGridIcon className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
                <p className="text-sm text-gray-500">
                  Total blogs: {blogs.length}
                </p>
              </div>
            </div>
            <div className="flex-grow max-w-md">
              <div className="relative">
                <SearchIcon className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <Input
                  type="text"
                  placeholder="Search blogs..."
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
          {blogTypes.map((type) => (
            <Badge
              key={type}
              variant={activeType === type ? "default" : "outline"}
              className="transition-colors duration-200 cursor-pointer hover:bg-primary/90"
              onClick={() => setActiveType(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      <ScrollArea className="flex-grow px-4 pb-24 md:px-6 md:pb-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.blogImage || "/Image.png"}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-200 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex flex-wrap gap-2">
                      {blog.blogType.map((type) => (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="text-xs text-gray-800 bg-white/80"
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <h2 className="mb-2 text-xl font-bold line-clamp-2 hover:line-clamp-none">
                  {blog.title}
                </h2>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {blog.blogContent}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 bg-gray-50">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="/Avatar.png" alt={blog.author} />
                    <AvatarFallback>{blog.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{blog.author}</p>
                    <p className="text-xs text-gray-500">01 June 2023</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/admin/manage/blog/${blog._id}`}>
                      <PencilIcon className="w-4 h-4 text-blue-500 hover:text-blue-600" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete.mutate({ id: blog._id })}
                  >
                    <TrashIcon className="w-4 h-4 text-red-500 hover:text-red-600" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ManageBlog;

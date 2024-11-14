"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  LogOut,
  FileText,
  Calendar,
  Plus,
  ChevronRight,
  Mailbox,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // USEQUERIES
  // TODO: Abstract usequeries to dedicated components
  const logoutQuery = useQuery({
    queryKey: ["logout"],
    queryFn: async () => {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/logout`,
        { text: "placeholder" },
        {
          withCredentials: "include",
        }
      );
      return res;
    },
    enabled: false,
  });

  const { isSuccess: sudoIsSuccess } = useQuery({
    queryKey: ["check-sudo"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/check-sudo`,
        {
          withCredentials: "include",
        }
      );
      return response;
    },
  });

  useEffect(() => {
    if (logoutQuery.isSuccess) {
      navigate("/");
    }
  }, [logoutQuery.isSuccess, navigate]);

  // callback functions
  const handleLogout = () => {
    logoutQuery.refetch();
  };

  const NavItem = ({ href, icon: Icon, children }) => (
    <motion.a
      href={href}
      className="flex items-center justify-between w-full p-3 text-white rounded-lg hover:bg-gray-800"
      onClick={() => setIsOpen(false)}
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.8 }}
    >
      <div className="flex items-center space-x-3">
        <Icon size={20} />
        <span>{children}</span>
      </div>
      <ChevronRight size={16} />
    </motion.a>
  );

  const MainNavItem = ({ href, icon: Icon, children }) => (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="z-50 flex items-center w-full px-4 py-2 space-x-2 text-lg text-white rounded-lg bg-text-dev-orange"
      onClick={() => {
        setIsOpen(false), navigate(href);
      }}
    >
      <Icon className="bg-white rounded-full text-text-dev-orange" size={20} />
      <span>{children}</span>
    </motion.button>
  );

  const SidebarContent = () => (
    <ScrollArea className="h-screen py-6 px-6 bg-[#14171F] z-10">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="icon"
          className="w-[50px] h-[50px] hover:bg-text-dev-orange rounded-full p-3"
        >
          <Menu className="text-white" size={30} />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <a href="/">
          <img src="/Union.svg" alt="logo" className="w-12 h-12 ml-8" />
        </a>
      </div>
      <div className="z-10 w-full space-y-4">
        <div className="w-full space-y-2">
          <MainNavItem
            className="text-white"
            href="/admin/create/blog"
            icon={Plus}
          >
            New Blog
          </MainNavItem>
          <MainNavItem href="/admin/create/event" icon={Plus}>
            New Event
          </MainNavItem>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Manage</h2>

          <NavItem href="/admin/manage/blog" icon={FileText}>
            Manage blog
          </NavItem>
          <NavItem href="/admin/manage/event" icon={Calendar}>
            Manage events
          </NavItem>
          <NavItem href="/admin/subscribers" icon={Mailbox}>
            Subscribers
          </NavItem>
          {/* <NavItem href="/admin/manage/all-posts" icon={FileText}>
            Manage admins
          </NavItem> */}
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500">
          <a href="#" className="hover:underline">
            Profile
          </a>
          {sudoIsSuccess && (
            <a href="/admin/manage/permissions" className="hover:underline">
              Manage admins
            </a>
          )}
        </div>
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </ScrollArea>
  );

  return (
    <>
      <Sheet className="w-full h-full" open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-[50px] h-[50px] rounded-full p-3"
          >
            <Menu size={30} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden w-64 bg-gray-800/40 md:block">
        <SidebarContent />
      </div>
    </>
  );
}

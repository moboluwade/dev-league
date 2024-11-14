"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAddAdmin, useRemoveAdmin } from "@/services/apiAdmin";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import AdminTable from "./AdminTable";

export default function ManageAdmin() {
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [debouncedEmail, setDebouncedEmail] = useState(newAdminEmail);
  const [confirmSudoEmail, setConfirmSudoEmail] = useState("");
  const [confirmDeleteEmail, setConfirmDeleteEmail] = useState("");
  const [isSudoDialogOpen, setIsSudoDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { toast } = useToast();

  const {
    mutate: addAdmin,
    isPending: addIsPending,
    isSuccess: addIsSuccess,
    isError: addIsError,
  } = useAddAdmin();

  const {
    mutate: removeAdmin,
    isSuccess: removeIsSuccess,
    isError: removeIsError,
  } = useRemoveAdmin();

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedEmail(newAdminEmail), 300);
    return () => clearTimeout(handler);
  }, [newAdminEmail]);

  const loadAdmins = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/permissions/`,
      { withCredentials: true }
    );
    return response.data;
  };

  const handleAddAdmin = async () => {
    addAdmin(debouncedEmail ?? newAdminEmail);
  };

  const handleSudoRoleChange = (email) => {
    setConfirmSudoEmail(email);
    setIsSudoDialogOpen(true);
  };

  const handleConfirmSudoRole = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/permissions/give-sudo`,
        { emails: [confirmSudoEmail] },
        { withCredentials: true }
      );
      toast({ title: "Sudo Role Assigned Successfully" });
      setIsSudoDialogOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to assign sudo role",
      });
    }
  };

  const handleDeleteAdmin = (email) => {
    setConfirmDeleteEmail(email);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log(confirmDeleteEmail)
    removeAdmin(confirmDeleteEmail);
    setIsDeleteDialogOpen(false);
  };

  const { data: adminData } = useQuery({
    queryKey: ["load-admins"],
    queryFn: loadAdmins,
  });

  useEffect(() => {
    if (addIsSuccess) {
      toast({
        title: "Admin Added Successfully",
        description: debouncedEmail,
      });
    }
    if (addIsError) {
      toast({
        variant: "destructive",
        title: "Failed to add Admin",
      });
    }
    if (removeIsSuccess) {
      toast({
        title: "Admin Removed Successfully",
      });
    }
    if (removeIsError) {
      toast({
        variant: "destructive",
        title: "Failed to remove Admin",
      });
    }
  }, [
    addIsSuccess,
    addIsError,
    removeIsSuccess,
    removeIsError,
    debouncedEmail,
    toast,
  ]);

  return (
    <div className="h-screen bg-[#fff6f3] text-gray-800 w-full">
      <div className="container p-4 mx-auto sm:p-6">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Manage Admins</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-100px)] container mx-auto">
        <div className="p-4 sm:p-6">
          <Card className="mb-6 bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                Add New Admin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  className="flex-grow bg-white border-gray-300"
                />
                <Button
                  disabled={addIsPending}
                  onClick={handleAddAdmin}
                  className={`w-full ${
                    addIsPending && `opacity-30`
                  } text-white bg-orange-500 hover:bg-orange-600 sm:w-auto`}
                >
                  <PlusCircle className="w-4 h-4 mr-2" /> Add Admin
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="flex justify-between w-full bg-white sm:w-auto sm:justify-start">
              <TabsTrigger
                value="all"
                className="flex-1 sm:flex-none data-[state=active]:bg-orange-100"
              >
                All Admins
              </TabsTrigger>
              <TabsTrigger
                value="verified"
                className="flex-1 sm:flex-none data-[state=active]:bg-orange-100"
              >
                Onboarded
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="flex-1 sm:flex-none data-[state=active]:bg-orange-100"
              >
                Pending
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <AdminTable
                admins={adminData && adminData.admins}
                onSudoChange={handleSudoRoleChange}
                onDelete={handleDeleteAdmin}
              />
            </TabsContent>

            <TabsContent value="verified">
              <AdminTable
                admins={
                  adminData &&
                  adminData.admins.filter(
                    (admin) => admin.onboarding === "completed"
                  )
                }
                onSudoChange={handleSudoRoleChange}
                onDelete={handleDeleteAdmin}
              />
            </TabsContent>

            <TabsContent value="pending">
              <AdminTable
                admins={
                  adminData &&
                  adminData.admins.filter(
                    (admin) => admin.onboarding === "pending"
                  )
                }
                onSudoChange={handleSudoRoleChange}
                onDelete={handleDeleteAdmin}
              />
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>

      <Dialog open={isSudoDialogOpen} onOpenChange={setIsSudoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Sudo Role Assignment</DialogTitle>
            <DialogDescription>
              Are you sure you want to assign sudo role to {confirmSudoEmail}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsSudoDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirmSudoRole}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Admin Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete admin {confirmDeleteEmail}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

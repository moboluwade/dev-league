import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useAddAdmin,
  useLoadAdmins,
  useRemoveAdmin,
} from "@/services/apiAdmin";
import { useToast } from "@/hooks/use-toast";

const ManageAdmin = () => {
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [adminUsers, setAdminUsers] = useState([
    { email: "admin1@example.com", status: "verified" },
    { email: "admin2@example.com", status: "pending" },
  ]);
  const [addedEmail, setAddedEmail] = useState("");
  const [loadCount, setLoadCount] = useState(0);

  const { toast } = useToast();
  const {
    mutate: addAdmin,
    isPending: addIsPending,
    isSuccess: addIsSuccess,
    isError: addIsError,
  } = useAddAdmin();

  const { mutate: removeAdmin } = useRemoveAdmin();

  const { mutate: loadAdmins } = useLoadAdmins();

  // useEffect(() => {
  //   if (loadCount < 3) {
  //     const response = loadAdmins();
  //     console.log("response:", response);

  //     // Increment loadCount each time useEffect is triggered
  //     setLoadCount(prevCount => prevCount + 1);
  //   }
  // }, [loadCount, loadAdmins]); // Effect depends on loadCount

  const addNewAdmin = () => {
    // demo
    // if (newAdminEmail && !adminUsers.some(user => user.email === newAdminEmail)) {
    //   setAdminUsers([...adminUsers, { email: newAdminEmail, status: 'pending' }])
    //   setNewAdminEmail('')
    // }

    // real
    addAdmin(newAdminEmail); // Trigger the mutation to add admin
  };

  const removeOldAdmin = (email) => {
    // demo
    // setAdminUsers(adminUsers.filter(user => user.email !== email))
    // real
    removeAdmin(email);
  };

  useEffect(() => {
    addIsSuccess &&
      toast({
        title: "Admin Added Successfully",
        description: addedEmail,
      });

      addIsError &&
      toast({
        variant: "destructive",
        title: "Failed to add Admin",
      })
  }, [addIsSuccess, addedEmail, toast, addIsError]);

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
                  onClick={()=>{addNewAdmin(), setAddedEmail(newAdminEmail)}}
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
                Verified
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="flex-1 sm:flex-none data-[state=active]:bg-orange-100"
              >
                Pending
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <AdminTable admins={adminUsers} onRemove={removeOldAdmin} />
            </TabsContent>

            <TabsContent value="verified">
              <AdminTable
                admins={adminUsers.filter((user) => user.status === "verified")}
                onRemove={removeOldAdmin}
              />
            </TabsContent>

            <TabsContent value="pending">
              <AdminTable
                admins={adminUsers.filter((user) => user.status === "pending")}
                onRemove={removeOldAdmin}
              />
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
};

const AdminTable = ({ admins, onRemove }) => (
  <Card className="w-full mb-12 overflow-hidden bg-white shadow-md">
    <ScrollArea className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-800">Email</TableHead>
            <TableHead className="text-gray-800">Status</TableHead>
            <TableHead className="text-gray-800">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admins.map((admin) => (
            <TableRow key={admin.email}>
              <TableCell className="font-medium text-gray-800">
                {admin.email}
              </TableCell>
              <TableCell>
                {admin.status === "verified" ? (
                  <span className="text-green-600">Verified</span>
                ) : (
                  <span className="text-yellow-600">Pending</span>
                )}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  onClick={() => onRemove(admin.email)}
                  className="h-auto p-1 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  </Card>
);

export default ManageAdmin;

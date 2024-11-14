import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminTable({ admins, onSudoChange, onDelete }) {
  return (
    <Card className="w-full mb-12 overflow-hidden bg-white shadow-md">
      <ScrollArea className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-800">Email</TableHead>
              <TableHead className="text-gray-800">Status</TableHead>
              <TableHead className="text-gray-800">Assign Sudo</TableHead>
              <TableHead className="text-gray-800">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins &&
              admins.map((admin) => (
                <TableRow key={admin.email}>
                  <TableCell className="font-medium text-gray-800">
                    {admin.email}
                  </TableCell>
                  <TableCell>
                    {admin.onboarding === "completed" ? (
                      <span className="text-green-600">Onboarded</span>
                    ) : (
                      <span className="text-yellow-600">Pending</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={admin.sudoRole === "sudoAdmin"}
                      onChange={() => onSudoChange(admin.email)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      onClick={() => onDelete(admin.email)}
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
}

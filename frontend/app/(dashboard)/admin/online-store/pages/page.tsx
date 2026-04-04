import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminOnlineStorePages() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pages</h1>
        <Button variant="default" size="sm">Add page</Button>
      </div>
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Add pages to your store</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Create pages like About Us, Contact, and FAQ to share information with your customers.</p>
      </div>
    </div>
  );
}

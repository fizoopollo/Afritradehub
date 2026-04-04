import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminOnlineStorePreferences() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Preferences</h1>

      <div className="bg-card rounded-xl border border-border p-6 space-y-6">
        <div>
          <h2 className="font-semibold mb-4">Title and meta description</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Homepage title</label>
              <Input placeholder="My Store" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Homepage meta description</label>
              <Textarea placeholder="Describe your store..." rows={3} />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h2 className="font-semibold mb-4">Google Analytics</h2>
          <div>
            <label className="text-sm font-medium mb-1 block">Google Analytics account</label>
            <Input placeholder="UA-XXXXX-X or G-XXXXXXXXXX" />
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h2 className="font-semibold mb-4">Password protection</h2>
          <p className="text-sm text-muted-foreground mb-3">Restrict access to visitors with the password.</p>
          <Input placeholder="Password" type="password" />
        </div>

        <Button variant="default">Save</Button>
      </div>
    </div>
  );
}

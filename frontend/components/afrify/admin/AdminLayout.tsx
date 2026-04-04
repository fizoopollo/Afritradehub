import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { useAdminAuth } from "@/stores/adminAuth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const isAuthenticated = useAdminAuth((s) => s.isAuthenticated);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/admin/login");
    return null;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto bg-surface-sunken p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

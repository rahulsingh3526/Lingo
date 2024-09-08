import React from "react";

import dynamic from "next/dynamic";
import { IsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {
  const isAdmin = IsAdmin();

  if (!isAdmin) {
    redirect("/");
  }
  return (
    <div>
      <App />
    </div>
  );
};

export default AdminPage;

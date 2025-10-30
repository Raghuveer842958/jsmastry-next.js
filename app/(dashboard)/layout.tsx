import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div>Dashboard Header</div>
      {children}
    </main>
  );
};

export default DashboardLayout;

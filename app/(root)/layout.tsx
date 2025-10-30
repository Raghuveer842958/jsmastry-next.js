import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div>Root Header</div>
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;

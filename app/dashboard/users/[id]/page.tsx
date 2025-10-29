import React from "react";

interface UserDetailsProps {
  params: {
    id: string;
  };
}

const UserDetails = ({ params }: Readonly<UserDetailsProps>) => {
  return (
    <main>
      <h2>User Details Page</h2>
      <p>User ID: {params.id}</p>
    </main>
  );
};

export default UserDetails;

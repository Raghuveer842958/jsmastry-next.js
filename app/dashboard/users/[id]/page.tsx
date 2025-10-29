import React from "react";

interface UserDetailsProps {
  params: {
    id: string,
    name: string
  };
}

// { params }: Readonly<{id : String}>

const UserDetails = async ({ params }: Readonly<UserDetailsProps>) => {
  const { id } = await params;
  console.log("Usr id is :", id);
  return (
    <main>
      <h2>User Details Page</h2>
      <p>User ID: {id}</p>
    </main>
  );
};

export default UserDetails;

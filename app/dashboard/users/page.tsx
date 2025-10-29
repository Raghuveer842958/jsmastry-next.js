import Link from "next/link";
import React from "react";

const page = () => {
  const users = [
    {
      name: "raghu",
      id: 1,
    },
    {
      name: "ajay",
      id: 2,
    },
    {
      name: "nitesh",
      id: 3,
    },
    {
      name: "shubham",
      id: 4,
    },
    {
      name: "sagar",
      id: 5,
    },
  ];
  return (
    <main>
      <div>User Page</div>
      <div>
        <h1>Users List</h1>
        <div>
          {users.length ? (
            users.map((user) => (
              <Link href={`/dashboard/users/${user.id}`}>
                <p key={user.id}>{user.name}</p>
              </Link>
            ))
          ) : (
            <div>No Users Found!!</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;

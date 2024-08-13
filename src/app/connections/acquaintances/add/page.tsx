"use client";

import { useEffect, useState } from "react";

import { Connection, getAllUsers, mockConnections, User } from "@/app/lib";
import { Search, UserCard } from "@/app/ui";

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
    <h2 className="text-lg font-bold mb-2">Error</h2>
    <p>{message}</p>
  </div>
);

export default function AddNewAcquaintancePage() {
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const [connections, setConnections] = useState<Connection[]>(mockConnections);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        const newAvailableUsers = users.filter(
          (user) => !connections.some((connection) => connection.id === user.id)
        );
        setAvailableUsers(newAvailableUsers);
      } catch (err) {
        console.error("Error fetching users: ", err);
        setError(
          "An error occurred while fetching users. Please try again later."
        );
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddUser = (userId: string) => {
    const userToAdd = availableUsers.find((user) => user.id === userId);
    if (userToAdd) {
      const newConnection: Connection = {
        ...userToAdd,
        circle: "acquaintances",
        conversationId: userToAdd.id,
      };

      setConnections((prevConnections) => [...prevConnections, newConnection]);
      setAvailableUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );

      console.log("Added user with ID: ", userId);
    }
  };

  const filteredUsers = availableUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            text={user.name}
            onAdd={() => handleAddUser(user.id)}
          />
        ))
      ) : (
        <p className="text-gray-500 mt-4">
          {availableUsers.length === 0 ? "Loading users..." : "No users found"}
        </p>
      )}
    </>
  );
}

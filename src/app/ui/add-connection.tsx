"use client";

import { useState, useEffect } from "react";
import { Connection, fetchAllConnections, User } from "@/app/lib";
import { Search, UserCard } from "@/app/ui";
import { fetchAvailableUsers, addConnection } from "@/app/lib/actions";

export function AddConnection() {
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const users = await fetchAvailableUsers();
      setAvailableUsers(users);
      const currentConnections = await fetchAllConnections();
      setConnections(currentConnections);
    }
    loadData();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddUser = async (userId: string) => {
    setError(null);
    setSuccessMessage(null);
    const userToAdd = availableUsers.find((user) => user.id === userId);
    if (userToAdd) {
      try {
        const updatedConnections = await addConnection(userToAdd);
        setConnections(updatedConnections);
        setAvailableUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userId)
        );
        setSuccessMessage(
          `Successfully added ${userToAdd.name} to your connections.`
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    }
  };

  const filteredUsers = availableUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search onSearch={handleSearch} />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && (
        <div className="text-black mb-4">{successMessage}</div>
      )}
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

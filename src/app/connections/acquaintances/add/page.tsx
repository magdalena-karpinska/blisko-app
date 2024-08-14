"use client";

import { useCallback, useEffect, useState } from "react";

import { getAllUsers, User, useCircleManagement } from "@/app/lib";
import { Search, UserCard } from "@/app/ui";
import { searchUsers } from "@/db/queries";

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
    <h2 className="text-lg font-bold mb-2">Error</h2>
    <p>{message}</p>
  </div>
);

export default function AddNewAcquaintancePage() {
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { getAllConnections, addConnection } = useCircleManagement();

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getAllUsers();
      const existingConnections = getAllConnections();
      const newAvailableUsers = users.filter(
        (user) =>
          !existingConnections.some(
            (connection) => connection.userId === user.id
          )
      );
      setAvailableUsers(newAvailableUsers);
    } catch (err) {
      setError(
        "An error occurred while fetching users. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }, [getAllConnections]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = useCallback(
    async (term: string) => {
      setSearchTerm(term);
      if (term.trim()) {
        try {
          setLoading(true);
          const searchResults = await searchUsers(term);
          const existingConnections = getAllConnections();
          const filteredResults = searchResults.filter(
            (user) =>
              !existingConnections.some(
                (connection) => connection.userId === user.id
              )
          );
          setAvailableUsers(filteredResults);
        } catch (err) {
          setError(
            "An error occurred while searching users. Please try again."
          );
        } finally {
          setLoading(false);
        }
      } else {
        fetchUsers();
      }
    },
    [getAllConnections, fetchUsers]
  );

  const handleAddUser = useCallback(
    async (userId: string) => {
      const userToAdd = availableUsers.find((user) => user.id === userId);
      if (userToAdd) {
        try {
          await addConnection(userToAdd);
          setAvailableUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== userId)
          );
        } catch (err) {
          setError("Failed to add user. Please try again.");
        }
      } else {
        console.error("User not found for ID:", userId);
      }
    },
    [availableUsers, addConnection]
  );

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      {loading ? (
        <p className="text-gray-500 mt-4">Loading users...</p>
      ) : availableUsers.length > 0 ? (
        availableUsers.map((user) => (
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

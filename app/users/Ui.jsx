"use client";

import { useState } from "react";
import { getUser } from "../util/serverAction"; // Ensure this is a Server Action

export default function Ui() {
  const [val, setVal] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!val) return setError("Please enter a user ID");

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const fetchedUser = await getUser(val);
      if (!fetchedUser) {
        setError("User not found");
      } else {
        setUser(fetchedUser);
      }
    } catch (err) {
      setError("Error fetching user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // console.log(typeof user);
  
  return (
    <div>
      <label>
        Search for a specific user:
        <input
          type="text"
          placeholder="Enter userID"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </label>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch user"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h3>User Details</h3>
          <p><strong>ID:</strong> {user._id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

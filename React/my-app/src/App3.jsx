import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    setStatus("loading");
    setUser(null);

    try {
      const res = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();

      setUser(data);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
    }
  }

  function ProfileCard({ user }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", marginTop: "16px" }}>
        <img src={user.avatar_url} alt="avatar" width="100" />
        <h2>{user.name || user.login}</h2>
        <p>{user.bio || "No bio available"}</p>
        <p>Followers: {user.followers}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Profile Finder</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* UI States */}
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && (
        <p style={{ color: "red" }}>User not found 😢</p>
      )}

      {user && <ProfileCard user={user} />}
    </div>
  );
}
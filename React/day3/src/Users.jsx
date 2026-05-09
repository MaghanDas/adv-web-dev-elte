import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

export default function Users() {
  return (
    <div>
      <h1>Users</h1>

      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
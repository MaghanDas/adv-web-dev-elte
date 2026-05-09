import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 28 }
];

export default function UserDetail() {
  const { id } = useParams();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>

      <Link to="/users">Back</Link>
    </div>
  );
}
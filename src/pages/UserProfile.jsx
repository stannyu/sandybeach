import { useParams, Link } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  // Mock user data
  const users = {
    1: { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    2: { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    3: { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
  };

  const user = users[id];

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
          <h2>{user.name}</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <Link to="/">← Back to Home</Link>
        </div>
      ) : (
        <div>
          <p>User not found</p>
          <Link to="/">Go back to Home</Link>
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <h3>View other users:</h3>
        <ul>
          <li><Link to="/user/1">User 1 - Alice</Link></li>
          <li><Link to="/user/2">User 2 - Bob</Link></li>
          <li><Link to="/user/3">User 3 - Charlie</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;

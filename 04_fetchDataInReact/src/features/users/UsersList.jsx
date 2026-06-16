export default function UsersList({ users }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            className="p-3 m-3 bg-amber-200 rounded shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            key={user.id}
          >
            <h2>User Name is: {user.name}</h2>
            <h2>Email is: {user.email}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

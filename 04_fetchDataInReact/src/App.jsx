import UsersList from "./features/users/UsersList";
import { useFetch } from "./hooks/useFetch";
import Loader from "./ui/Loader";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "http://localhost:3000/posts";

export default function App() {
  const { data: users, isLoading, error } = useFetch(USERS_URL);
  const { data: posts } = useFetch(POSTS_URL);

  console.log(posts);

  return (
    <>
      {isLoading && !error && <Loader />}
      {isLoading && error && (
        <p className="text-red-500 text-2xl text-center p-4 font-bold text-shadow-md text-shadow-gray-800">
          Error: {error}
        </p>
      )}
      {isLoading || error || <UsersList users={users} />}
    </>
  );
}

import { useGetUsersQuery } from "./userSlice";

const UsersPage = () => {
  const { data } = useGetUsersQuery();

  return (
    <ul>
      {data &&
        data.map((user) => (
          <li key={user.username}>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
          </li>
        ))}
    </ul>
  );
};

export default UsersPage;

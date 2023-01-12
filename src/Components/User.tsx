import React from "react";
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUsersQuery,
} from "../redux/server/services/userApi";
export const User: React.FC = () => {
  const { data } = useUsersQuery();
  const userAdd = {
    id: 3,
    name: "ikshvaku created",
    email: "iksvhask@gmail.com",
  };
  const userUpdate = {
    id: 3,
    name: "ikshvaku updated",
    email: "iksvhask@gmail.com",
  };
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const onAddClick = async () => {
    await addUser(userAdd);
  };
  const onUpdateClick = async () => {
    await updateUser(userUpdate);
  };
  const onDeleteClick = async () => {
    await deleteUser(3);
  };
  return (
    <>
      <button onClick={onAddClick}> Add Click</button>
      <button onClick={onUpdateClick}> Update Click</button>
      <button onClick={onDeleteClick}> Delete Click</button>
      Get API
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </>
  );
};

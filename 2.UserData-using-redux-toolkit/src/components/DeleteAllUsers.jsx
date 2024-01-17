import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleteUsers } from "../store/actions";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const clearAllUsers = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="flex justify-center">
      <button className="bg-cyan-400 hover:bg-cyan-600 rounded-md px-5 py-2 text-md text-white font-semibold" onClick={clearAllUsers}>
        Delete all users
      </button>
    </div>
  );
};

export default DeleteAllUsers;

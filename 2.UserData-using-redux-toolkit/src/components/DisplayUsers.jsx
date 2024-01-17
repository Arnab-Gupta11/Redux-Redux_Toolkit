import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  };
  return (
    <div>
      {data?.map((user, id) => {
        return (
          <div key={id}>
            <div className="flex items-center justify-between mb-3 border-b pb-3">
              <li className="list-none">{user}</li>
              <button
                className="bg-red-600 text-white rounded-md px-3 py-1 font-bold"
                onClick={() => {
                  deleteUser(user);
                }}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;

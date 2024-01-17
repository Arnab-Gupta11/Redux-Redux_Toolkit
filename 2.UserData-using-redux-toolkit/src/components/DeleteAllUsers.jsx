const DeleteAllUsers = () => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-cyan-400 hover:bg-cyan-600 rounded-md px-5 py-2 text-md text-white font-semibold"
        // onClick={() => {
        //   addNewUser(fakeName());
        // }}
      >
        Delete all users
      </button>
    </div>
  );
};

export default DeleteAllUsers;

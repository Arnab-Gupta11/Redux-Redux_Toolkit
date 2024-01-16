import "./App.css";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <div className=" border rounded-md px-4 pb-4">
        <h1 className="text-3xl text-center font-bold mb-10 border-b py-4">Manage Users</h1>
        <div className="w-[450px] flex justify-between items-center ">
          <h1 className="text-gray-700 font-semibold text-xl">List of all user</h1>
          <button className="bg-cyan-400 hover:bg-cyan-600 rounded-md px-5 py-2 text-md text-white font-semibold">Add new user</button>
        </div>
      </div>
    </div>
  );
}

export default App;

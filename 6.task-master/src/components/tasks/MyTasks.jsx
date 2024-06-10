import { CheckIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserTasks } from "../../redux/features/tasks/tasksSlice";

const MyTasks = () => {
  const dispatch = useDispatch();
  const { tasks, userSpecificTask } = useSelector((state) => state.tasks);
  const { userName } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setUserTasks(userName));
  }, [tasks, dispatch, userName]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask?.map((task) => {
          return (
            <div key={task.id} className="bg-secondary/10 rounded-md p-3 flex justify-between">
              <h1>{task.title}</h1>
              <div className="flex gap-3">
                <button className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;

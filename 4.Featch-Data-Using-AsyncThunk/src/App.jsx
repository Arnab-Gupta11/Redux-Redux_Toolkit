import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchComments } from "./features/comments/commentsSlice";

function App() {
  const { isError, comments, isLoading } = useSelector((state) => state.comments);
  console.log(comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  console.log(comments);
  return (
    <>
      <h1 className="text-red-400">All Comments</h1>
      {isLoading && <h1>Loading.....</h1>}
      {isError && <h1>{isError}</h1>}
      <div className="grid grid-cols-3 gap-9 p-5">
        {comments?.map((comment, id) => (
          <div className="bg-cyan-200 p-5 " key={id}>
            {comment.body}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import { useGlobalContext } from "../context";
import Item from "./item";
import MyForm from "./form";
const Main = () => {
  const {
    state: { todos },
  } = useGlobalContext();
  return (
    <>
      <h1 className="col-12 text-center">Todo's</h1>
      <MyForm />
      {todos.length === 0 && <h2>Nothing for today</h2>}
      {todos.map((todo) => {
        return <Item key={todo.id} item={todo} />;
      })}
    </>
  );
};

export default Main;

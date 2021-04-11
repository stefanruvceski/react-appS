import { useGlobalContext } from "./context";
import Details from "./components/details";
import Loading from "./components/Loading";
import Main from "./components/Main";
function App() {
  const {
    state: { loading, current },
  } = useGlobalContext();
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else if (current !== null) {
    return <Details />;
  } else {
    return (
      <div className="container bck fill">
        <Main />
      </div>
    );
  }
}

export default App;

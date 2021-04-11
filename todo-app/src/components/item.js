import { useGlobalContext } from "../context";
const Item = ({ item }) => {
  const { deleteOne, doneOne, details } = useGlobalContext();
  if (!item.isDone) {
    return (
      <div className="itm card">
        <div className=" card-header ">
          <h5 className="d-inline">{item.name}</h5>
        </div>

        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            onClick={() => doneOne(item.id)}
            className="btn btn-primary mr-2"
          >
            Done
          </button>
          <button
            onClick={() => details(item.id)}
            className="btn btn-primary mr-2"
          >
            Details
          </button>
          <button
            onClick={() => deleteOne(item.id)}
            className="btn btn-danger float-right"
          >
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" itm2 card">
        <div className=" card-header ">
          <h5 className="d-inline">{item.name}</h5>
          <h6 className="d-inline float-right">Done</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            onClick={() => deleteOne(item.id)}
            className="btn btn-danger float-right"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default Item;

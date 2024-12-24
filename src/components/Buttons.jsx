import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterSliceActions, privacySliceActions } from "../store";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleInc = () => dispatch(counterSliceActions.increment());
  const handleDec = () => dispatch(counterSliceActions.decrement());
  const handlePrivacy = () => dispatch(privacySliceActions.privacyVal());

  const handleAdd = () => {
    const value = parseInt(inputElement.current.value);
    if (!isNaN(value)) {
      dispatch(counterSliceActions.add({ num: value }));
      inputElement.current.value = "";
    }
  };

  const handleSub = () => {
    const value = parseInt(inputElement.current.value);
    if (!isNaN(value)) {
      dispatch(counterSliceActions.substract({ num: value }));
      inputElement.current.value = "";
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
          onClick={handleInc}
        >
          +1
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleDec}
          style={{ marginRight: "10px" }}
        >
          -1
        </button>
        <button
          className="btn btn-success"
          onClick={handlePrivacy}
          style={{ marginRight: "10px" }}
        >
          Privacy
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter a Number:"
          style={{ maxWidth: "130px", marginRight: "10px" }}
          ref={inputElement}
        />
        <button
          className="btn btn-danger"
          onClick={handleAdd}
          style={{ marginRight: "10px" }}
        >
          ADD
        </button>
        <button className="btn btn-warning" onClick={handleSub}>
          SUB
        </button>
      </div>
    </div>
  );
};

export default Buttons;

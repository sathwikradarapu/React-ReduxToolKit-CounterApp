import { useSelector } from "react-redux";

const Counter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <div>
      <p className="card-text">Counter is: {counterVal}</p>
    </div>
  );
};

export default Counter;

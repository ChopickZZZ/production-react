import { useDispatch, useSelector } from "react-redux";
import { AppButton } from "shared/ui/AppButton/AppButton";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">value = {counterValue}</h1>
      <AppButton onClick={increment} data-testid="increment-btn">
        increment
      </AppButton>
      <AppButton onClick={decrement} data-testid="decrement-btn">
        decrement
      </AppButton>
    </div>
  );
};

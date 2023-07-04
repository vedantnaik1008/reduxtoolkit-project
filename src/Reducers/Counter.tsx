import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { decrement, increment } from "./counterSlice"


const counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      <div className="flex">
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default counter

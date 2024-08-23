import { useDispatchCalc, useCalc } from "../context/CalcContext";

const Input = ({ name }) => {
    const dispatch = useDispatchCalc();
    const state = useCalc();
    const numChangeHandler = (e) => {
        dispatch({
            type: "change",
            payload: { name: e.target.name, value: parseFloat(e.target.value) || 0 },
        });
    };
    return (
        <div>
            {name}:
            <input
            type="number"
            value={state[name]}
            name={name}
            onChange={numChangeHandler}
            />
        </div>
    );
};

export default Input;

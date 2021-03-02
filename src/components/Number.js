import { useState } from "react";

function Number() {
    const [number, setNumber] = useState(0);
    return (
        <div className="Number">
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increase</button>
        </div>
    );
}
export default Number;
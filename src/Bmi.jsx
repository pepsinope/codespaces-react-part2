import { useRef, useState } from "react"
const BmiText=({bmi})=>{
    if(bmi<18.5)
        return (<h1>UnderWeight</h1>);
    if(bmi>30)
        return (<h1>OverWeight</h1>);
    return(<h1>Normal</h1>)
}

export default function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi, setBmi] = useState(0);

    const calBmi = () => {
        const weight = parseFloat(w_inputRef.current.value);
        const height = parseFloat(h_inputRef.current.value) / 100; // แปลงจากเซนติเมตรเป็นเมตร

        if (weight > 0 && height > 0) {
            setBmi(weight / Math.pow(height, 2));
        } else {
            alert("กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง");
        }
    };

    return (
        <>
            <h3>BMI Calculator</h3>
            Weight: <input type="number" ref={w_inputRef} /> kg.<br />
            Height: <input type="number" ref={h_inputRef} /> cm.<br />
            <button onClick={calBmi}>Calculate</button><br />
            BMI value: {Bmi.toFixed(2)}
            <BmiText bmi={Bmi} />
        </>
    );
}

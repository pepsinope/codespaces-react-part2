import { useEffect } from "react";
import { useState } from "react";
function Item({ name, isPacked = false }) {

    return (
        <li>
            {name} {isPacked && ' ✓'}
        </li>
    );
}
export default function ItemList() {
    const [keyword, setKeyword] = useState("");
    useEffect(()=>{
        console.log("this component is loaded!!");

        return ()=>{
            alert("component unloaded");
        }
    },[])
    const items = [{ name: "Sunglass", isPacked: false },
    { name: "Sunblock", isPacked: true },
    { name: "Swimming suit", isPacked: true },
    { name: "Towel", isPacked: true },
    { name: "PowerBank", isPacked: false }
    ];

    // const filterList = items.filter(items => items.name.includes(keyword))
    const filterList = items.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemslist = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
    return (<>
        <input
            type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <ui>
            {itemslist}
        </ui>
    </>)
}
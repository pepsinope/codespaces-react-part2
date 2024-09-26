function Item({ name, isPacked = false }) {
    return (
        <li>
            {name} {isPacked && '✓'}
        </li>
    );
}

export default function ItemList() {
    const items = [
        { name: "Sunglass", isPacked: false },
        { name: "Swimming suit", isPacked: true },
        { name: "Sunblock", isPacked: true },
        { name: "Sunblock", isPacked: true },
    ];

    const filterList = items.filter(i => i.name.includes(keyword));
    const itemlist=filterList.map(i=><Item key={i.name}
        name={i.name} isPacked={i.isPacked}/>);
    return (<>
    </>)
    
    const itemList = filterList.map(i => (
        <Item key={i.name} name={i.name} isPacked={i.isPacked} />
    ));
    
    return (
        <ul>
            {itemList}
        </ul>
    );
}
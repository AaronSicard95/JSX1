function App(props){
    return <ul>
        {props.people.map(p=><li key={p.name}><Person name={p.name} age={p.age} hobbies={p.hobbies}/></li>)}
    </ul>
}
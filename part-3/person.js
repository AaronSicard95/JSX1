function Person(props){
    let name = props.name.length>8? `${props.name.slice(0,7)}...`: props.name;
    let vote = props.age>=18?"please go vote!":"you msut be 18"
    return<div>
    <p>
        Learn some information about this person<br/>
        Name: {name}<br/>
        Age: {props.age}<br/>
        {vote}<br/>
        Their hobbies are:
        </p>
        <ul>
            {props.hobbies.map(h=><li key={h}>{h}</li>)}
        </ul>
        </div> 
}
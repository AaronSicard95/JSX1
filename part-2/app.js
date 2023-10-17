function App(props){
    return <div>
        <ul>
        {props.tweets.map(t => <li key={t.user}><Tweet message={t.message} user={t.user} color={t.color}/></li>)}
        </ul>
    </div>
}
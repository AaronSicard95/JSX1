function Tweet(props){
    const styles = {color: props.color};
    return <p style={styles}>
        {props.message}<br/>
        from: {props.user}
    </p>
}
const ts=[
    {message: " I like to tweet", user: "tweeterguy", color: "blue"},
    {message: " I like to tweet a lot", user: "supertweeterguy", color: "green"},
    {message: " I like to tweet a little", user: "littletweeterguy", color: "red"}]

ReactDOM.render(<App tweets={ts}/>,document.getElementById("root"));
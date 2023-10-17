const people = [
    {name: "Timmy", age: 16, hobbies: ["swimming", "writing"]},
    {name: "Sam", age: 64, hobbies: ["reading", "eating", "people watching"]},
    {name: "Codicifer", age: 19, hobbies: ["swimming", "music"]},
]

ReactDOM.render(<App people={people}/>, document.getElementById("root"));
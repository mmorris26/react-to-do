/*
function person(props) {
  console.log(`${props.firstName} is ${props.age}`);

  function great(name) {}

  great(props.firstName)
}



person({ firstName: 'Usman', age: 9000 });
// => Usman is 9000




<Person firstName={"Usman"} age={9000} />

Person({ firstName: 'Usman', age: 9000 })

function(props) {}
*/

function handleRaise(name, amount) {
  // Gives that person a raise!
}

<Person
  name={{first: 'Usman', last:' Bashir'}}
  age={9000}
  handleRaise={handleRaise}
/>

export default function Person({name, age, handleRaise}) {
  return (
    <>
      <p>First: {name.first}</p>
      <p>Last: {name.last}</p>
      <p>Age: {age}</p>
      <button onClick={() => handleRaise(name, 5000)}>Give Raise!</button>
    </>
  )
}
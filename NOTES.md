# React State

Example:

1. React calls the function passing to it props as an argument.
2. The function runs and ultimately returns its UI (the JSX).
3. React uses the object returned by the JSX to render the UI.

Function Example:

```js
function fullName(first, last) {
  let name = `${first} ${last}`;

  return name;
}

fullName('Usman', 'Bashir'); // => Usman Bashir
```


## Hooks

### State Hook

- Hooks are a way to add reusable stateful behavior to Function Components, not class-based components.

- Hooks themselves are functions and must be named beginning with the word use, e.g., `useState`.

#### Updating State using `useState` Setter Function

```js
export default function App() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  
  // 1 represents player1
  // 2 represents player2
  const [turn, setTurn] = useState(1);

  const winner = getWinner(board);
}
```


```js
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? <HomePage /> : <LoginPage />}
    </div>
  );
}
```

### Don't Mutate State, Replace

```js
function handleAddTodo(todo) {
  // Create a new array that includes the new todo
  const newTodos = [...todos, todo];

  // Update state and re-render
  setTodos(newTodos);
}
```

### Types of State

1. Data-related state
2. UI-related state
3. Computed state


```js
export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
}


export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    pwConfirm: '',
  });
}
```
import { useEffect, useState } from 'react';
import './App.css';
import User from './User';
import Game from './Game';

const API = 'localhost:3000';

function App() {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => fetch(`${API}/users`).then((res) => res.json()))
    .then((json) => setUsers(json))
    .catch((err) => console.error(err));

  useEffect(() => fetch(`${API}/games`).then((res) => res.json()))
    .then((json) => setGames(json))
    .catch((err) => console.error(err));

  return (
    <div className="container">
      <h1>Here's a list of Users:</h1>
      <ul>
        {users.map((user) => (
          <User user={user} />
        ))}
      </ul>
      <h1>Here's a list of Games:</h1>
      <ul>
        {games.map((game) => (
          <Game game={game} />
        ))}
      </ul>
    </div>
  );
}

export default App;

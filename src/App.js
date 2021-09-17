import { useEffect, useState } from "react";
import "./App.css";
import User from "./User";
import Game from "./Game";

const API = "http://localhost:9292";

function App() {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() =>
    fetch(`${API}/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.error(err), ),[]
  );

  useEffect(() =>
    fetch(`${API}/games`)
      .then((res) => res.json())
      .then((json) => setGames(json))
      .catch((err) => console.error(err), ), []
  );

  return (
    <div className="container">
      <h1>Here's a list of the best Developers:</h1>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
      <h1>Here's a list of their favorite Games:</h1>
      <ul>
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

const app = new function(){
  this.el=document.getElementById('games');
  this.games=[]

  this.FetchAll = function(){
    const data='';
  };

  this.Add = function(){

  };

  this.Edit =function(item){

  };

  this.Delete = function(item){

  };

  this.Count = function(data){

  };

}

app.FetchAll();

function CloseInput(){
  document.getElementById('edit-box').style.display = 'none'
}



export default App;

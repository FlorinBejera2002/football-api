import express from 'express';
import { IFootballPlayer, players } from './db';
import cors from 'cors';

const app = express()// Read players based on team and position

const port = 3000

app.use(express.json())
app.use(cors());

// Read all players
app.get('/players', (req: any, res: any) => {
  const team = req.query.team;
  const position = req.query.position;

  let filteredPlayers = players;

  if (team) {
    filteredPlayers = filteredPlayers.filter((player: IFootballPlayer) => player.team === team);
  }

  if (position) {
    filteredPlayers = filteredPlayers.filter((player: IFootballPlayer) => player.position === position);
  }

  if (filteredPlayers.length > 0) {
    res.json(filteredPlayers);
  } else {
    res.status(404).json({ message: 'No players found' });
  }
});

// Read a specific player
app.get('/players/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const player = players.find((player: IFootballPlayer) => player.id === id);

  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
});

// Create a new player
app.post('/players', (req: any, res: any) => {
  const newPlayer: IFootballPlayer = req.body

  // Validate newPlayer
  if (!newPlayer.name || !newPlayer.team || !newPlayer.age || !newPlayer.position) {
    return res.status(400).json({ message: 'Invalid player data' })
  }

  // Get the highest ID from the players array
  const highestId = players.reduce((maxId, player) => Math.max(maxId, player.id), 0);

  // Assign the new player an ID that is one higher than the highest ID
  newPlayer.id = highestId + 1;

  players.push(newPlayer)
  res.status(201).json(newPlayer)
})

// Update a player
app.put('/players/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id)
  const updatedPlayer: IFootballPlayer = req.body

  const index = players.findIndex((item: IFootballPlayer) => item.id === id)
  if (index !== -1) {
    players[index] = updatedPlayer
    res.json(updatedPlayer)
  } else {
    res.status(404).json({ message: 'Player not found' })
  }
})

// Delete a player
app.delete('/players/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id)

  const index = players.findIndex((item: IFootballPlayer) => item.id === id)
  if (index !== -1) {
    const deletedPlayer = players.splice(index, 1)
    res.json(deletedPlayer)
  } else {
    res.status(404).json({ message: 'Player not found' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
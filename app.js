import express from "express";
import cors from "cors";

import {
  getTeams,
  getTeam,
  createTeam,
  getPlayers,
  getPlayer,
  createPlayer,
  getGames,
} from "./database.js";

const app = express();
app.use(cors());

app.get("/players", async (req, res) => {
  const players = await getPlayers();
  res.send(players);
});

app.get("/teams", async (req, res) => {
  const teams = await getTeams();
  res.send(teams);
});

app.get("/games", async (req, res) => {
  const games = await getGames();
  res.send(games);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080!");
});

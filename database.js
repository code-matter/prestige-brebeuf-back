import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

// TEAMS
export const getTeams = async () => {
  const [rows] = await pool.query("SELECT * FROM teams");
  return rows;
};

export const getTeam = async (id) => {
  const [rows] = await pool.query("SELECT * FROM teams WHERE id = ?", [id]);
  return rows[0];
};

export const createTeam = async (name) => {
  const [result] = await pool.query(`INSERT INTO teams (name) VALUES (?)`, [
    name,
  ]);
  return getTeam(result.insertId);
};

// PLAYERS
export const getPlayers = async () => {
  const [rows] = await pool.query("SELECT * FROM players");
  return rows;
};

export const getPlayer = async (id) => {
  const [rows] = await pool.query("SELECT * FROM players WHERE id = ?", [id]);
  return rows[0];
};

export const createPlayer = async (number, first_name, last_name, age, sex) => {
  const [result] = await pool.query(
    `INSERT INTO players (number, first_name, last_name, age, sex) VALUES (?)`,
    [number, first_name, last_name, age, sex]
  );
  return getPlayer(result.insertId);
};

// GAMES
export const getGames = async () => {
  const [rows] = await pool.query("SELECT * FROM games");
  return rows;
};

export const getGame = async (id) => {
  const [rows] = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
  return rows[0];
};

export const createGame = async (
  game_date,
  local_team,
  local_score,
  local_room,
  visitor_team,
  visitor_score,
  visitor_room,
  periods
) => {
  const [result] = await pool.query(
    `INSERT INTO games (game_date,local_team,local_score,local_room,visitor_team,visitor_score,visitor_room,periods) VALUES (?,?,?,?,?,?,?,?)`,
    [
      game_date,
      local_team,
      local_score,
      local_room,
      visitor_team,
      visitor_score,
      visitor_room,
      periods,
    ]
  );
  return getGame(result.insertId);
};

// USERS
export const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};

export const getUser = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

export const createUser = async (name) => {
  const [result] = await pool.query(
    `INSERT INTO users (first_name, last_name, email, encrypted_password, role) VALUES (?,?,?,?,?)`,
    [first_name, last_name, email, encrypted_password, role]
  );
  return getTeam(result.insertId);
};

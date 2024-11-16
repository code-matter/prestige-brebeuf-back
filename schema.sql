CREATE DATABASE prestige_brebeuf;
USE prestige_brebeuf;
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS teams cascade;
DROP TABLE IF EXISTS players cascade;
DROP TABLE IF EXISTS games cascade;
SET foreign_key_checks = 1;

CREATE TABLE teams (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name varchar(40) NULL,
    created_at TIMESTAMP default NOW() NOT NULL,
    updated_at TIMESTAMP default NOW() NOT NULL
);

CREATE TABLE players (
    id integer PRIMARY KEY AUTO_INCREMENT,
    number integer(3) NULL,
    first_name varchar(40) NULL,
    last_name varchar(40) NULL,
    age integer(3) NULL,
    sex char(1) NULL,
    team_id integer NULL,
    is_external BOOLEAN default false,
    grade char(1) NULL,
    created_at TIMESTAMP default NOW() NOT NULL,
    updated_at TIMESTAMP default NOW() NOT NULL,

    constraint FK_TEAM_ID foreign key (team_id)
    references teams(id)
);

CREATE TABLE games (
    id integer PRIMARY KEY AUTO_INCREMENT,
    game_date TIMESTAMP NULL,
    local_team integer NULL,
    local_score integer(2) default 0 NULL,
    local_room integer(1) NULL,
    visitor_team integer NULL,
    visitor_score integer(2) default 0 NULL,
    visitor_room integer(1) NULL,
    periods integer(2) NULL,
    created_at TIMESTAMP default NOW() NOT NULL,
    updated_at TIMESTAMP default NOW() NOT NULL,

    constraint FK_LOCAL_TEAM_ID foreign key (local_team)
    references teams(id),
    constraint FK_VISITOR_TEAM_ID foreign key (visitor_team)
    references teams(id)
);

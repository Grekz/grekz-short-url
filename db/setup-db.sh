#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER grekz;
  CREATE DATABASE short_urls_db;
	GRANT ALL PRIVILEGES ON DATABASE short_urls_db TO grekz;
	CREATE EXTENSION IF NOT EXISTS "pgcrypto";
EOSQL
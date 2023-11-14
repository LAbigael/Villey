#!/bin/bash

# Variables
MYSQL_CONTAINER_NAME="juspoliticum_old"
MYSQL_USERNAME="root"
MYSQL_PASSWORD="password"
MYSQL_DATABASE="droitphilosophie_new"
SQL_SCRIPT_PATH="new_db_schema_dp.sql"


# Disable foreign key checks
docker exec -i $MYSQL_CONTAINER_NAME mysql -u$MYSQL_USERNAME -p$MYSQL_PASSWORD $MYSQL_DATABASE -e "SET foreign_key_checks = 0;"

# Drop all tables
docker exec -i $MYSQL_CONTAINER_NAME bash -c "mysql -u$MYSQL_USERNAME -p$MYSQL_PASSWORD $MYSQL_DATABASE -e 'SHOW TABLES' | grep -v \"Tables_in\" | xargs -I {} mysql -u$MYSQL_USERNAME -p$MYSQL_PASSWORD $MYSQL_DATABASE -e 'DROP TABLE {}'"

# Enable foreign key checks
docker exec -i $MYSQL_CONTAINER_NAME mysql -u$MYSQL_USERNAME -p$MYSQL_PASSWORD $MYSQL_DATABASE -e "SET foreign_key_checks = 1;"

# Import SQL script
docker exec -i $MYSQL_CONTAINER_NAME mysql -u$MYSQL_USERNAME -p$MYSQL_PASSWORD $MYSQL_DATABASE < $SQL_SCRIPT_PATH


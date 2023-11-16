#!/bin/bash

# Get the current timestamp
timestamp=$(date +"%Y%m%d%H%M%S")

# Get the identifier (replace 'A' with your desired identifier)
identifier="A"

# Prompt user for migration name
read -p "Enter migration name: " migration_name

# Replace spaces with hyphens in the migration name
migration_name="${migration_name// /-}"

# Create the migration file
migration_file="directus/extensions/migrations/${timestamp}${identifier}-${migration_name}.js"
touch "$migration_file"

# Open the migration file in a text editor
# Replace 'nano' with your preferred text editor (e.g., 'vim' or 'code')
vim "$migration_file"


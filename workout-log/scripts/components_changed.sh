#!/bin/bash

# Use three-dot syntax to compare PR branch to main's latest fetched state
CHANGED_FILES=$(git diff --name-only origin/main...HEAD)

COMPONENTS=()
SERVICES=()
OTHERS=()

for file in $CHANGED_FILES; do
  if [[ $file == *.component.ts ]]; then
    COMPONENTS+=("$(basename "$file")")
  elif [[ $file == *.service.ts ]]; then
    SERVICES+=("$(basename "$file")")
  else
    OTHERS+=("$(basename "$file")")
  fi
done

echo "components_changed=$(IFS=, ; echo "${COMPONENTS[*]}")" >> $GITHUB_OUTPUT
echo "services_changed=$(IFS=, ; echo "${SERVICES[*]}")" >> $GITHUB_OUTPUT
echo "others_changed=$(IFS=, ; echo "${OTHERS[*]}")" >> $GITHUB_OUTPUT

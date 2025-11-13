#!/bin/bash

# Setup script for configuring Git commit message template

echo "Setting up Git commit message template..."

# Configure Git to use .gitmessage as the commit template
git config --local commit.template .gitmessage

if [ $? -eq 0 ]; then
    echo "✓ Git commit message template configured successfully!"
    echo "  The .gitmessage file will now be used as the default commit message template."
else
    echo "✗ Failed to configure Git commit message template."
    exit 1
fi

#!/bin/bash
# health-check.sh
# Simple health check script for the server

echo "Checking server health..."

# Check if the server is running
if curl -s http://localhost:5000/health | grep -q "OK"; then
  echo "✅ Server is healthy"
else
  echo "❌ Server is not responding"
  exit 1
fi

# Check if the questions endpoint is accessible
if curl -s http://localhost:5000/api/questions | jq -e . >/dev/null 2>&1; then
  echo "✅ API is accessible"
else
  echo "❌ API is not accessible"
fi

echo "Health check completed."
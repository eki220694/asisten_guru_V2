#!/bin/bash
# deploy-initial.sh
# Script to help with initial deployment setup

echo "🚀 Asisten Guru V2 - Initial Deployment Setup"
echo "============================================="

echo ""
echo "📋 Prerequisites:"
echo "1. GitHub account"
echo "2. Netlify account"
echo "3. Railway account"
echo "4. OpenAI API key (optional, for AI features)"

echo ""
echo "🔧 Step 1: Push to GitHub"
echo "Make sure your code is pushed to a GitHub repository:"
echo "git add ."
echo "git commit -m \"Initial commit\""
echo "git push origin main"

echo ""
echo "🔧 Step 2: Set up Netlify"
echo "1. Visit https://netlify.com"
echo "2. Click 'New site from Git'"
echo "3. Connect your GitHub repository"
echo "4. Configure build settings:"
echo "   - Base directory: client/"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist/"

echo ""
echo "🔧 Step 3: Set up Railway"
echo "1. Visit https://railway.app"
echo "2. Click 'New Project'"
echo "3. Select 'Deploy from GitHub repo'"
echo "4. Choose your repository"
echo "5. Configure service:"
echo "   - Root directory: server/"
echo "   - Build command: npm install"
echo "   - Start command: npm start"

echo ""
echo "🔧 Step 4: Configure Environment Variables"
echo "In GitHub repository settings, add these secrets:"
echo "NETLIFY_AUTH_TOKEN: [Your Netlify auth token]"
echo "NETLIFY_SITE_ID: [Your Netlify site ID]"
echo "RAILWAY_TOKEN: [Your Railway token]"
echo "RAILWAY_PROJECT_ID: [Your Railway project ID]"

echo ""
echo "🔧 Step 5: Trigger Deployment"
echo "Push a small change to main branch to trigger GitHub Actions:"
echo "git commit --allow-empty -m \"Trigger deployment\""
echo "git push origin main"

echo ""
echo "✅ Once deployed, your application will be available at:"
echo "Frontend: https://your-site-name.netlify.app"
echo "Backend: https://your-service-name.up.railway.app"

echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
# Deployment Checklist

## Pre-deployment
- [ ] Update version numbers in package.json files
- [ ] Run all tests locally
- [ ] Check that all environment variables are properly configured
- [ ] Verify database migrations are up to date
- [ ] Test the build process locally
- [ ] Check that all secrets are properly configured in GitHub

## GitHub Repository
- [ ] Ensure repository is public (for free tier deployments)
- [ ] Verify GitHub Actions workflows are in place
- [ ] Check that branch protection rules are set up
- [ ] Verify that all collaborators have appropriate access

## Netlify Deployment
- [ ] Create Netlify account
- [ ] Connect GitHub repository to Netlify
- [ ] Configure build settings:
  - Base directory: `client/`
  - Build command: `npm run build`
  - Publish directory: `dist/`
- [ ] Add environment variables if needed
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate (automatic for Netlify)

## Vercel Deployment
- [ ] Create Vercel account
- [ ] Connect GitHub repository to Vercel
- [ ] Configure service settings:
  - Root directory: `server/`
  - Build command: `npm install`
  - Start command: `npm start`
- [ ] Add environment variables:
  - `OPENAI_API_KEY` (if using AI features)
  - `DATABASE_URL` (should be auto-configured)
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate (automatic for Vercel)

## Post-deployment
- [ ] Test the deployed application
- [ ] Verify all API endpoints are working
- [ ] Test the AI features (if enabled)
- [ ] Check that the database is properly connected
- [ ] Verify that all redirects are working correctly
- [ ] Test the application on different devices/browsers
- [ ] Monitor logs for any errors

## Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Configure alerts for critical issues

## Documentation
- [ ] Update README.md with deployment URLs
- [ ] Document any deployment-specific configurations
- [ ] Provide instructions for updating the application
- [ ] Document troubleshooting steps
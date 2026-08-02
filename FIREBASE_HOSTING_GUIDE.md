# Firebase Web Hosting Guide

This guide walks you through deploying your React portfolio to Firebase Hosting.

## Prerequisites
- Node.js installed
- Firebase account (free tier works)
- Git (optional, for version control)

## Step 1: Install Firebase CLI

Install Firebase CLI globally on your machine:

```bash
npm install -g firebase-tools
```

Verify installation:

```bash
firebase --version
```

## Step 2: Login to Firebase

Authenticate with your Firebase account:

```bash
firebase login
```

This will open a browser window where you can sign in to your Google account and grant Firebase CLI permissions.

## Step 3: Initialize Firebase Project

Navigate to your project directory:

```bash
cd /home/kali/001/portfolio
```

Initialize Firebase:

```bash
firebase init
```

You'll be prompted with the following options:

1. **Which Firebase features do you want to set up?**
   - Select: `Hosting: Configure files for Firebase Hosting`
   - Press Space to select, Enter to confirm

2. **Select a default Firebase project**
   - Choose an existing project or create a new one
   - If creating new: Follow the prompts in the Firebase Console

3. **What do you want to use as your public directory?**
   - Enter: `dist`
   - (This is where Vite outputs the production build)

4. **Configure as a single-page app?**
   - Select: `Yes`
   - (This ensures all routes work with React Router)

5. **Set up automatic builds with GitHub?**
   - Select: `No` (for now, can enable later)

This will create:
- `firebase.json` - Firebase configuration
- `.firebaserc` - Firebase project aliases
- `public/` directory (you can delete this, we'll use `dist/`)

## Step 4: Update firebase.json

Edit `firebase.json` to configure the public directory and rewrite rules:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

The `rewrites` section ensures React Router works by redirecting all routes to `index.html`.

## Step 5: Build the React App

Build your React app for production:

```bash
npm run build
```

This creates the `dist/` folder with optimized production files.

## Step 6: Deploy to Firebase Hosting

Deploy your app:

```bash
firebase deploy
```

You'll be prompted to confirm the deployment. Type `yes` and press Enter.

Firebase will upload your files and provide:
- Hosting URL: `https://your-project-id.web.app`
- Dashboard URL: Firebase Console

## Step 7: Verify Deployment

Visit your hosting URL to verify the deployment is successful.

## Additional Commands

### Preview locally before deploying:

```bash
firebase serve
```

This runs a local server simulating Firebase Hosting.

### Deploy only hosting (if you have other Firebase services):

```bash
firebase deploy --only hosting
```

### View deployment history:

```bash
firebase hosting:sites:list
```

## Custom Domain (Optional)

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Firebase will provide SSL certificates automatically

## Continuous Deployment (Optional)

### Using GitHub Actions

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

Set up Firebase token:
```bash
firebase login:ci
```
Add the token as `FIREBASE_TOKEN` in GitHub repository secrets.

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check for build errors: `npm run build`

### Routing doesn't work
- Verify `rewrites` section in `firebase.json`
- Ensure single-page app was configured during init

### Deployment fails
- Check you're logged in: `firebase login`
- Verify project exists in Firebase Console
- Check `firebase.json` syntax

### Custom domain issues
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 24 hours)
- Check Firebase Console for SSL certificate status

## Cost

Firebase Hosting free tier includes:
- 10 GB/month hosting
- 10 GB/month bandwidth
- No cost for typical portfolio sites

## Security Considerations

- Don't commit `.firebaserc` if it contains sensitive project IDs
- Use environment variables for API keys
- Enable Firebase Security Rules if needed
- Consider enabling Firebase Analytics

## Performance Tips

- Enable Firebase Hosting caching
- Use Firebase CDN automatically included
- Optimize images before deployment
- Enable gzip compression (automatic on Firebase)

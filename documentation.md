
## Project Title: Satprayas Nepal 

### Description:
Satprayas Nepal is a website that is built for the multicuisine restaurant property of Canada. This project is built using `React.js` `Tailwind.css` `mySQLi` and `PHP`. 

### Team Members:
- Team Lead: `Sunita Shakya`
- UI/UX Designer: [`Purna Shrestha`](https://www.purnashrestha.com.np/)
- Frontend Developer: [`Purna Shrestha`](https://www.purnashrestha.com.np/)
- Backend Developer: `Swarna Shakya`

### Fronted Documentation:

#### 1. For Deployment on Cloudflare: 


#### 2. For Deployment on Longtail cpanel server: 

```jsx
pnpm run build
```
and then upload the build folder to the server on the root directory.

`NOTE:` Add these files for no production error: 

- Create a `.htaccess` file in the root directory of the project and add the following code: 
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
This code will redirect all the requests to the index.html file which prevents the 404 error after user navigates to the different pages and refreshes the page.

#### [Optional]: Only if the folder has /folder-name in the URL then add the following code: 

`.htaccess`
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /folder-name/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /folder-name/index.html [L]
</IfModule>
```

`vite.config.js`
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/folder-name/',
})
```

`App.tsx`
```jsx
import { BrowserRouter as Router } from 'react-router-dom';

<Router basename="/folder-name">
  <App />
</Router>
```
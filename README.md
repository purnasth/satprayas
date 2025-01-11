# Satprayas Nepal

Satprayas Nepal is a service oriented non-profit organization working for the improvement and well-being of physically and mentally challenged children.

---

## 🚀 Features

- **Modern UI Design**:
- **Donate Us**:

---

## 🛠️ Technologies Used

- **React**: Frontend library
- **Vite**: Fast build tool
- **TypeScript**: For static typing
- **TailwindCSS**: Utility-first CSS framework
- **Yup**: Validation schema
- **React Hook Form**: For form management
- **react-toastify**: For user notifications
- **react-google-recaptcha**: For bot protection

---

## 📁 Project Structure

### **src/**

| Folder            | Description                                      |
|--------------------|--------------------------------------------------|
| `components/`     | Contains reusable React components               |
| `hooks/`          | Custom React hooks                               |
| `pages/`          | Page-level components                            |
| `styles/`         | Global CSS and TailwindCSS configurations         |
| `utils/`          | Utility functions and API calls                  |
| `types/`          | TypeScript type definitions                      |

---

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone 
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Create an `.env` file: 
    ```bash
    VITE_API_URL=https://api.com # Your API URL
    VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI # Your reCAPTCHA site key
    ```
4. Start the development server:
    ```bash
    pnpm run dev
    ```

---

## API Endpoints and Usage

1. `/about` (api_about_content.php)
   - **Files**: `AboutPage.jsx`, `About.jsx`
   - **Usage**: Fetches content for the About page from home and about page.
   - **Details**:
     - Articles ID: [18, 21, 22]
     - Homepage article ID: 11

2. `/article` (api_article.php)
   - **Files**: `ArticlePage.jsx`
   - **Usage**: Fetches content for individual articles based on the slug, including HTML content, title, meta description, and meta keywords.
   - **Details**: All active articles

3. `/delivery-partners` (api_delivery_partners.php)
   - **Files**: `DeliveryPartners.jsx`
   - **Usage**: Fetches information about delivery partners, including partner names and logos.
   - **Details**: OTA

4. `/facilities` (api_facilities.php)
   - **Files**: `FacilityList.jsx`
   - **Usage**: Fetches a list of facilities available at the restaurant.
   - **Details**: Features with parent ID: 47

5. `/gallery` (api_gallery.php)
   - **Files**: `FoodGallery.jsx`
   - **Usage**: Fetches images and title for the gallery.
   - **Details**: All gallery images

6. `/home-facilities` (api_home_facilities.php)
   - **Files**: `Facility.jsx`
   - **Usage**: Fetches home facilities data, including heading, description, facilities, and images.
   - **Details**:
     - Article ID: 19
     - Services

7. `/location` (api_location.php)
   - **Files**: `ContactInfo.jsx`
   - **Usage**: Fetches contact information, including phone numbers and email addresses.
   - **Details**: Address, phone, email, social medias

8. `/menu` (api_menu.php)
   - **Files**: `Footer.jsx`, `Navbar.jsx`, `UniversalFooter.jsx`
   - **Usage**: Fetches menu links for the footer.
   - **Details**: Main menu only

9. `/menu-page` (api_menu_page.php)
   - **Files**: `Menu.jsx`
   - **Usage**: Fetches content for the menu page, including title, description, and PDF link for the menu.
   - **Details**: Subpackage ID: 51

10. `/offers` (api_offers.php)
    - **Files**: `Offers.jsx`, `PromotionsPage.jsx`
    - **Usage**: Fetches current offers and promotions, including offer titles, descriptions, and images.
    - **Details**: Get all valid offers

11. `/site-regulars` (api_siteregulars.php)
    - **Files**: `Footer.jsx`, `Booking.jsx`, `Logo.jsx`, `OrCallUs.jsx`, `Reservation.jsx`, `ReservationWhatsApp.jsx`, `WhatsApp.jsx`, `UniversalFooter.jsx`, `ContactPage.jsx`, `GalleryPage.jsx`, `RestaurantTime.jsx`
    - **Usage**: Fetches site regulars information like booking_code, breif, canonicalUrl, contact_info, contact_meta_title, contact_upload, email_address, fiscal_address, gallery_meta_title, gallery_upload, hotel_page, location_map, logo_upload, meta_description, meta_keywords, meta_title, qeqweqwe_upload, sitename, sitetitle, whatsapp_a.
    - **Details**: All of site regulars

12. `/slideshow` (api_slideshow.php)
    - **Files**: `Hero.jsx`
    - **Usage**: Fetches slideshow data for the hero section, including images and captions.
    - **Details**: Gets image slideshows

13. `/testimonials` (api_testimonial.php)
    - **Files**: `TestimonialSlider.jsx`
    - **Usage**: Fetches testimonials, including customer names, reviews, and ratings.
    - **Details**: Get all active testimonials

14. `/food-menu` (api_food_menus.php)
    - **Files**: `OurMenu.jsx`
    - **Usage**: Fetches food menu data, including menu items, categories, and lists.
    - **Details**: Get all food menu items

15. `/nearby` (api_nearby.php)
    - **Files**: `Nearby.jsx`
    - **Usage**: Fetches nearby locations or attractions.

16. `/enquiry-form` (enquery_mail_react.php)
    - **Files**: `EnquiryForm.jsx`
    - **Usage**: Fetches enquiry form data, including form fields and validation rules.
    - **Details**: Get all enquiry form fields

17. `/offers-form` (offersEnquery_mail_react.php)
    - **Files**: `OffersForm.jsx`
    - **Usage**: Fetches offers form data, including form fields and validation rules.
    - **Details**: Get all offers form fields

18. `/popup` (api_popup.php)
    - **Files**: `Popup.jsx`
    - **Usage**: Fetches popup data, including popup images and videos and links.
    - **Details**: Get all active popups
    
---


## 📂 File Structure

``` plaintext
📂 satprayas-nepal
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 constants
│   │   └── data.ts
|   ├── 📂 layouts
│   │   └── [Layout Components]
│   ├── 📂 hooks
│   │   └── useCustomHook.tsx
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── 📂 utils
│   │   ├── api.tsx
│   ├── App.tsx
│   ├── global.d.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslintrc.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Available Scripts
- `dev`: vite
- `build`: vite build
- `preview`: vite preview

---

## 📝 Frontend Documentation

### 1. For Deployment on Cloudflare:
``` plaintext
1. Go to the Cloudflare dashboard.
2. Select the website you want to deploy.
3. Go to the `Workers & Pages` tab.
4. Connect your GitHub repository.
5. Select the branch you want to deploy.
6. Click on the `Deploy` button.
    - use the following command: `pnpm run build`
    - use the following directory: `dist`
```

### 2. For Deployment on Longtail cpanel server:

```bash
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
`NOTE:` This code will redirect all the requests to the index.html file which prevents the 404 error after user navigates to the different pages and refreshes the page.

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

---

## Team Members

- **[Purna Shrestha](https://www.purnashrestha.com.np)** - _Frontend Developer_ - _UI/UX Designer_
- **[Swarna Shakya](https://www.swarnashakya.com.np)** - _Backend Developer_
- **[Sunita Shakya](#)** - _Team Lead_

---

## License

All designs, code, and assets used in this project are the property of `Longtail e-Media` and `Satprayas Nepal`. Unauthorized use, reproduction, or distribution of any designs, code, or assets without the express written permission of the owners is strictly prohibited and is subject to legal action.
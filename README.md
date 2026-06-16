# 🛍️ E-Commerce Storefront

A Next.js customer-facing storefront for a full-stack eCommerce 
platform. Features Algolia InstantSearch with hierarchical category 
filtering, cart management with Zustand, and a clean shopping 
experience built with Shadcn/ui and Tailwind CSS.

🔗 **Live Demo:** [shop-frontend-six.vercel.app](https://shop-frontend-six.vercel.app)

🔗 **Related Repositories**
- [REST API Backend (Laravel)](https://github.com/kaiser-hamid/shop_api)
- [Admin Panel (Next.js)](https://github.com/kaiser-hamid/shop_admin)

---

## ✨ Features

- Algolia InstantSearch with hierarchical category filtering 
  (3-level drill-down)
- Advanced faceted filtering by brand, price range, and rating
- Product listing and detail pages
- Add to cart with persistent state via Zustand
- Order placement flow
- Responsive design with Tailwind CSS and Shadcn/ui components
- Next.js App Router with optimized page structure

---

## 🛠️ Tech Stack

**Framework:** Next.js 14+ (App Router)  
**Language:** JavaScript  
**Search:** Algolia InstantSearch  
**State Management:** Zustand  
**UI Components:** Shadcn/ui  
**Styling:** Tailwind CSS  

---

## 🚀 Getting Started

### Requirements
- Node.js 18+
- Algolia account
- Running instance of [shop_api](https://github.com/kaiser-hamid/shop_api)

### Installation

```bash
git clone https://github.com/kaiser-hamid/shop_frontend.git
cd shop_frontend
npm install
cp .env.example .env.local
npm run dev
```

### Environment Variables

NEXT_PUBLIC_API_URL=http://localhost:8000/api

NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id

NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_search_only_api_key

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## 📁 Project Structure

app/                  # Next.js App Router pages

components/           # Reusable UI components

├── search/           # Algolia InstantSearch components

├── cart/             # Cart components

└── ui/               # Shadcn/ui base components

store/                # Zustand state management

lib/                  # Utilities and API helpers

---

## 🔮 Planned Improvements

- Authentication and user accounts
- Checkout and payment integration (Stripe)
- Order history and tracking
- Product reviews and ratings
- TypeScript migration


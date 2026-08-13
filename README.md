# Billoxi

Public website for [Billoxi](https://www.xloxi.com), the Shopify invoices and receipts app by XLOXI.

- App: [apps.shopify.com/billoxi](https://apps.shopify.com/billoxi)
- Email: billoxi@xloxi.com
- Web: [www.xloxi.com](https://www.xloxi.com)

Branded invoices, packing slips, credit notes, drafts, and returns from every Shopify order.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Vercel env

Import `.env.production` in Vercel:

1. Project → Settings → Environment Variables → **Import**
2. Select `.env.production`
3. Apply to Production, Preview, Development
4. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to your real `*.vercel.app` or custom domain and redeploy

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical / sitemap / Open Graph URL |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | Bing Webmaster |

`.env.local` and `.env.production` are gitignored. `.env.example` is the committed template.

## Stack

Next.js, TypeScript, Tailwind CSS.

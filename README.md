# M Transactions

A modern trading platform dashboard built with TanStack Start, React, and Tailwind CSS.

## Features

- **Password-protected access** — Secure login gate before entering the platform
- **Summary (Resumen)** — Account overview showing 0 USD balance, stats, and account info
- **Deposits (Depósitos)** — Locked section with access restriction overlay
- **Transactions (Transacciones)** — Empty state showing "No hay transacciones que mostrar"
- **Markets (Mercados)** — Live real-time market data from Deriv's public API:
  - Volatility 50 (1s) Index with stability analysis
  - Volatility 10 Index with digit frequency chart and Under 6 / Under 7 trading analysis
- **Profile menu** — Alexis López 🇨🇴 with Retiros / Cerrar sesión submenu
- Dark trading theme inspired by Deriv's UI

## Tech Stack

- [TanStack Start](https://tanstack.com/start) — Full-stack React framework
- [TanStack Router](https://tanstack.com/router) — File-based routing
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) — Real-time charts
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [Deriv WebSocket API](https://developers.deriv.com/) — Live market tick data

## Running Locally

```bash
npm install
npm run dev
```

The app starts on [http://localhost:3000](http://localhost:3000).

> **Access password** is required on first load. Contact the administrator for credentials.

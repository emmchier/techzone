/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI3MzU1ODA0MTg1ZDAwMjFmMTNmOWIiLCJpYXQiOjE2NDY3MzY3Mjh9.rncYLgoI4RAHvRAiArqt-aVJi4bCXjlXfskDPJQ9PgY",
    REACT_APP_BASE_URL: "https://coding-challenge-api.aerolab.co",
  },
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
  },
};

module.exports = nextConfig;

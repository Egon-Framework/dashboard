# Egon Dashboard
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b992fec00e2b4f8d879d0a3b76fe1f63)](https://www.codacy.com/gh/Egon-Framework/dashboard/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Egon-Framework/dashboard&amp;utm_campaign=Badge_Grade)

The Egon Dashboard is a web application for visually monitoring the status of running Egon pipelines.
It is designed to provide users with an easy-to-understand overview of pipeline structure, status, and performance.

## Installation

Choose one of the options below for installing and running the Egon Dashboard.

### Using Docker (Recomended)

The latest release can be pulled and run directly from the GitHub Container Registry:

```bash
docker pull ghcr.io/egon-framework/dashboard
docker run -p 3000:80 ghcr.io/egon-framework/dashboard
```

### Using npm

The application source code can be downloaded and compiled directly.

```bash
git clone https://github.com/Egon-Framework/dashboard
npm install --prefix=dashboard/src 
npm start --prefix=dashboard/src
```
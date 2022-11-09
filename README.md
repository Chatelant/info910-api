# info910-api

```bash
exec : node index.js
```

Docker

```bash
# Lancement avec docker compose
docker compose up -d
```
```bash
# Build du conteneur et run à la main
docker build . -t info910/api-app
docker run -p 3000:3000 -d info910/api-app
```
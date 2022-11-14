# info910-api

Api envoyant une chaine de caractère indiquant qu'elle a bien reçu une requête **GET** ou **POST**.

## Docker

```bash
# Lancement avec docker compose
docker compose up -d
```
```bash
# Build du conteneur et run à la main
docker build . -t info910/api-app
docker run -p 3000:3000 -d info910/api-app
```

## Kubernetes

Veuillez executer les commandes ci-dessous dans la section "Deploiement via yml".
Il se peut que la première commande doive etre utilisée 2x pour que la seconde fonctionne.
### Deploiement via yml
```bash
# Execution des scripts yml
kubectl apply -f .\deploiement\

# Port forwarding pour que le navigateur ai accès à l'api
kubectl port-forward service/info910-api 3000:3000
```
### Deploiement via cmd
```bash
kubectl create deployment info910-api --image=ghcr.io/chatelant/info910-api:main
kubectl expose deployment info910-api --type=NodePort --port=3000
kubectl get services info910-api
kubectl port-forward service/info910-api 3000:3000
```

## Generation des yml
Commandes utilisées pour générer les yml.
```bash
kubectl create deployment info910-api --image=ghcr.io/chatelant/info910-api:main --dry-run=client -o yaml > .\deploiement\create.yml
kubectl expose deployment info910-api --type=NodePort --port=3000 --dry-run=client -o yaml > .\deploiement\serve.yml
```
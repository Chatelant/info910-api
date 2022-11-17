# info910-api

Api envoyant une chaine de caractère indiquant qu'elle a bien reçu une requête **GET** ou **POST**.

## Mise en route

Pour lancer le projet, référez vous à la section "Deploiement via yml" dans la partie Kubernetes.
Vous trouverez ci-dessous deux parties, la partie correspondant à la dockerisation et la partie kubernetes.
Chaque partie est constituée de deux sous partie, la première "automatisé", la seconde avec toutes les commandes pas à pas.

## Docker

### Lancement avec docker compose
```bash
# Lancement avec docker compose
docker compose up -d
```
### Lancement sans docker compose
```bash
# Build du conteneur et run à la main
docker build . -t info910/api-app
docker run -p 3000:3000 -d info910/api-app # si vous voulez mapper le port
```

## Kubernetes

Veillez a bien faire le port forwarding car l'application front utilise des calls api via le navigateur.

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
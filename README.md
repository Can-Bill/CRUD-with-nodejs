# Node.js API (Dockerized)

API REST construite avec Node.js, Express et MongoDB Atlas.
---

## 🚀 Lancer le projet

### 1. Cloner le repo

git clone https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
cd VOTRE-REPO

### cree un fichier .env comme suit :

PORT=3000
MONGO_URI=votre_mongodb_atlas_url
JWT_SECRET=votre_secret

###lancer docker:

docker compose up --build

### acceder a l'API:

http://localhost:3000

### pour arrêté les conteneurs:

docker compose down

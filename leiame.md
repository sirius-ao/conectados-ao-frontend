## …or create a new repository on the command line

echo "# conectados-ao-frontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/conectados-ao/conectados-ao-frontend.git
git push -u origin main





## …or push an existing repository from the command line

git remote add origin https://github.com/conectados-ao/conectados-ao-frontend.git
git branch -M main
git push -u origin main

> https://github.com/marketplace/actions/ftp-deploy


FROM node:20-alpine AS build 

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/conectados-ao-frontend/browser /usr/share/nginx/html

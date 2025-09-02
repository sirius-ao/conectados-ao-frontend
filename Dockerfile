FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.spec.json ./

RUN npm ci --legacy-peer-deps

COPY src ./src
COPY public ./public

RUN npm run build -- --configuration=production

FROM nginx:alpine

COPY --from=builder /app/dist/conectados-ao-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
name: Deploy to Render

on:
  push:
    branches: [ main ]  # Altere para sua branch principal (master/main)

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'  # Use a versão do Node.js compatível com seu projeto
          
      - name: Install dependencies
        run: npm install
        
      - name: Build Angular app
        run: npm run build -- --configuration=production  # Altere conforme seu angular.json
        
      - name: Create deployment artifact
        run: |
          mkdir -p deploy/dist
          cp -R dist/* deploy/dist/
          # Inclua outros arquivos necessários para o deploy (como server.js para SSR)
          
      - name: Deploy to Render
        uses: render-actions/deploy@v1
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}
          directory: deploy  # Pasta contendo os arquivos para deploy
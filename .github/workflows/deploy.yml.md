name: Deploy Angular to FTP

on:
  push:
    branches: [ main ]  # Altere para a branch que você deseja acionar o deploy

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'  # Use a versão do Node.js compatível com seu projeto Angular

    - name: Install dependencies
      run: npm install

    - name: Build Angular project
      run: npm run build -- --configuration=production  # Altere conforme sua configuração de build

    - name: List build files (debug)
      run: ls -la dist/

    - name: FTP Deploy
      uses: SamKirkland/FTP-Deploy-Action@v4
      with:
        #server: ${{ secrets.FTP_SERVER }}
        #username: ${{ secrets.FTP_USERNAME }}
        #password: ${{ secrets.FTP_PASSWORD }}
        local-dir: dist/your-project-name/  # Substitua 'your-project-name' pelo nome do seu projeto Angular
        server-dir: /public_html/  # Altere para o diretório de destino no servidor
        exclude: |
          **/.DS_Store
          **/.git*
          **/*.map
          **/*.scss
          **/node_modules/
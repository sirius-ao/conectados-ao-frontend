services:
  - type: web
    name: conectados-ao-frontend
    runtime: node
    repo: https://github.com/conectados-ao/conectados-ao-frontend
    plan: free
    region: oregon
    buildCommand: |
      npm install
      npm run build -- --configuration=production
    startCommand: npm run start
    autoDeployTrigger: commit
    envVariables:
      NODE_ENV: production
      NPM_CONFIG_PRODUCTION: false
    staticAssets:
      - path: dist\conectados-ao-frontend
        uploadOnDeploy: true
    httpPort: 80
    healthCheckPath: /
version: "1"
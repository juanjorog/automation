
*PASOS PARA INSTALAR*

***      
1. Descargar e Instalar nodejs: https://nodejs.org/en/ 
2. Descargar e Instalar yarn: https://yarnpkg.com/en/docs/install
3. Ingresar a la ventana de comandos cmd y verificar la instalación: yarn --version
4. Crear una carpeta propia e instalar: npm install -g codeceptjs 
5. Descargar Selenium: npm i -g selenium-standalone 
6. Instalar Selenium: selenium-standalone install
7. Iniciar Selenium: selenium-standalone start
8. Inicializar y crear el codecept json: codeceptjs init (aceptar con enter y elegir SeleniumWebDriver)
9. Inicializa y crea el package json: npm init 
10. Descargar e Instalar visual code: https://code.visualstudio.com/docs/?dv=win
11. Adicionar configuración con lo necesario de codecept.json y package.json

*codecept.json*
```json
{
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "SeleniumWebdriver": {
      "url": "----",
      "browser": "chrome",
      "uniqueScreenshotNames": true
    },
    "Mochawesome": {
      "uniqueScreenshotNames": true,
      "disableScreenshots": false
    }
  },
  "include": {
    "I": "./steps_file.js"
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": false,
          "steps": true
        }
      },
      "mochawesome": {
       "stdout": "./output/console.log",
       "options": {
         "reportDir": "./output",
         "reportFilename": "index"
        }
      }
    }
  },
  "name": "automation"
}
```
*package.json*

```json
{
  "name": "automation",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Pris",
  "license": "MIT",
  "private": true,
  "scripts": {
    "clean": "rimraf output",
    "test": "rimraf output & codeceptjs run --grep login --reporter mocha-multi"
  },
  "devDependencies": {
    "codeceptjs": "^1.0.3",
    "mocha-junit-reporter": "^1.15.0",
    "mocha-multi": "^0.11.1",
    "mochawesome": "^2.3.1",
    "nightmare": "^2.10.0",
    "nightmare-upload": "^0.1.1",
    "rimraf": "^2.6.2",
    "selenium-webdriver": "^3.6.0",
    "webdriverio": "^4.8.0"
  }
}
```
12. Instalar el directorio node_modules: yarn install 
13. Crear un nuevo test: codeceptjs gt (responder con el nombre y el feature)
14. Proveer el autocompletado al contenido del archivo steps.d.ts
15. Ejecutar una prueba: yarn run test
16. Para crear en modo page object usar: codeceptjs gpo
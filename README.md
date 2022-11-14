# PlaywrightStartExample
Repositório com um exemplo simples de Playwright

Instalar Node</br>
Instalar IDE (VSC)</br>
Criar uma pasta chamada Playwright</br>
Navegar até a pasta pelo terminal</br>
Instalar o Playwright - npm init playwright@latest</br>
Abrir a pasta do Playwright no VSC</br>
Abrir a pasta 'testes' e incluir um arquivo chamado ConsultaCep.spec.js</br>
Colar o código</br>
Executar no terminal o comando - npx playwright test ConsultaCep.spec.js --headed</br>


Recomendo que no arquivo playwright.config.js remova os outros executores e deixe apena o chromium</br>
Fica assim  /* Configure projects for major browsers */</br>
  projects: [</br>
    {</br>
      name: 'chromium',</br>
      use: {</br>
        ...devices['Desktop Chrome'],</br>
      }</br>
    }</br>
  ],</br>

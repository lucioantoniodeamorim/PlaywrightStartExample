// @ts-check
const { test, expect } = require('@playwright/test');

//Nome do Teste
test('Teste de consulta de CEp', async ({ page }) => {

  //Visita a página dos correios
  await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php?t');

  //Preenche o campo de pesquisa com o cep 89209674
  await page.locator('#endereco').type('89209674');

  //Clica no botão de pesquisar
  await page.locator('#btn_pesquisar').click()

  //Verifica se o texto exibito no resultado da pesquisa é o esperado
  await expect(page.locator('tbody > tr > [data-th="Logradouro/Nome"]')).toContainText('Rua Boehmerwald - lado ímpar');
});

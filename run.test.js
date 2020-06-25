jest.setTimeout(30000);
var clicarModal = require('./src/testscases/FirstTest');

describe("Testes de modal ", () => {
    test('Teste de sair modal IE11', async () => {
        const resultado = await clicarModal('internet explorer');
        expect(resultado).toBe(1);
    })

    test('Teste de sair modal Chrome', async () => {
        const resultado = await clicarModal('chrome');
        expect(resultado).toBe(1);
    })
})  

require('chromedriver');
require('iedriver');

const {Builder, By, Key, until, Alert} = require('selenium-webdriver');
var escreverNome =  async (navigator) => {
 try {
     var driver =  new Builder().forBrowser(navigator).build();

     await driver.get('https://formy-project.herokuapp.com/modal');
     const quitBtn =  await driver.findElement(By.id('modal-button'));
     await quitBtn.click();

     await driver.sleep(1000);

     const close = await driver.findElement(By.id('ok-button'));
     await close.click(); 

     await driver.quit();
     return 1;
 } catch (error) {
   console.log(error);
      return 0;
 }
}


module.exports =  escreverNome;
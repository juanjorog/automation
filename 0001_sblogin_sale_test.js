/// <reference path="./steps.d.ts" />
Feature('Login');

Scenario('Registered user should login to SB Chile and logout', (I) => {
    I.say('I want to login to SomosBelcorp Chile');
    I.amOnPage('/');
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'CL');
    I.wait(2);
    I.fillField('CodigoUsuario','usuariopruebacl');
    I.fillField('ClaveSecreta','1234567');
    I.click('#btnLogin');
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="PopShowroomVenta"]/div/a/img');
    I.wait(2);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
});

Scenario('Registered user should login to SB Bolivia and logout', (I,generalPage) => {
    generalPage.sendForm('BO','usuariopruebabo','1234567');
});

Scenario('Registered user should login to SB Perú and logout', (I,generalPage) => {
    generalPage.sendForm('PE','usuariopruebape','1234567');
});

Scenario('Registered user should login to SB Colombia and logout', (I,generalPage) => {
    generalPage.sendForm('CO','usuariopruebaco','1234567');
});

Scenario('Registered user should login to SB Costa Rica and logout', (I,generalPage) => {
    generalPage.sendForm('CR','usuariopruebacr','1234567');
});

Scenario('Registered user should login to SB Ecuador and logout', (I,generalPage) => {
    generalPage.sendForm('EC','usuariopruebaec','1234567');
});

Scenario('Registered user should login to SB El Salvador and logout', (I,generalPage) => {
    generalPage.sendForm('SV','usuariopruebasv','1234567');
});

Scenario('Registered user should login to SB Guatemala and logout', (I,generalPage) => {
    generalPage.sendForm('GT','usuariopruebagt','1234567');
});

Scenario('Registered user should login to SB México and logout', (I,generalPage) => {
    generalPage.sendForm('MX','usuariopruebamx','1234567');
});

Scenario('Registered user should login to SB Panamá and logout',(I,generalPage) => {
    generalPage.sendForm('PA','usuariopruebapa','1234567');
});

Scenario('Registered user should login to SB Puerto Rico and logout', (I,generalPage) => {
    generalPage.sendForm('PR','usuariopruebapr','1234567');
});

Scenario('Registered user should login to SB Santo Domingo and logout', (I,generalPage) => {
    generalPage.sendForm('DO','usuariopruebado','1234567');
});

Scenario('Registered user should login to SB Venezuela and logout', (I) => {
    I.say('I want to login to SomosBelcorp Venezuela');
    I.amOnPage('/');
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'VE');
    I.wait(2);
    I.fillField('CodigoUsuario','usuariopruebavz');
    I.fillField('ClaveSecreta','1234567');
    I.click('#btnLogin');
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="lnk-sup-cerrar-sesion"]');
});

Scenario('Registered user should login to admcontenido and logout', (I) => {
    I.say('I want to login to SomosBelcorp admcontenido');    
    I.amOnPage('/');
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'PE');
    I.wait(2);
    I.fillField('CodigoUsuario','admcontenido');
    I.fillField('ClaveSecreta','1234567');
    I.click('#btnLogin');
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="header_tsmv"]/div[1]/div[3]/span/a');
});

Scenario('Registered user should login to admsac and logout', (I) => {
    I.say('I want to login to SomosBelcorp admsac');
    I.amOnPage('/');
    I.wait(2);
    I.see('¡Bienvenida');
    I.selectOption('//*[@id="ddlPais"]', 'PE');
    I.wait(2);
    I.fillField('CodigoUsuario','admsac');
    I.fillField('ClaveSecreta','747576');
    I.click('#btnLogin');
    I.amOnPage('/Bienvenida');
    I.wait(2);
    I.click('//*[@id="header_tsmv"]/div[1]/div[3]/span/a');
});

import Component from "../component/Messages/Component";
import Data from "../component/Messages/Data";

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
});
describe("Messages Test",() => {

        let messagesComponent = new Component();
        let messagesData = new Data();

    it("Changing employees messages", () => {

       cy.visit("https://demo.phppointofsale.com/index.php/home");
       messagesComponent.loginButton.click();
       messagesComponent.footerTextToScroll;
       cy.visit("https://demo.phppointofsale.com/index.php/messages");
       messagesComponent.newMessagesButton.click();
       messagesComponent.locationCheckboxFiled.click();
       messagesComponent.employeesCheckboxFiled.click();
       messagesComponent.messageTextFiled.type(messagesData.messageTextFiled);
       messagesComponent.sendButton.click();
       messagesComponent.messageWrapperField.contains("Zoey");
       messagesComponent.trashButton.click({multiple: true});
    });
});
export default class Component {
    get loginButton(){
        return cy.get(".btn.btn-primary.btn-block");
    }
    get  footerTextToScroll(){
        return cy.get(".badge.bg-primary").scrollIntoView();
    }
    get  newMessagesButton(){
        return cy.get("#send_message");
    }
    get locationCheckboxFiled(){
        return cy.get("[for=\"all_locations\"] span");
    }
    get employeesCheckboxFiled(){
        return cy.get("[for=\"all_employees\"] span");
    }
    get messageTextFiled(){
        return cy.get("#message");
    }
    get sendButton(){
        return cy.get("#submitf");
    }
    get trashButton(){
        return cy.get(".ion-trash-b");
    }
    get messageWrapperField(){
        return cy.get(".message-body");
    }

}
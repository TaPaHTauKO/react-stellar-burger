const ingredient = "[class^=burger-ingredients_ingredient]";
const inrgedientCard = "[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]";
const constructorSection = "[class^=burger-constructor_burger_constructor_section]";
const inputEmail = ".mt-6 > .input";
const inputPassword = ":nth-child(3) > .input";
const orderLink = "[class^=burger-constructor_order__link]";
const closeIcon = "[class^=modal_modal_close_icon]";
const testUrl = 'http://localhost:3000/'


describe('Тест приложения', () => {
    it('тест функциональности конструктора бургерной', ()=> {
        cy.visit(testUrl);
        cy.get(ingredient).should("exist");
        cy.get(constructorSection).should("exist");
        cy.get(inrgedientCard).eq(1).should("exist");
        cy.get(inrgedientCard).eq(1).trigger("dragstart");
        cy.get(constructorSection).trigger("drop");
        cy.get(inrgedientCard).eq(3).trigger("dragstart");
        cy.get(constructorSection).trigger("drop");
        cy.get("button").contains("Оформить заказ").should("exist");
        cy.get("button").contains("Оформить заказ").click();
        cy.get(inputEmail).should("exist");
        cy.get(inputEmail).type("zx27111@mail.ru");
        cy.get(inputPassword).should("exist");
        cy.get(inputPassword).type("11223344");
        cy.get("button").contains("Войти").should("exist");
        cy.get("button").contains("Войти").click();

        cy.get(orderLink).should("exist");
        cy.get(orderLink).click();

        cy.get(closeIcon).should("exist");
        cy.get(closeIcon).click();
    })
})

describe('Тест модального окна ингредиента', ()=> {
    it('тест', ()=> {
        cy.visit(testUrl);
        cy.get(ingredient).should("exist");
        cy.get(inrgedientCard).eq(1).should("exist");
        cy.get(inrgedientCard).eq(1).click();
        cy.get("h2").contains("Детали ингредиента").should("exist");
        cy.get(closeIcon).should("exist");
        cy.get(closeIcon).click();
    })
})
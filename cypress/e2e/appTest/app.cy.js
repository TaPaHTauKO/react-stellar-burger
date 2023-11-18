describe('Тест приложения', () => {
    it('тест', ()=> {
        cy.visit('http://localhost:3000/');
        cy.get("[class^=burger-ingredients_ingredient]").should("exist");
        cy.get("[class^=burger-constructor_constructor]").should("exist");
        cy.get("[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]").eq(1).should("exist");
        cy.get("[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]").eq(1).trigger("dragstart");
        cy.get("[class^=burger-constructor_burger_constructor_section]").trigger("drop");
        cy.get("[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]").eq(3).trigger("dragstart");
        cy.get("[class^=burger-constructor_burger_constructor_section]").trigger("drop");
        cy.get("button").contains("Оформить заказ").should("exist");
        cy.get("button").contains("Оформить заказ").click();
        cy.get(".mt-6 > .input").should("exist");
        cy.get(".mt-6 > .input").type("zx27111@mail.ru");
        cy.get(":nth-child(3) > .input").should("exist");
        cy.get(":nth-child(3) > .input").type("11223344");
        cy.get("button").contains("Войти").should("exist");
        cy.get("button").contains("Войти").click();

        cy.get("[class^=burger-constructor_order__link]").should("exist");
        cy.get("[class^=burger-constructor_order__link]").click();

        cy.get("[class^=modal_modal_close_icon]").should("exist");
        cy.get("[class^=modal_modal_close_icon]").click();
    })
})

describe('Тест модального окна ингредиента', ()=> {
    it('тест', ()=> {
        cy.visit('http://localhost:3000/');
        cy.get("[class^=burger-ingredients_ingredient]").should("exist");
        cy.get("[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]").eq(1).should("exist");
        cy.get("[class^=burger-ingredients_ingredient]  > [class^=ingredient_ingredient_card]").eq(1).click();
        cy.get("h2").contains("Детали ингредиента").should("exist");
        cy.get("[class^=modal_modal_close_icon]").should("exist");
        cy.get("[class^=modal_modal_close_icon]").click();
    })
})
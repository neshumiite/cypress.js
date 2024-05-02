describe('Покупка нового аватара', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.me/');

         cy.get(':nth-child(1) > .auth__input').type('kukuruzagde@yandex.ru');
         cy.get('#password').type('181103_Mn');
         cy.get('.auth__button').click();

         cy.get('.header__btns > [href="/shop"]').click();
         cy.wait(2000);
         cy.get(':nth-child(3) > .shop__button').click();
         
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TAYLER DURDEN');

         cy.get('.pay-btn').click();

         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();

         cy.contains('Покупка прошла успешно').should('be.visible');

         cy.get('.payment__adv').click();

         
     })   
})
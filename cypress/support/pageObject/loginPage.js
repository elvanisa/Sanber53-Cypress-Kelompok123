class loginPage{
    //cara 1
    //yang disimpan hanya element locator
    usr = '#user-name'
    pwd = '[name="password"]'
    login_btn = '.submit-button.btn_action'
    err = '[data-test="error"]'

    //cara 2
    //buat fungsi lengkap
    verifyError(){
        cy.get(this.err).should('be.visible')
    }

    clickLogin(){
        cy.get(this.login_btn).click()
    }
}
export default new loginPage()
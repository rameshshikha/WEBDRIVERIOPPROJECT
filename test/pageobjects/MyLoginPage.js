

class LoginPage{
    get usernametf(){
        return $('[name="username"]')
    }

    get passwordtf(){
        return $('[name="password"]')
    }
    get submitbtn(){
        return $("//button[@type='submit']")
    }


    //business logics
    async loginToApplication(username,password){
        await this.usernametf.setValue(username)
        await this.passwordtf.setValue(password)
        await this.submitbtn.click()


    }

}
export default new LoginPage()
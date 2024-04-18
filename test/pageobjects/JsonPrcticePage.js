class JsonPractice{
    get username(){
        return $('[name=username]')
    }
    get password(){
        return $('[name=password]')
    }
    get submit(){
        return $('#submit')
    }
    async loginToapp(un,pwd){
        await this.username.setValue(un)
        await this.password.setValue(pwd)
        await this.submit.click()
        await browser.pause(3000)
    }

    
}
export default  new  JsonPractice()
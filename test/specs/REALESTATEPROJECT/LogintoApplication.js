import login from "../../pageobjects/MyLoginPage.js";

describe('logintoapplication test',()=>{
    it('loginToApplication',async()=>{
       await  browser.pause(3000)
        await browser.url('http://rmgtestingserver/domain/House_Rental_Application/auth/login.php')
        browser.pause(3000)
        await login.loginToApplication('admin','admin')
        await browser.pause(3000)
    })
    
})
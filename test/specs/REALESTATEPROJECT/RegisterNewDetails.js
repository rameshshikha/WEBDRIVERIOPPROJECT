import register from "../../pageobjects/Registeradminpage.js";
import login from "../../pageobjects/MyLoginPage.js";

describe('register test',()=>{
    it('loginToApplication',async()=>{
        await  browser.pause(3000)
         await browser.url('http://rmgtestingserver/domain/House_Rental_Application/auth/login.php')
         await browser.pause(3000)
         await login.loginToApplication('admin','admin')
         await browser.pause(3000)
     })
    it('register admin test',async()=>{

      //  await browser.url('http://rmgtestingserver/domain/House_Rental_Application/app/register.php')
          await register.registerNewDetails('miya',4748364849,8676854321)
          await browser.pause(3000)
       


    })

})
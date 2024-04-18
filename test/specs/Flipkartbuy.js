import Flipkart from "../pageobjects/Flipkart.js";

describe('flipkart test',()=>{
         it('flipkart demo test', async()=>{
               
             await browser.url('https://www.flipkart.com/')
             await browser.pause(3000)
             await Flipkart.mobilebtn.click()
             await browser.pause(3000)
             await Flipkart.flipkrtbuypage('mobile')
             await browser.pause(3000)
             await Flipkart.searchbtn.click()
             await browser.pause(3000)
             await Flipkart.mobilename.click()
             await browser.pause(3000)
             await Flipkart.addtocart.click()
             await browser.pause(3000)
             await Flipkart.placeorder.click()
             



         }
        )
})
                 import { expect } from "chai";
                 
                 describe('wait test',()=>{
                    it('wait demo',async()=>{

                     await   browser.url("https://www.flipkart.com/")
                    let   ele= await  browser.$("//img[@alt='Mobiles']")
                    ele.waitForDisplayed()
                    
                    expect(ele).waitForDisplayed('pass')
                    ele.waitForClickable()
                    expect(ele).waitForClickable('pass')
                    ele.waitForStable()
                    expect(ele).waitForStable('pass')
                ele.waitForEnabled()
            expect(ele).waitForEnabled('pass')
                    
                    

                    })
                 })

import { expect } from "chai"


describe('suit test' , ()=>{
    it('button test' , async()=>{

              await   browser.url('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
              await  browser.pause(3000)
                let b = await browser.$('#btn30')
              await   b.isClickable();
              expect(ele).toBe.isClickable('pass')
              await b.isDisplayed();
              expect(ele).toBe.isDisplayed('pass')
              await b.isEnabled();
              expect(ele).toBe.isEnabled('pass')
                await browser.pause(3000)
               await b.click({button: 'right'})
               await b.click({button :'right'})
               await b.click({button :'left'})
               await browser.pause(3000)
                //await myButton.click({ button: 'right' })
    })
})
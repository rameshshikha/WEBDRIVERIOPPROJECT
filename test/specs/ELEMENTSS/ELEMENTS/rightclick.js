describe('suit test' , ()=>{
    it('button test' , async()=>{

              await   browser.url('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
              await  browser.pause(3000)
                let b=await browser.$('#btn30')
              await   b.isClickable();
              await b.isDisplayed();
              await b.isEnabled();
                await browser.pause(3000)
               await b.click({button: 'right'})
               await browser.pause(3000)
                //await myButton.click({ button: 'right' })
    })
})
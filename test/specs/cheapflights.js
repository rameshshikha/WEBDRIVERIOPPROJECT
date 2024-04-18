import cheapflight from "../pageobjects/CHEAPFLIGHTS/cheapflightspage.js" 

  describe('flight test',()=>{
    it('flight demotest',async()=>{
        browser.pause(3000)
        await browser.url("https://www.cheapflights.com/")
        await browser.maximizeWindow()
        await browser.execute(()=>{window:scrollY})
        await browser.scroll(0,1000)
        browser.pause(3000)
        await  cheapflight.cheapflightPage('mumbai')
    })
  })
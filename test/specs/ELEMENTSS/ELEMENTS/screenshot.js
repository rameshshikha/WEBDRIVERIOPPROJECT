describe('takescreenshot',()=>{
   it('screenshot test',async()=>{

    await browser.url('https://www.amazon.com/')
    await browser.pause(3000)
   let ele= await browser.$("//input[@id='twotabsearchtextbox']")
 await  ele.saveScreenshot("./screenshot1.png")
   })
})
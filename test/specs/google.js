describe('suit name',()=>{
    it('Script name', async()=>{
     await   browser.url('https://www.google.com/')
     browser.maximizeWindow()

     await   browser.pause(3000)
     let ele=await  browser.$('#APjFqb').setValue('javascript')
    await  expect(browser).toHaveTitle('Google')
     await   browser.pause(3000)
     
   // await  browser.pause(2000)
   
    })
})
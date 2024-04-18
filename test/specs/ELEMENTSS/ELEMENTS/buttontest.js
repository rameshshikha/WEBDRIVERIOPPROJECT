describe('suit file', () => {
    it('button test', async () => {
        await browser.url("https://demoapps.qspiders.com/ui/button?sublist=0")
        await browser.maximizeWindow()

             await  browser.pause(3000)
               await  browser.$('#btn').click();
               await  browser.pause(3000)
                      
                  let ele=await browser.$('//span[contains(text(),"Yes")]')
                  await  browser.pause(3000)
                 // await expect(ele).toHaveText('You selected "Yes"')
                 // console.log('pass');
                  await ele.toHaveText(expect.stringContaining('You'));
                  console.log('pass');

                //     await  browser.$('#btn4').doubleClick() 
                //     await  browser.pause(3000)
                //     let b=await browser.$('#btn18') 
                //     await  browser.pause(3000)
                //   await  b.click({button : 'right'})            
    })
})
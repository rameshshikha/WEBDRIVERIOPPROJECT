describe('alert test',()=>{
    it.skip('alert demo test',async()=>{


      await   browser.url('https://demoapps.qspiders.com/ui/alert?sublist=0')
        await browser.$('#buttonAlert2').click()
        await   browser.pause(3000)
            //   await   browser.acceptAlert()
            //   await   browser.pause(3000)
            //      await   console.log('alert accepted');
                 await   browser.pause(3000)
                 await browser.dismissAlert()
                 await   browser.pause(3000)
                 console.log('alert dismissed');
                 browser.isAlertOpen()


      
        })
        it.skip('confirm alert',async()=>{
            await   browser.url('https://demoapps.qspiders.com/ui/alert/confirm?sublist=1')
            await   browser.pause(3000)
              await browser.$('#buttonAlert5').click()
              await   browser.pause(3000)
              browser.acceptAlert()
              await   browser.pause(3000)

        })
        it('prompt test',async()=>{
           await  browser.url('https://demoapps.qspiders.com/ui/alert/prompt?sublist=2')
            await browser.$('#buttonAlert1').click()
           await  browser.pause(3000)
           let alert=await browser.isAlertOpen()
           console.log(alert);
           let  text=await browser.getAlertText()
           console.log(text);

           await  browser.pause(3000)
           browser.sendAlertText('no')
           
           await  browser.pause(3000)
           browser.acceptAlert()



        })
})
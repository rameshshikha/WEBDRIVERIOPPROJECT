
import { Key } from 'webdriverio'

describe('suit test' , ()=>{
    it('button test' , async()=>{

              await   browser.url('https://www.google.com/')
               await  browser.pause(3000)
               let ele=await  browser.$('#APjFqb').setValue('javascript')
             await browser.pause(2000)
            await  browser.keys([Key.Ctrl, 'a'])
            await  browser.pause(2000)
             await browser.keys([Key.Ctrl,'c'])
             await  browser.pause(2000)
             let ele1=await   browser.$('#APjFqb').click()
             await  browser.pause(2000)
             await browser.keys([Key.Ctrl,'v'])
             await  browser.pause(3000)
             


             
    })
})
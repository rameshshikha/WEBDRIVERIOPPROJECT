describe('suit test' , ()=>{
    it('button test' , async()=>{

              await   browser.url('https://www.amazon.in/')
               await  browser.pause(3000)

             await   browser.execute(()=>{window.scrollY})
             await browser.scroll(0,300)
             await  browser.pause(3000)
             await   browser.execute(()=>{window.scrollY})
             await  browser.pause(3000)
             await browser.execute(()=>{window.scrollX})
             await browser.scroll(300,0)
             await browser.pause(3000)
    
             

                

               
    })
})
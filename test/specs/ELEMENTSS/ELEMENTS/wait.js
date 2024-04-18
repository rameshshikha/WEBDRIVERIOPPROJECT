                 describe('wait test',()=>{
                    it('wait demo',async()=>{

                     await   browser.url("https://www.flipkart.com/")
                    let   ele= await  browser.$("//img[@alt='Mobiles']")
                    ele.waitForDisplayed()
                    ele.waitForClickable()
                    ele.waitForStable(
                        ele.waitForEnabled()
                    
                    )

                    })
                 })

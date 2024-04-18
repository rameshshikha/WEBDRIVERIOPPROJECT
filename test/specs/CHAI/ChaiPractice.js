import { expect } from "chai";

describe('Dropdown',async()=>{
    it('ddvalues javascript',async()=>{
        await browser.url('https://www.facebook.com/signup')
        browser.pause(3000)
        await browser.$("//input[@name='firstname']").setValue('shikha')
        browser.pause(3000)

        await  browser.$("//input[@name='lastname']").setValue('ramesh')
        browser.pause(3000)
        await browser.$("//input[@name='reg_email__']").setValue('abc@gmail.com')
        browser.pause(3000)
        await browser.$("//input[@id='password_step_input']").setValue('abc@123')
        browser.pause(3000)

        let day= await browser.$("//select[@id='day']").selectByIndex(5)
        browser.pause(3000)

        let monthlist=await browser.$$("//select[@id='month']")
            let monli= await monthlist.map((element)=>element.getText());
                console.log(monli);
                let   monthlist1= monli.toString()
                   console.log(" $$$$$$$$" + monthlist1);
                   let monthlist2=monthlist1.split('\n');
                   console.log(monthlist2);
            
                expect(monthlist2).to.be.an('array').to.have.lengthOf(12,'length is not same')
                expect(monthlist1).to.be.a('string').to.have.includes('Jan', 'not found ')   
                expect(monthlist2).to.be.an('array').that.is.not.empty;
                expect(monthlist2).to.be.an('array').but.not.an('object','true')
                expect(monthlist2).to.have.lengthOf.above(5,'false')
                expect(monthlist2).to.have.lengthOf.below(25,'false')
                expect(monthlist2).to.have.lengthOf.within(10,15,'false')
                expect(monthlist).to.be.an('array').that.does.not.include('world','false')
                expect(monthlist1).to.be.a('string').that.does.include('Sep')

            })

            it(async()=>{
                   
            })


    })

class cheapflightsPage{
    get flightsbtn(){
        return $("//a[@aria-label='Search for flights ']")
    }
    // get Fromtf(){
    //     return $("//input[@aria-label='Flight origin input']")
    // }
    // get locationdropdown(){
    //     return $("//span[.='New Delhi, National Capital Territory of India, India']")
    // }
    get Totf(){
        return $("//input[@aria-label='Flight destination input']")
    }
    get tolocationdropdown(){
        return $("//span[.='Mumbai, Maharashtra, India']")
    }
    get startdatetf(){
        return $("//div[@aria-label='Start date']")
    }
    get EndDatetf(){
        return $("//div[@aria-label='End date']")
    }
    get Nextmonth(){
        return $("//div[@aria-label='Next month']/child::*[name()='svg']")
    }
    get StartDateTable(){
        return $("//div[@class='OV9e']/descendant::table[@class='or3C or3C-wrapper'][1]/tbody/tr[2]/td[4]")
    }
    get EndDateTable(){
        return $("//div[@class='OV9e']/descendant::table[@class='or3C or3C-wrapper'][2]/tbody/tr[2]/td[4]")
    }
    // get adult(){
    //     return $("//div[@class='zEiP-formField zEiP-traveler']")
    // }
    // get incrementbtn(){
    //     return $("//div[@class='UKFa UKFa-mod-variant-mcfly']/div[2]/descendant::button[@aria-label='Increment']")
    // }
    get searchbutton(){
        return $("//div[@class='Iqt3-button-content']/*[name()='svg']")
    }

    async cheapflightPage(ToPlace){
      //  await browser.flightsbtn.click()
        await browser.pause(3000)
        // await this.Fromtf.setValue(FromPlace)
        // await browser.pause(3000)
        // await this.locationdropdown.click()
        // await browser.pause(3000)
        await this.Totf.setValue(ToPlace)
        await browser.pause(3000)
        await this.tolocationdropdown.click()
        await browser.pause(3000)
        await this.startdatetf.click()
        await browser.pause(3000)
        await this.Nextmonth.click()
        await browser.pause(3000)
        await this.Nextmonth.click()
        await browser.pause(3000)   
        await this.StartDateTable.click()
        await browser.pause(3000)
        // await this.EndDatetf.click()
        // await browser.pause(3000)
        await this.EndDateTable.click()
        await browser.pause(3000)
        // await this.adult.click()
        // await browser.pause(3000)
        // await this.incrementbtn.click()
        // await browser.pause(3000)
        await this.searchbutton.click()
        browser.pause(10000)


    }

}
export default new cheapflightsPage()
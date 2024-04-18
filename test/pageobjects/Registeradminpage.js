class Register{
    get registerbttn(){
        return $("//a[.='Register']")
    }
    get fullnametf(){
        return $("//input[@id='fullname']")
    }
    get mobilenumtf(){
        return $("//input[@name='mobile']")
    }
    get altermobiletf(){
        return $("//input[@id='alternat_mobile']")
    }

    async registerNewDetails(fullname,mobile,altermobile)
    {
        await this.registerbttn.click()
        await browser.pause(3000)
        await this.fullnametf.setValue(fullname)
        await browser.pause(3000)
        await this.mobilenumtf.setValue(mobile)
        await browser.pause(3000)
        await this.altermobiletf.setValue(altermobile)

    }

}
export default new Register()
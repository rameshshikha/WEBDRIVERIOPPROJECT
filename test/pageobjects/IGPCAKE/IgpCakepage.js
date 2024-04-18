class igpcake{
    get cake(){
        return $("//div[@id='product-grid']/descendant::a[1]")
    }
    get pincode(){
        return $("//input[@id='location-input']")
    }
    get checkbtn(){
        return $("//button[@id='pincode-check-btn']")
    }
    get radiobutton(){
        return $("//section[@class='express_schedule_delivery_cont']/div[2]")
    }
    get selectdate(){
        return $("//button[@id='show-Select_Date']")
    }
    get calenderdatetable(){
        return $("//table[@class='ui-datepicker-calendar']/tbody/tr[3]/td[3]")
    }
    get selectdeliverytypebtn(){
        return $("//span[.='Midnight']")
    }
    get addtocart(){
        return $('#add-cart')
    }
    get continuewithoutadd(){
        return $("//span[.='CONTINUE WITHOUT ADDONS']")
    }
    get addtocartbtn(){
        return $("//span[@id='cart-count']")
    }
    get addtocartvalidate(){
        return $("//div[@class='c-scroll-container']/descendant::div[@class='d-flex']//p[@class='c-item-name Paragraph-16-M--Regular ']")
    }
    async igpcakebuy(pincode){
        await this.cake.click()
        await this.pincode.setValue(pincode)
        await browser.pause(2000)
        await this.radiobutton.click()
        await this.selectdate.click()
        await this.calenderdatetable.click()
        await this.selectdeliverytypebtn.click()
        await this.addtocart.click()
        await this.continuewithoutadd.click()
        await this.addtocartbtn.click()
        

    }
}
export default new igpcake()
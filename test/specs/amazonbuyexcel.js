import AmazonPage from "../pageobjects/AmazonPage.js";
import ExcelUtility from "../../Utilities/ExcelUtility.js";
import excel from "exceljs"
describe('amazon test', ()=>{
    it('amazon buy demo',async()=>{

        await browser.url('https://www.amazon.in/')
        await browser.pause(2000)
        await browser.maximizeWindow()
        await AmazonPage.AmazonPage('iphone')
        await browser.pause(2000)
       let  Filepath='./test/TESTDATA/mobilenames.xlsx'
      //  await browser.pause(3000)
      let   book1=new excel.Workbook()
      await browser.pause(2000)
      await  book1.xlsx.readFile(Filepath)
      await browser.pause(2000)
     let  sheet1 = book1.addWorksheet('Sheet1')
     await browser.pause(2000)

     let nameslength= await AmazonPage.mobilenames.length;
   //   let pricelength= await AmazonPage.pricedetails.length;
   //   console.log(pricelength);
    
   //   await AmazonPage.mobilenames.map(async(ele)=>{
   //      let names = await ele.getText();
        
   //   })
   //      await AmazonPage.pricedetails.map(async(element)=>{
   //       let price =  await element.getText();
        
   //      })
     for(let i=1; i<=nameslength; i++){
      
        await AmazonPage.mobilenames.map(async(ele)=>{
            let names = await ele.getText();
            
        
            await AmazonPage.pricedetails.map(async(element)=>{
             let price =  await element.getText();
            
           
      sheet1.getRow(i).getCell(1).value=`${names} ===> ${price}`
               await book1.xlsx.writeFile(Filepath)
          
        })
    })
     }
     })
     
    
    })

import AmazonPage from "../pageobjects/AmazonPage.js";
import ExcelUtility from "../../Utilities/ExcelUtility.js";
import excel from "exceljs"
describe('amazon test', ()=>{
    it('amazon buy demo',async()=>{

        await browser.url('https://www.amazon.in/s?k=iphone&crid=1DZCY9RB1P0DM&sprefix=iphone%2Caps%2C246&ref=nb_sb_noss_1')
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
     let  sheet1 = book1.addWorksheet('Sheet3')
     await browser.pause(2000)

     await AmazonPage.mobilenames.map(async(ele)=>{
        let names = await ele.getText()});
        console.log(names.getText());
          for(let i=1; i<=sheet1.rowCount; i++){
               sheet1.addRow(i).getCell(1).value=names
               await book1.xlsx.writeFile(Filepath)
          }
     })
     
    })

//
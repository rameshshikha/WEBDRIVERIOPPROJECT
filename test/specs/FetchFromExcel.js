import excel from "exceljs"


describe('fetch data',()=>{
    it('from excel sheet',async()=>{

            //creating new object for excel
            const book= new excel.Workbook()
               //give the path
            await book.xlsx.readFile('./test/TESTDATA/Data.xlsx')
            //mention the sheet number
            const sheet= book.getWorksheet('Sheet1')
            //mention the cell and row 
         const data= sheet.getRow(1).getCell(1).toString()

             console.log(`=================> ${data}`);

        })
})
import excel from "exceljs"

describe('getData',()=>{
    it('getfrom excel',async()=>{

         const  book=   new excel.Workbook()
                await book.xlsx.readFile('./test/TESTDATA/Data.xlsx')
                //if you want to add new worksheet give the name with addworksheet
             
                // const sheet=book.addWorksheet('Sheet3')
              
                //if you want to add data in same worksheet give getworksheet
              const sheet = book.getWorksheet('Sheet1')
             
              //adding value to existitng row and coloumn 
                sheet.getRow(2).getCell(2).value='value333'
              
                //creating new row inbtween and adding values
                sheet.addRow(3).getCell(4).value='value444'

                   await book.xlsx.writeFile('./test/TESTDATA/Data.xlsx')
    })
})
import excel from "exceljs"

describe('fetchingdata',async()=>{
    it('multipledata from excel', async()=>{

        const book=new excel.Workbook()
          await  book.xlsx.readFile('./test/TESTDATA/Data.xlsx')
           const sheet=book.getWorksheet('Sheet3')


           for(let i=1;i<=sheet.rowCount;i++){

          for(let j=1;j<=sheet.columnCount;j++){

      
          let data= sheet.getRow(i).getCell(j).toString()
               process.stdout.write(`${data}`)

         


           }}
           console.log( '\n');
    })
})
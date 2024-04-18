import excel from "exceljs"
export async function Readdata(Filepath,SheetName,row,coloumn){
    const book=  new excel.Workbook()
    await book.xlsx.readFile(Filepath)
     const sheet=book.getWorksheet(SheetName)
      let data= sheet.getRow(row).getCell(coloumn).toString()
                    return data;
}

   export async function writedata(Filepath,SheetName,row,coloumn,Text){
    let   book1=new excel.Workbook()
    await  book1.xlsx.readFile(Filepath)
   let  sheet1 =book1.addWorksheet(SheetName)
     sheet1.getRow(row).getCell(coloumn).value=Text
     await book1.xlsx.writeFile(Filepath)
    

}

'use strict'

const Excel    = require('exceljs')
const Helpers    = use('Helpers')
const ExportService = use('App/Services/ExportService')
const SpreadSheet = use('SpreadSheet')
const Database = use('Database')
const fs = use('fs')
const writeFile = Helpers.promisify(fs.writeFile)
const Drive = use('Drive')

class NewtrashController {
    async index({request, id_trash,rowNumber})
    {
        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet("Sheet 1");
        var font = { name: 'Times New Roman', size: 12 };

        worksheet.columns = [
                                { header: "ID", key: "id",width:10,style:{font:font} }, 
                                { header: "Name", key: "name" ,width:30,style:{font:font}},
                                { header: "Type", key: "type" ,width:30,style: { font: font }},
                                { header: "Company", key: "company_name",width:30,style: { font: font }},
                                { header: "Category", key: "category",width:30,style: { font: font }},
                                { header: "Status", key: "status",width:30,style: { font: font }},
                            ];
        
        var newtrash  = await Database.select('*').from('newtrash')

        var rowTrash = newtrash.map(async item => {
            worksheet.addRow({
                id: item.id,
                name: item.name,
                type: item.type,
                company_name: item.company_name,
                category: item.category,
                status: item.status
            })
        })
        worksheet.getCell('B1','C1').fill = {type: 'pattern',pattern:'solid',fgColor:{ argb:'cccccc' }
            }

        rowTrash = await Promise.all(rowTrash)
    
        var res = workbook.xlsx.writeFile('./uploads/exports.xlsx')

    }
}

module.exports = NewtrashController

'use strict'
const Database = use('Database')
const Excel    = require('exceljs')
const NewTrash = use('App/Models/NewTrash')

class ExportService{
    static async ExportData(filename)
    {
        var workbook = new Excel.Workbook();
        workbook.xlsx.writeFile(filename)
        .then(function() {
        console.log('halo')
        });
    }            
}

module.exports = ExportService



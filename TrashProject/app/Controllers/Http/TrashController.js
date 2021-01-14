'use strict'

// const ImportService = require('App/Services/ImportService')

const Database = use('Database')

class TrashController {
     async trash(){

        const Trash = use('App/Models/Trash')
        var trash_data = await Trash
            .query()
            .with('trash_category')
            .with('trash_type')
            .with('company')
            .with('status')
            // .with('company', companyQuery => {
            //     companyQuery.select('id', 'name').fetch()
            // })
            // .with('status', statusQuery => {
            //     statusQuery.select('id', 'name').fetch()
            // })
            .fetch()
        trash_data = JSON.parse(JSON.stringify(trash_data))

        // const data = []
        for(let i=0; i<10; i++)
        {
            await use('Database').table('newtrash').insert({ 
                id: trash_data[i].id, 
                name: trash_data[i].name,
                type: trash_data[i].trash_type.name,
                company_name: trash_data[i].company[0].name,
                 status: trash_data[i].status[0].name, 
                category: trash_data[i].trash_category.name
                })
            // data.push(trash_data[i].id)
            // data.push(trash_data[i].name) 
            // data.push(trash_data[i].trash_type.name)
            // data.push(trash_data[i].trash_category.name)
            // data.push(trash_data[i].company[0].name)
            // data.push(trash_data[i].status[0].name)
        }
       

        return trash_data
    }

   
    // async trashTable()
    // {
    //     return await Database.table('trash_type').select('name')
    // }
    // async trashCategory()
    // {
    //     const Trash_Category = use('App/Models/Trash_Category')
    //     return await  Trash_Category.query().with('status').fetch()
    // }
    // async company()
    // {
    //     return await Database.table('company').select('name')
    // }
}

module.exports = TrashController

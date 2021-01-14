'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Trash_Category extends Model {

    static get table()
    {
        return 'trash_category'
    }
    
    trash(){
        return this.hasMany('App/Models/Trash','id','trash_category_id')
    }

    
}

module.exports = Trash_Category

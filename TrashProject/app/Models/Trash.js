'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Trash extends Model {

    static get table()
    {
        return 'trash'
    }

    trash_category(){
        return this.belongsTo('App/Models/Trash_Category')
    }

    trash_type(){
        return this.belongsTo('App/Models/Trash_Type')
    }

    company(){
        return this.hasMany('App/Models/Company', 'company_id', 'id')
    }

    status(){
        return this.hasMany('App/Models/Status', 'status_id', 'id')
    }
}

module.exports = Trash

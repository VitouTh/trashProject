'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TrashType extends Model {

    static get table()
    {
        return 'trash_type'
    }
    trash(){
        return this.hasMany('App/Models/Trash', 'id', 'trash_type_id')
    }

}

module.exports = TrashType

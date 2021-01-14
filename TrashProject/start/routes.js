'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'welcome')
Route.get('/trash', 'TrashController.trash')

// Route.get('/trashTable', 'TrashController.trashTable')

// Route.get('/trashCategory', 'TrashController.trashCategory')

// Route.get('/company', 'TrashController.company')

// Route.get('/data', 'TrashController.data')

Route.get('/newtrash', 'NewTrashController.index')

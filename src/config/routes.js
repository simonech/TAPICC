/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/



  // job
  'GET /job': {
    controller: 'JobController',
    action: 'find',
    swagger: {
      summary: 'List all Jobs',
      description: 'List all Jobs'
    }
  },
  'POST /job': {
    controller: 'JobController',
    action: 'create',
    swagger: {
      summary: 'Create a Job',
      description: 'Create a Job'
    }
  },

  'DELETE /job/:id': {
    controller: 'JobController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Job',
      description: 'Delete a Job'
    }
  },
  'GET /job/:id': {
    controller: 'JobController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Job',
      description: 'Get a Job'
    }
  },
  'PUT /job/:id': {
    controller: 'JobController',
    action: 'update',
    swagger: {
      summary: 'Update a Job',
      description: 'Update a Job'
    }
  },

  'POST /job/:id/submit': // todo -> add tasks and assets as optional parameters
  {
    controller: 'JobController',
    action: 'create',
    swagger: {
      summary: 'Submit a Job',
      description: 'Submit a Job, optionally with assets and tasks'
    }
  },

  'DELETE /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'destroy',
    swagger: {
      summary: 'Delete an Asset',
      description: 'Delete an Asset which belongs to a specific job'
    }
  },
  'GET /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'findOne',
    swagger: {
      summary: 'Get an Asset',
      description: 'Get an Asset which belongs to a specific job'
    }
  },
  'PUT /job/:parentid/asset/:id': {
    controller: 'AssetController',
    action: 'update',
    swagger: {
      summary: 'Update an Asset',
      description: 'Update an Asset which belongs to a specific job'
    }
  },
  'GET /job/:parentid/asset': {
    controller: 'AssetController',
    action: 'find',
    swagger: {
      summary: 'List all Assets',
      description: 'List all Assets which belongs to a specific job'
    }
  },
  'POST /job/:parentid/asset': {
    controller: 'AssetController',
    action: 'create',
    swagger: {
      summary: 'Create an Assets',
      description: 'Create an Assets which will belong to a specific job'
    }
  },

  'DELETE /job/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Task',
      description: 'Deletes a Task which belongs to a specific job'
    }
  },
  'GET /job/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Task',
      description: 'Gets a Task which belongs to a specific job'
    }
  },
  'PUT /job/:parentid/task/:id': {
    controller: 'TaskController',
    action: 'update',
    swagger: {
      summary: 'Update a Task',
      description: 'Updates a Task which belongs to a specific job'
    }
  },
  'GET /job/:parentid/task': {
    controller: 'TaskController',
    action: 'find',
    swagger: {
      summary: 'List all Task',
      description: 'Lists all Task which belong to a specific job'
    }
  },
  'POST /job/:parentid/task': {
    controller: 'TaskController',
    action: 'create',
    swagger: {
      summary: 'Create a Task',
      description: 'Creates a Task which will belong to a specific job'
    }
  },

  // todo -> make file upload and download work
  'POST /job/:parentid/asset/uploadFile': // todo -> this endpoint also creates an asset
  {
    controller: 'AssetController',
    action: 'uploadFile',
    swagger: {
      summary: 'Upload an asset file and create an asset',
      description: 'Upload an asset file and create an asset'
    }
  },
  'GET /job/:parentid/asset/:id/downloadFile': {
    controller: 'AssetController',
    action: 'downloadFile',
    swagger: {
      summary: 'Download an asset file',
      description: 'Download an asset file'
    }
  },
  'POST /job/:parentid/task/:id/uploadDeliverable': {
    controller: 'TaskController',
    action: 'uploadFile',
    swagger: {
      summary: 'Upload deliverable file',
      description: 'Upload deliverable file'
    }
  },
  'GET /job/:parentid/task/:id/downloadDeliverable': {
    controller: 'TaskController',
    action: 'downloadFile',
    swagger: {
      summary: 'Download deliverable file',
      description: 'Download deliverable file',
      produces: [
        'application/json'
      ],
      tags: [
        'Task'
      ],
      responses: {
        '200': {
          description: 'Deliverable file',
          content: {
            'application/json': {
              schema: {
                type: 'string',
                format: 'binary'
              }
            }
          }
        }
      }

    }
  },

  // task
  'GET /task': {
    controller: 'TaskController',
    action: 'find',
    swagger: {
      summary: 'List all Tasks',
      description: 'List all Tasks'
    }
  },

  'DELETE /task/:id': {
    controller: 'TaskController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Tasks',
      description: 'Delete a Tasks'
    }
  },
  'GET /task/:id': {
    controller: 'TaskController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Task',
      description: 'Get a Task'
    }
  },
  'PUT /task/:id': {
    controller: 'TaskController',
    action: 'update',
    swagger: {
      summary: 'Update a Task',
      description: 'Update a Task'
    }
  },

  // asset
  'GET /asset': {
    controller: 'AssetController',
    action: 'find',
    swagger: {
      summary: 'List all Assets',
      description: 'List all Assets'
    }
  },

  'DELETE /asset/:id': {
    controller: 'AssetController',
    action: 'destroy',
    swagger: {
      summary: 'Delete an Asset',
      description: 'Delete an Asset'
    }
  },
  'GET /asset/:id': {
    controller: 'AssetController',
    action: 'findOne',
    swagger: {
      summary: 'Get an Asset',
      description: 'Get an Asset'
    }
  },
  'PUT /asset/:id': {
    controller: 'AssetController',
    action: 'update',
    swagger: {
      summary: 'Update an Asset',
      description: 'Update an Asset'
    }
  },

  // webhook
  'GET /webhook': {
    controller: 'WebhookController',
    action: 'find',
    swagger: {
      summary: 'List all Webhooks',
      description: 'List all Webhooks'
    }
  },
  'POST /webhook': {
    controller: 'WebhookController',
    action: 'create',
    swagger: {
      summary: 'Create a Webhook',
      description: 'Create a Webhook'
    }
  },

  'DELETE /webhook/:id': {
    controller: 'WebhookController',
    action: 'destroy',
    swagger: {
      summary: 'Delete a Webhook',
      description: 'Delete a Webhook'
    }
  },
  'GET /webhook/:id': {
    controller: 'WebhookController',
    action: 'findOne',
    swagger: {
      summary: 'Get a Webhook',
      description: 'Get a Webhook'
    }
  },
  'PUT /webhook/:id': {
    controller: 'WebhookController',
    action: 'update',
    swagger: {
      summary: 'Update a Webhook',
      description: 'Update a Webhook'
    }
  }


};

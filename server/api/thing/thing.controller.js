/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var currentValue = 50;

var delta = 5;

var api = require('littlebits-cloud-http')
          .defaults({ 'access_token': '836d5b0323d8c7a0ded4dcff61c5dbd613d106fe0f01adbed581602ee3b17092' });

var output = api.output.defaults('243c200bf972', { 'percent': currentValue, 'duration_ms': -1 });

var _ = require('lodash');


function update() {
  if (currentValue > 100) {
    currentValue = 100;
  } else if (currentValue < 1) {
    currentValue = 1;
  }

  output('243c200bf972', { 'percent': currentValue, 'duration_ms': -1 }, function(err, result) {
    if (err) {
      console.log (err);
    }
    if (result == {}) {
      console.log (result);
    }
  });
}

update();

exports.index = function(req, res) {
  res.json([
  {
  name : 'Development Tools',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
  name : 'Server and Client integration',
  info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
  name : 'Smart Build System',
  info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
  name : 'Modular Structure',
  info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
  name : 'Optimized Build',
  info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
  name : 'Deployment Ready',
  info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }
  ]);
};

exports.up = function(req, res) {
  currentValue +=delta;
  update();
  res.json({currentValue: currentValue});
};
exports.down = function(req, res) {
  currentValue -=delta;
  update();
  res.json({currentValue: currentValue});
};

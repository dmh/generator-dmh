'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
   yeoman.Base.apply(this, arguments);
   this.sourceRoot(path.join(path.dirname(this.resolved), 'templates/felayout_t3kit'));
 },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-dmh') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy([
      this.templatePath() + '/**',
      this.templatePath() + '/**/.*',
      '!**/{gulpfile.js,bower.json,package.json,.git,.npmignore,.gitignore,wct.conf.js,docs,test}/**'],
      this.destinationPath()
    );
  },

  install: function () {
    // this.installDependencies();
  }
});

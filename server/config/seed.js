/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Session from '../api/session/session.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Session.find({}).removeAsync()
  .then(() => {
	  Session.createAsync({
      speaker: 'John N. King',
      title: 'Understanding and Preventing Cross-Site Request Forgery Attacks',
      abstract: "Ranked #8 on the OWASP Top 10, “Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.” (OWASP Wiki)<br><br>CSRF vulnerabilities are commonplace and easily missed by developers who are unfamiliar with this class of attack. Unlike injection vulnerabilities, they do not become apparent during testing unless you know exactly what to look for. This session will provide an introduction to CSRF vulnerabilities, and will include an attack demonstration and practical examples that prevent this type of vulnerability.",
      bio: "John is a web application developer with 10+ years of experience, with a focus on product management, user-experience, and application security. He has recently joined RIT ITS as a Senior Web Programmer / Analyst. He also serves as an officer of the Rochester chapters of OWASP and ISSA, and helps plan the annual Rochester Security Summit."
    })
    .then(() => {
      console.log('finished populating event sessions');
    });
  });
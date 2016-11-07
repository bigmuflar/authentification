var Heroes = require('./controllers/heroes'),
    Auth = require('./controllers/auth'),
    express = require('express');

module.exports = (app) =>{
    app.get('/logout', Auth.logout);
    app.post('/login', Auth.login);

    // app.get('/register')
    // http//localhost:3000/register
    app.post('/register', Auth.register);

    app.get('/', Auth.middlewares.session);


    // anythin below line 14 is protected
    app.all('/api*', Auth.middlewares.session);

    app.post('/api/heroes', Heroes.create);
    app.get('/api/heroes', Heroes.get);
    app.get('/api/heroes/:id', Heroes.get);

    // app.post('/api/villains', Villains.create);
    // app.get('/api/villains', Villains.get);
    // app.get('/api/villains/:id', Villains.get);

    // app.get('/:username')
    // app.get('/devaio')
    // app.get('/jiminikiz')
    // app.get('/jiminikiz')

    app.use(express.static('public'));
}

const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const config = require('../config');
const app = require('.');
console.log(app);


// Services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');

//Controller
const { HomeController, UserController, IdeaController, CommentController } = require('../controllers/index');

// routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { Comment, Idea, User } = require('../models');

// Repositoris

const { CommentRepository, UserRepository, IdeaRepository } = require('../repositories');


const container = createContainer();


container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),

    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    })

module.exports = container;
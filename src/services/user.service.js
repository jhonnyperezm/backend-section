const BaseService = require('./base.service');
let _userRepository = null;

class UserService extends BaseService {
    constructor({UserRepository}) {
        super(UserRepository);
    }

    async getUserByUsername(username){
        return await _userRepository.getUserByUsername(username);
    }

}

module.exports = UserService;
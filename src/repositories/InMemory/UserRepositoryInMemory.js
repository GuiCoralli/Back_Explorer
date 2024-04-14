class UserRepositoryInMemory {
    constructor() {
      this.users = [];
    }
  
    create({ name, email, password, is_admin = false }) {
      const user = {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        password,
        is_admin,
      };
  
      this.users.push(user);
  
      return user;
    }
  
    update(infosUpdated) {
      this.users = this.users.map(user => (user.id === infosUpdated.id ? infosUpdated : user));
    }
  
    findById(id) {
      return this.users.find(user => user.id === id) || null;
    }
  
    findByEmail(email) {
      return this.users.find(user => user.email === email) || null;
    }
  }
  
  module.exports = UserRepositoryInMemory;
  
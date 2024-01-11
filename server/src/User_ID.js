class UserSingleton {
      constructor() {
        if (!UserSingleton.instance) {
          this.userId = null;
          UserSingleton.instance = this;
        }
    
        return UserSingleton.instance;
      }
    
      setUserId(userId) {
        this.userId = userId;
      }
    
      getUserId() {
        return this.userId;
      }
    }
    
    const userSingleton = new UserSingleton();
    
module.exports = userSingleton;
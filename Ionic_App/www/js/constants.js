angular.module('starter')

.constant('API_SERVER', {
  url: 'http://33b1f980.ngrok.com/api'
})

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
});

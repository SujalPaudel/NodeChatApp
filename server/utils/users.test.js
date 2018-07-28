const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id : '321',
      name : 'Rajiv',
      room : 'Techy',
    },
    {
      id : '456',
      name : 'Bishal',
      room : 'Fashion'
    },
    {
      id : '789',
      name : 'Malhaar',
      room : 'Youtube'
    },
    {
      id : '101',
      name : 'Megha',
      room : 'Youtube'
    },
    {
      id : '922',
      name : 'Aswasthama',
      room : 'Techy'
    }
    ];
});

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id : '123',
      name : 'Sujal',
      room : 'Techy'
    };
    var responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '101';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(4);

  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(5);

  });

  it('should find user', () => {
    var userId = '321';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);

  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toBeFalsy();

  });


  it('should return names of Techy', () => {
    var userList = users.getUserList('Techy');
    expect(userList).toEqual(['Rajiv', 'Aswasthama']);
  });

  it('should return names of Youtube', () => {
    var userList = users.getUserList('Youtube');
    expect(userList).toEqual(['Malhaar', 'Megha']);
  });

});
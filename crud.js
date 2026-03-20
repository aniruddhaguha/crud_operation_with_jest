let users = [];

function createUser(user) {
  if (!user.id || !user.name) {
    throw new Error("Invalid user data");
  }
  users.push(user);
  return user;
}

function getUser(id) {
  return users.find(u => u.id === id) || null;
}

function updateUser(id, newData) {
  const user = users.find(u => u.id === id);
  if (!user) return null;
  Object.assign(user, newData);
  return user;
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

function resetUsers() {
  users = [];
}

module.exports = { createUser, getUser, updateUser, deleteUser, resetUsers };
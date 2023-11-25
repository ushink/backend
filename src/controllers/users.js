const getUsers = (request, response) => {
  // GET all users
};

const getUser = (request, response) => {
  // GET user
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
  // POST new user
  response.status(201);
  response.send(request.body);
};

const updateUser = (request, response) => {
  // PATCH user
};

const deleteUser = (request, response) => {
  // DELETE user
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

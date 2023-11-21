const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer(async (request, response) => {
  // Написать обработчик запроса:
  const url = new URL(request.url, `http://${request.headers.host}`);
  const query = url.searchParams;
  const name = query.get("hello");

  if (query.has("hello")) {
    // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
    if (name) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(`Hello, ${name}`);
      response.end();

      return;
    }
    // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
    response.writeHead(400, { "Content-Type": "text/plain" });
    response.write("Enter a name");
    response.end();

    return;
  }

  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  if (query.has("users")) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(getUsers());
    response.end();

    return;
  }
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello, word!");
    response.end();

    return;
  }
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
  response.writeHead(500, { "Content-Type": "text/plain" });
  response.end();
});

server.listen(3003, () => {
  console.log("Сервер запущен");
});

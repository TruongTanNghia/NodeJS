const crypto = require("crypto");

class TodoService {
  // Todo 1. Get all
  async getAll() {
    let uuid = crypto.randomUUID();
    const todo = [
      {
        id: uuid,
        name: "Trương Tấn Nghĩa",
        age: 23,
      },
      {
        id: uuid,
        name: "Nguyen Võ Money",
        age: 29,
      },
    ];
    return todo;
  }

  // Todo 2. Get detail
  async getDetail({ todoId }) {
    const todo = [
      {
        id: 1,
        name: "Trương Tấn Nghĩa",
        age: 23,
      },
      {
        id: uuid,
        name: "Nguyen Võ Money",
        age: 29,
      },
    ];

    const result = todo.filter((item) => item.id == todoId);
    return result;
  }

  // Todo 3. Create detail
  async create() {}

  // Todo 4. Update detail
  async update() {}

  // Todo 5. Delete id
  async delete() {}
}

module.exports = new TodoService();

export const oldSpec = {
  openapi: "3.0.0",
  info: {
    title: "To-dos",
    version: "1.0.0",
    description: "",
  },
  servers: {
    url: "https://todos.stoplight.io",
    description: "Production",
  },
  paths: {
    ["/todos"]: {
      get: {
        summary: "List Todos",
      },
    },
  },
};

export const newSpec = {
  openapi: "3.0.0",
  info: {
    title: "To-dos",
    version: "1.0.0",
    description: "",
  },
  servers: {
    url: "https://todos.stoplight.io",
    description: "Production",
  },
  paths: {
    ["/todos1"]: {
      post: {
        summary: "List Todos",
      },
    },
  },
};

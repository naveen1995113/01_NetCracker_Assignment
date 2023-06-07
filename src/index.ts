import {
  apiDiff,
  openapi3Rules,
  nonBreaking,
  breaking,
  allAnnotation,
  matchRule,
  Rules,
} from "api-smart-diff";

const pathArrayRules = (rules: Rules) =>
  matchRule(rules, ({ before, after }) => {
    const beforePath: string = String(before.key).replace(
      new RegExp("{.*?}", "g"),
      "*"
    );
    const afterPath: string = String(after.key).replace(
      new RegExp("{.*?}", "g"),
      "*"
    );
    return true;
  });

const customApi = {
  ...openapi3Rules,
  "/paths": pathArrayRules({
    "/": [nonBreaking, breaking, breaking],
    "/*": pathArrayRules({
      "/": [nonBreaking, breaking, nonBreaking],
      "/summary": allAnnotation,
      "/description": allAnnotation,
      "/*": openapi3Rules,
      "/servers": openapi3Rules,
      "/parameters": openapi3Rules,
    }),
  }),
};
export const differentPaths = () => {
  const oldSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
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

  const newSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
    },
    servers: {
      url: "https://todos.stoplight.io",
      description: "Production",
    },
    paths: {
      ["/todos1"]: {
        get: {
          summary: "List Todos",
        },
      },
    },
  };
  const diffPaths = apiDiff(oldSpec, newSpec, { rules: customApi });
  return diffPaths;
};

export const differentMethods = () => {
  const oldSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
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

  const newSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
    },
    servers: {
      url: "https://todos.stoplight.io",
      description: "Production",
    },
    paths: {
      ["/todos"]: {
        post: {
          summary: "List Todos",
        },
      },
    },
  };
  const diffMethods = apiDiff(oldSpec, newSpec, { rules: customApi });
  return diffMethods;
};

export const differentPathsAndMethods = () => {
  const oldSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
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

  const newSpec = {
    openapi: "3.0.0",
    info: {
      title: "To-dos",
      version: "1.0.0",
      description: "",
      contact: {
        name: "Stoplight Support",
        email: "support@stoplight.io",
        url: "https://www.stoplight.io",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT",
      },
      termsOfService: "https://stoplight.io/terms/",
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
  const diffPathsAndMethods = apiDiff(oldSpec, newSpec, { rules: customApi });
  return diffPathsAndMethods;
};

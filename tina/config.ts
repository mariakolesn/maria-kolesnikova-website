import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",

  clientId: "70d23e4b-f8c4-4a4c-9c99-a51653b6907b",
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },

  schema: {
    collections: [
      {
        name: "page",
        label: "Website",
        path: "content",
        format: "json",

        match: {
          include: "home",
        },

        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },

        fields: [
          {
            name: "headline",
            label: "Headline",
            type: "string",
          },
          {
            name: "text",
            label: "Text",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});

import { CardFactory } from "botbuilder";

export const addNewPRSchema = CardFactory.adaptiveCard({
  type: "AdaptiveCard",
  body: [
    {
      type: "TextBlock",
      text: "Añade nueva solicitud de revisión de PR:",
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "Input.Text",
      id: "title",
      placeholder: "Áñadir título",
      label: "Breve descripción de la PR",
    },
    {
      type: "Input.Text",
      id: "prUrl",
      placeholder: "Añade URL de la PR a revisar",
      label: "URL de la PR",
      style: "url",
      isRequired: true,
      errorMessage: "Por favor, añade una URL válida",
    },
    {
      type: "Input.Text",
      id: "jiraUrl",
      placeholder: "Añade URL de la tarea de Jira",
      label: "URL de la tarea de Jira",
    },
    {
      type: "Input.Text",
      id: "description",
      placeholder: "Añade descripción de la PR",
      label: "Descripción de la PR",
      isMultiline: true,
    },
    {
      type: "Input.ChoiceSet",
      id: "assignedTo",
      isMultiSelect: false,
      choices: [],
      "choices.data": {
        type: "Data.Query",
        dataset: "graph.microsoft.com/users?scope=currentContext",
      },
      placeholder: "Selecciona un usuario",
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "Input.Toggle",
              id: "urgent",
              label: "¿Es urgente?",
            },
          ],
        },
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "Input.Toggle",
              id: "onlyApprove",
              label: "¿Solo aprobación?",
            },
          ],
        },
      ],
    },
  ],
  actions: [
    {
      type: "Action.Submit",
      title: "Enviar",
      data: {
        action: "submitInfo",
      },
    },
  ],
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.2",
});

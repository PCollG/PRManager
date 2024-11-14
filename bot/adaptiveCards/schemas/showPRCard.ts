import { CardFactory } from "botbuilder";

export type showPRCardProps = {
  title: string;
  prUrl: string;
  jiraUrl: string;
  description: string;
  assignedTo: string;
  urgent: boolean;
  onlyApprove: boolean;
};

export const showPRCardSchema = ({
  title,
  prUrl,
  jiraUrl,
  description,
  assignedTo,
  urgent,
  onlyApprove,
}: showPRCardProps) =>
  CardFactory.adaptiveCard({
    type: "AdaptiveCard",
    body: [
      {
        type: "Container",
        style: "emphasis",
        items: [
          {
            type: "TextBlock",
            text: title,
            weight: "Bolder",
            size: "Large",
            wrap: true,
          },
          {
            type: "TextBlock",
            text: "Descripción detallada de la tarjeta.",
            wrap: true,
          },
          {
            type: "FactSet",
            facts: [
              {
                title: "Fecha de creación:",
                value: "2024-11-14",
              },
              {
                title: "Fecha de vencimiento:",
                value: "2024-12-01",
              },
              {
                title: "Estado:",
                value: "En progreso",
              },
            ],
          },
          {
            type: "ColumnSet",
            columns: [
              {
                type: "Column",
                width: "auto",
                items: [
                  {
                    type: "Image",
                    url: "https://ejemplo.com/imagen.jpg",
                    style: "Person",
                    size: "Small",
                  },
                ],
              },
              {
                type: "Column",
                width: "stretch",
                items: [
                  {
                    type: "TextBlock",
                    text: "Nombre de la persona asignada",
                    weight: "Bolder",
                    wrap: true,
                  },
                  {
                    type: "TextBlock",
                    text: "Asignado a",
                    isSubtle: true,
                    wrap: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    actions: [
      {
        type: "Action.Submit",
        title: "Aprobar",
        data: {
          action: "approve",
        },
      },
      {
        type: "Action.Submit",
        title: "Rechazar",
        data: {
          action: "reject",
        },
      },
    ],
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    version: "1.2",
  });

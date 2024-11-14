import { TurnContext } from "botbuilder";
import { addNewPRSchema } from "./adaptiveCards/schemas/addNewPR";
import {
  showPRCardProps,
  showPRCardSchema,
} from "./adaptiveCards/schemas/showPRCard";

export async function handleOnMessage(context: TurnContext) {
  const removedMentionText = TurnContext.removeRecipientMention(
    context.activity
  );
  const txt =
    removedMentionText?.toLowerCase()?.replace(/\n|\r/g, "")?.trim() ?? "";
  const keyword = "pr";

  if (txt.includes(keyword)) {
    await context.sendActivity({
      attachments: [addNewPRSchema],
    });
  }

  if (
    context.activity.value &&
    context.activity.value.action === "submitInfo"
  ) {
    await context.sendActivity({
      attachments: [
        showPRCardSchema(context.activity.value as showPRCardProps),
      ],
    });
  }
}

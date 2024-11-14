import { TeamsActivityHandler, TurnContext } from "botbuilder";
import { handleOnMessage } from "./messageHandlers";
import { handleOnMembersAdded } from "./eventHandlers";

export class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
    this.onMessage(async (context, next) => {
      await handleOnMessage(context);
      await next();
    });

    this.onMembersAdded(async (context, next) => {
      await handleOnMembersAdded(context);
      await next();
    });
  }
}

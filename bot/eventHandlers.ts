export async function handleOnMembersAdded(context) {
  const membersAdded = context.activity.membersAdded;
  for (let cnt = 0; cnt < membersAdded.length; cnt++) {
    if (membersAdded[cnt].id) {
      await context.sendActivity(
        `Hi there! I'm a Teams bot that will echo what you said to me.`
      );
      break;
    }
  }
}

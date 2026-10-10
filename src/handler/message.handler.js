import { decide } from "../utils/decide.utils.js";
import { getSelectedTags } from "../utils/getSelectedTags.js";
import { getImageFormNekosAPI } from "../utils/nekosAPI.utils.js";

export const messageHandler = async (ctx) => {
  try {
    const decision = await decide(ctx.msg.text);
    const selectedTags = getSelectedTags(decision.answers);
    const imageURL = await getImageFormNekosAPI(selectedTags);
    await ctx.replyWithPhoto(imageURL, { caption: `Tags: ${selectedTags}` });
  } catch (err) {
    if (err.error_code === 400) await ctx.reply("အဲ့လိုပုံမျိုးရှာမတွေ့ပါ။");
    else await ctx.reply(err.message);
  }
};

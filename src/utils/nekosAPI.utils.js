export async function getImageFormNekosAPI(tags) {
  const baseURL = "https://api.nekosapi.com/v4/images/random/file";
  const baseURLWithParams = `${baseURL}?tags=${tags}&rating=safe`;

  const getImage = await fetch(baseURLWithParams, { method: "GET" });
  const imageUrl = getImage.url;

  return imageUrl;
}

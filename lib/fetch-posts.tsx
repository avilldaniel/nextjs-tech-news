// separate component needed in order to use an environment variable
const loadPosts = async (country: String) => {
  return await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&pageSize=3&apiKey=${process.env.API_KEY}`
  );
};

export default loadPosts;

const loadPosts = async (country: String) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&pageSize=3&apiKey=${process.env.API_KEY}`
  );
  const posts = await res.json();
  return posts.articles;
};

export default loadPosts;

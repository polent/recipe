// Collection for posts
const posts = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
const latest = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse().slice(1, 7);
const featured = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse().slice(0, 1);
const feed = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();

module.exports = {
	posts,
	feed,
	latest,
	featured,
};

const { Post } = require('../models');

const postData = [
    {
        title: "Test Blog Post 1",
        body: "Tech blog information here.",
        user_id: 1
    },
    {
        title: "Multiple Blog Posts Can Be Submitted",
        body: "Tracked by user",
        user_id: 2
    },
    {
        title: "Another blog!",
        body: "Very nice blog!",
        user_id: 2

    },
    {
        title: "An article about Tech",
        body: "They have enhanced many languages for accessiblity.",
        user_id: 3
    },
    {
        title: "Blog Test",
        body: "This is the body of the blog post.",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
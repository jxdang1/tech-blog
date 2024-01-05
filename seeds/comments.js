const { Comment } = require('../models');

const commentData = [
    {
        comment_body: "Wow!",
        user_id: 1,
        post_id: 3,
        
    },
    {
        comment_body: "Comment on my post!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_body: "Amazing blog!",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_body: "Don't forget to reply to my post!",
        user_id: 1,
        post_id: 2,
        
    },
    {
        comment_body: "That's amazing, thanks for sharing!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_body: "This one is a bit iffy.",
        user_id: 3,
        post_id: 1,
        
    },
    {
        comment_body: "Hi! So glad you got a blog!",
        user_id: 3,
        post_id: 2,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
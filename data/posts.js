import { USERS } from "./users";
export const POSTS = [
    {
        imageUrl: 'https://i.ibb.co/FDgFRsx/wp2559621.jpg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'the days anybody loves.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theshiv',
                comment: 'It is the divine of all! super excited to be over there.'
            },
            {
                user: 'amansingh',
                comment: 'its raining heavy. its beautiful.'
            },

        ],
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/08/05/31/boys-1807545_640.jpg',
        user: USERS[1].user,
        likes: 2560,
        caption: 'the days anybody loves.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'theshiv',
                comment: 'It is the divine of all! super excited to be over there.'
            },
            {
                user: 'amansingh',
                comment: 'its raining heavy. its beautiful.'
            },

        ],
    },

]
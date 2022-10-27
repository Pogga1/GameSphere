if (post_title && post_body && genre) {const response = await fetch (`/api/post/${postID}`, {
    method: 'PUT',
    body: JSON.stringify({
        post_id,
        post_title, 
        post_body, 
        genre, 
    }),
    headers: {
        'Content-Type': 'application/json'
    },
})
}

if (post_title && post_body && genre) {
const response = await fetch (`/api/post/${postID}`, {
    method: 'DELETE',
    body: JSON.stringify({
        post_id,
        post_title, 
        post_body, 
        genre,
    }),
    headers: {
        'Content-Type':
        'application/json'
    },
})
}
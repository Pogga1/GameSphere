if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
        method: 'POST',
        body: JSON.stringify({
            postId,
            comment_text,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId,
            comment_text,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            postId,
            comment_text,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
if (post_title && post_body && genre) {
    const response = await fetch('/api/post', {
        method: 'POST',
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
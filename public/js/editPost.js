const editPostForm = async event => {
    event.preventDefault();
    const post_title = document.querySelector('input[name="title"]').value.trim();
    const genre = document.querySelector('input[name="genre"]').value.trim();
    const post_body = document.querySelector('input[name="content"]').value.trim();


    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/post/${postID}`, {
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
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-post')
    .addEventListener('submit', editPostForm);



const deletePost = async event => {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/post/${postID}`, {
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
    });

    if (response.ok) {
        document.location.reload('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#delete-post').addEventListener('click', deletePost);

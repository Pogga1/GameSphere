async function commentForm(event) {
  event.preventDefault();
  const comment_text = document
    .querySelector('input[name = "comment-info"]')
    .value.trim();

  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
      method: 'POST',
      body: JSON.stringify({
        postId,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(res.statusText);
    }
  }
}

document.querySelector('#add-comment').addEventListener('click', commentForm);

const updateCommentForm = async (event) => {
  event.preventDefault();

  document.querySelector('input[name = "updated-info"]').value.trim();

  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        postId,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(res.statusText);
    }
  }
};

document.querySelector('#update-comment').addEventListener('click', updateCommentForm);

const deleteCommentForm = async (event) => {
  event.preventDefault();

  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch(`/api/comment/${postId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        postId,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(res.statusText);
    }
  }
};

document
  .querySelector('#delete-comment')
  .addEventListener('click', deleteCommentForm);

const postForm = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name = "title"]').value;
  const post_body = document.querySelector('input[name = "content"]').value;

  const response = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      post_id,
      post_title,
      post_body,
      genre,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
// document.querySelector("#create-post").addEventListener("click", postForm);

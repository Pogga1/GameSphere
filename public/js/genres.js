const getGenre = async event => {
    event.preventDefault();
}

const { Post } = require('../../models')
if (Post.genre = "adventure") {
    //get by genre
}

switch (Post.genre) {
    case adventure:
        const allElements = document.getElementsByClass('adventure');
        for (let i = 0; i < allElements.length; i++) {
            return allElements[i]
        }
        break;

    case horror:

        break;
    case mmo:

        break;
    case rpg:

        break;
    case survival:

        break;

    default:
        break;
}

document.querySelectorAll('.adventure')
    .addEventListener('click', postForm)
document.querySelectorAll('.horror')
    .addEventListener('click', postForm)
document.querySelectorAll('.mmo')
    .addEventListener('click', postForm)
document.querySelectorAll('.rpg')
    .addEventListener('click', postForm)
document.querySelectorAll('.survival')
    .addEventListener('click', postForm)

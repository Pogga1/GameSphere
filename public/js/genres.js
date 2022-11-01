const getGenre = async (event) => {
  event.preventDefault();
};

const { Post } = require('../../models');
if ((Post.genre = 'adventure')) {
  //get by genre
}

switch (Post.genre) {
  case adventure:
    const adventure = document.getElementsByClass('adventure');
    for (let i = 0; i < adventure.length; i++) {
      return adventure[i];
    }
    break;

  case horror:
    const horror = document.getElementsByClass('horror');
    for (let i = 0; i < horror.length; i++) {
      return horror[i];
    }
    break;
  case mmo:
    const mmo = document.getElementsByClass('mmo');
    for (let i = 0; i < mmo.length; i++) {
      return mmo[i];
    }
    break;
  case rpg:
    const rpg = document.getElementsByClass('rpg');
    for (let i = 0; i < rpg.length; i++) {
      return rpg[i];
    }
    break;

  case survival:
    const survival = document.getElementsByClass('survival');
    for (let i = 0; i < survival.length; i++) {
      return survival[i];
    }
    break;

  default:
    break;
}

document.querySelectorAll('.adventure').addEventListener('click', getGenre);
document.querySelectorAll('.horror').addEventListener('click', getGenre);
document.querySelectorAll('.mmo').addEventListener('click', getGenre);
document.querySelectorAll('.rpg').addEventListener('click', getGenre);
document.querySelectorAll('.survival').addEventListener('click', getGenre);

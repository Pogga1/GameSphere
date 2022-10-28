const router = require("express").Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login',(req, res) => 
{if (req.session.logged_in) {
  res.redirect('/');
return} 
res.render('login')}
)


router.get('/post/:id', async (req, res) => {
try {
  const postData = await Post.findByPk(req.params.id, {include:[{model: User, attributes: ['username'], },{model: Comment, include:[User], }, ], });
  const post = postData.get({plain:true});
  res.render('post',{...post, logged_in:req.session.logged_in, });
}catch(err){
  res.status(500).JSON(err);
}
});


// router.get("/", async (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   try {
//     const dbgamesphereData = await Post.findAll({
//       // include: [
//       //   {
//       //  model: User,
//       //   },
//       // ],

//     });

//     const post = dbgamesphereData.map((post) =>
//       post.get({ plain: true })
//     );
//     console.log(req, res);
//     res.render("homepage", {
//       post,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// router.post("/", (req, res) => {

// });

module.exports = router;

const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/' withAuth, async (req, res) => {
    try {
        const = newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newPost);
    }catch(err) {
        res.status(404).json(err)
    }
});



router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req, res, {
            where:
            {
                id:req.params.id,
            }
        })
        if (postData>0) {
            res.status(200).end()
        } else{
            res.status(404).end()
        }
    } catch(err) {
        
    }
})

router.delete()
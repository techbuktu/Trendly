const express = require("express")
const router = express.Router()

const Feed = require('../../models/profile/Feed')
const Profile = require('../../models/profile/Profile')

/**
 * @route GET api/feeds
 * @desc  Get a list of all Feed instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Profile.find({})
        .then(feeds => {
            res.json({
                successMsg: `${feeds.length} Feeds were found.`,
                feed_list: feeds
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg:  `No Feeds have been published.`,
                error: err
            })
        })
})

/**
 * @route GET api/feeds/for/:profileId
 * @desc  Get all matching feeds posted by Profile instance with matching :profileId
 * @access Public 
 */
router.get('/for/:profileId', (req, res) => {
    

})

/**
 * @route GET api/feeds/:feedId
 * @desc  Get the matching Feed with _id of :feedId
 * @access Public 
 */
router.get('/:feedId', (req, res) => {
    Feed.findOne({ _id: req.params.feedId})
        .then(feed => {
            res.json({
                feed: feed
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `Feed not found. Please, check the Feed Id and try again.`,
                error: err
            })
        })

})

/**
 * @route POST api/feeds
 * @desc  Create a new Feed model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    const {content, profileId} = req.body

    if(!content || !profileId){
        return res.status(400).json({
            errorMsg: `Please, send all required fields' data.`
        })
    }

    //Check for the existence of a duplicate Feed
    Feed.findOne({ profileId: profileId, content: content})
        .then(duplicateFeed => {
            if(duplicateFeed){
                res.status(400).json({
                    errorMsg: `This Feed already exists.`
                })
            } else {
                //Create the new Feed 
                const newFeed = new Feed({
                    profileId: profileId, content: content
                })

                newFeed.save()
                    .then(new_feed => {
                        res.json({
                            new_feed: new_feed
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMsg: `New Feed could not be created.`,
                            error: err
                        })
                    })
            }
        })
})


/**
 * @route PUT api/feeds/:feedId
 * @desc  Update the matching Feed instance
 * @access Private
 */
router.put('/:feedId', (req, res) => {
    // Make sure the Feed exists
    Feed.findOne({ _id: req.params.feedId})
        .then(feed => {
            const updatedFields = Object.keys(req.body)

            //Initialize an object with fields to update
            let feedUpdates = {}
            updatedFields.mao(field => {
                feedUpdates[field] = req.body[field]
            })

            let query = {_id: req.params.feedId}

            Feed.updateOne(query, feedUpdates)
                .then(updatedFeed => {
                    res.json({
                        updated_feed: updatedFeed
                    })
                })
                .catch(updateError => {
                    res.status(500).json({
                        errorMsg: `This Feed (id: ${req.params.feedId}) could not be updated.`,
                        error: updateError
                    })
                })
        })
        .catch(err => res.status(400).json({error: err}))
})

/**
 * @route DELETE api/feeds/:feedId
 * @desc  Delete the matching Feed instance.
 * @access Private
 */
router.delete('/:feedId', (req, res) => {
    Feed.findById(req.params.feedId)
        .then(feed => {
            feed.remove()
                then(() => {
                    successMsg: `You have deleted this Feed (id: ${req.params.feedId})`
                })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
})

module.exports = router 
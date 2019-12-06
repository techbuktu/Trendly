const express = require("express")
const router = express.Router()


// Import/require the Profile model
const Profile = require('../../models/profile/Profile')

/**
 * @route GET api/profiles
 * @desc  Get a list of all Profile instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Profile.find()
        .then(profiles => {
            if(profiles.length > 0){
                res.json({
                    successMsg: `${profiles.length} Profiles were found.`,
                    profile_list : profiles
                })
            }else {
                res.status(404).json({
                    errorMsg: `Sorry, 0 Profiles were found.`
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: 'Sorry, no Profiles exist.'
            })
        })
})

/**
 * @route GET api/profiles/:profileId
 * @desc  Get the matching Profile with _id of :profileId
 * @access Public 
 */
router.get('/:profileId', (req, res) => {
    Profile.findOne({ _id: req.params.profileId})
        .then(profile => {
            if(profile){
                return res.json({
                    profile
                })
            }else {
                res.status(404).json({
                    errorMsg: `A Profile with id (${req.params.profileId}) does not exist.`
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `Profile with ID of {req.params.profileId} was not found.`,
                error: err
            })
        })

})

/**
 * @route POST api/profiles
 * @desc  Create a new Profile model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    const {user, about, profileImage} = req.body 

    //Check to make sure all required data were sent by client
    if(!user || !about || !profileImage){
        return res.status(400).json({
            errorMsg: `Please, send all fields' data.`
        })
    }

    //Make sure that no duplicate Profile instance exists
    Profile.findOne({ user})
        .then(duplicateProfile => {
            if(duplicateProfile){
                res.status(400).json({
                    errorMsg: `The specified User already has a Profile instance.`
                })
            }else {
                // Create a new Profile instance
                const newProfile = new Profile({
                    user, about, profileImage
                })
                newProfile.save()
                    .then(new_profile => {
                        res.json({
                            successMsg: `You have created a new Profile with ID ${new_profile._id}`,
                            new_profile: new_profile
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMsg: 'Sorry, a new Profile could not be instantiated. '
                        })
                    })
            }
        })
})


/**
 * @route PUT api/profiles/:profileId
 * @desc  Update the matching Profile instance
 * @access Private
 */
router.put('/:profileId', (req, res) => {

    //First: check to make sure a matching Profile instance exists
    Profile.findOne({ _id: req.params.profileId})
        .then(profile => {
            
            //Grab the updated Profile fields
            const updatedFields = Object.keys(req.body);

            //Create an object out of the updated fields
            let profileUpdates = {}
            updatedFields.map(field => profileUpdates[field] = req.body[field])

            // Create a query to search the DB's 'profiles' collection
            let query = { _id: req.params.profileId };

            //Query the 'profiles' collection in the DB to update the matching Profile instance and send response to requesting client
            Profile.updateOne(query, profileUpdates)
                .then(success => {
                    Profile.findOne({ _id: req.params.profileId})
                        .then(updatedProfile => {
                            res.json({
                                successMsg: `Profile (id: ${req.params.profileId}) has been updated`,
                                updated_profile: updatedProfile
                            })
                        })
                })
                .catch(updateError => {
                    res.status(500).json({
                        errorMsg: `Sorry, Profile (id: ${req.params.profileId}) could not be updated`,
                        error: updateError
                    })
                })

        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `This Profile (id: ${req.params.profileId}) was not found.`,
                error: err
            })
        })

})

/**
 * @route DELETE api/profiles/:profileId
 * @desc  Delete the matching Profile instance.
 * @access Private
 */
router.delete('/:profileId', (req, res) => {
    Profile.findById(req.params.profileId)
        .then(profile => {
            profile.remove()
                .then(() => {
                    successMsg: `This Profile (id: ${req.params.profileId}) was deleted.`
                })
                .catch(deleteError => {
                    res.status(400).json({
                        errorMsg: `Sorry, this Profile (id: ${req.params.profileId}) could not be deleted. Please, check your creds.`,
                        error: deleteError
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `This Profile (id: ${req.params.profileId}) was not found.`,
                error: err
            })
        })

})

module.exports = router 
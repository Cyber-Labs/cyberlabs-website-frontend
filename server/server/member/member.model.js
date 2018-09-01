const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * User Schema
 */
const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  projects: [{
    type:Schema.Types.ObjectId,
    ref: 'projects'
  }],

  website: {
    type: String
  },

  skills: {
    type: [String]
  },

  bio: {
    type: String
  },

  githubusername: {
    type: String
  },
 
  social: {
      youtube: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      },
    },

  team: [{type: String, required: true}],
  role: {
    type: String,
    required: true
  }

})




/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
// UserSchema.method({
// });

/**
 * Statics
 */
MemberSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.find()
      .exec()
      .then((members) => {
        if (members.length>0) {
          return members;
        }
        const err = new APIError('No such project exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef User
 */


module.exports = Member = mongoose.model('members', MemberSchema)
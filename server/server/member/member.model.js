const Promise = require("bluebird");
const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../helpers/APIError");

/**
 * User Schema
 */
const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects"
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

  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams"
  }],
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects"
  }]

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
    return this.findById(id)
      .exec()
      .then((member) => {
        if (member) {
          return member;
        }
        const err = new APIError("No such member exists!", httpStatus.NOT_FOUND);
        return Promise.reject(err);
      })
  },

  /**
   * List users in descending order of "createdAt" timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list() {
    return this.find()
      .exec();
  }
};

/**
 * @typedef User
 */


module.exports = mongoose.model("members", MemberSchema)
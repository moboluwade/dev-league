const { mongoose } = require('mongoose')

const adminSchema = require('../config/schema/Admin')
const blogSchema = require('../config/schema/Blog')
const emailSchema = require('../config/schema/Email')
const eventSchema = require('../config/schema/Event')


const Admin = mongoose.model('admin', adminSchema);
const Blog = mongoose.model('blogs', blogSchema);
const Email = mongoose.model('emails', emailSchema);
const Event = mongoose.model('events', eventSchema);

module.exports = { Admin, Blog, Email, Event }


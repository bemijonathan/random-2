
// const Tags = {
//     name: '',
//     id: '',
//     slug: ''
// }

// resource

const { hasMany } = require("@tensei/core");
const { resource, text, slug, timestamp, dateTime } = require("@tensei/core");

module.exports = resource('tag')
    .fields([
        text('name'),
        slug('slug').from("name"),
        hasMany('task'),
        timestamp('createdOn')
            .defaultRaw('current_timestamp(3)'),
        dateTime('updatedAt')
            .onUpdate(() => new Date())
        
    ])

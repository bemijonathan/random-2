
// const Asignee = {
//     name: 'string',
//     image: 'string',
//     tag_id: 'string'
// }

const { resource, hasMany, dateTime, timestamp, text, textarea } = require("@tensei/core");


module.exports = resource('assignee')
    .fields([
        textarea('name').searchable(),
        text('image'),
        timestamp('createdOn')
            .defaultRaw('current_timestamp(3)'),
        dateTime('updatedAt')
            .onUpdate(() => new Date()),
        hasMany('task')
    ])
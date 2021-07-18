const { resource, textarea, text, belongsTo, timestamp, dateTime } = require("@tensei/core")

// const comment = {
//     content: 'string',
//     url: Assignee.url,
//     tag: Task.title
// }

module.exports = resource('comment')
    .fields([
        textarea('content').searchable(),
        text('url'),
        text('tag'),
        timestamp('createdOn')
            .defaultRaw('current_timestamp(3)'),
        dateTime('updatedAt')
            .onUpdate(() => new Date()),
        belongsTo('task')

    ])
const { resource, select, text, bigInteger, dateTime, timestamp, hasOne, hasMany, belongsTo, integer, boolean } = require("@tensei/core")


module.exports = resource("task").fields([
    text('title').searchable(),
    select('status')
        .options([
            {
                label: 'Waiting Approval',
                value: 'waiting_approval'
            },
            {
                label: 'In Progress',
                value: 'in_progress'
            },
            {
                label: 'In Review',
                value: 'in_review'
            },
            {
                label: 'Verify',
                value: 'verify'
            },
            {
                label: 'Archived',
                value: 'archived'
            },
            {
                label: 'Closed',
                value: 'closed'
            }
        ]),
    integer('price').min(1),
    boolean('current_task '),
    timestamp('createdOn')
        .defaultRaw('current_timestamp(3)'),
    dateTime('updatedAt')
        .onUpdate(() => new Date()),
    belongsTo('assignee'),
    hasMany('comment'),
    belongsTo('tag')
]).perPageOptions([6])
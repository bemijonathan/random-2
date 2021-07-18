const { route } = require("@tensei/core")



module.exports = route('Get user invoices Analytics')
    .get()
    .path('tasks/analytics')
    .handle(async (request, response) => {
        try {
            const { manager, params } = request

            const task_count = {}
            task_count.completed = await manager.count('Task', { status: 'verify' })
            task_count.active = await manager.count('Task', {
                $or: [
                    { status: 'in_progress' },
                    { status: 'in_review' },
                    { status: 'verify' },
                ]
            })
            task_count.archived = await manager.count('Task', { status: 'archieved' })
            task_count.closed = await manager.count('Task', { status: 'closed' })
            return response.json(task_count)
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }

    })

    // {
    //     label: 'Waiting Approval',
    //     value: 'waiting_approval'
    // },
    // {
    //     label: 'In Progress',
    //     value: 'in_progress'
    // },
    // {
    //     label: 'In Review',
    //     value: 'in_review'
    // },
    // {
    //     label: 'Verify',
    //     value: 'verify'
    // },
    // {
    //     label: 'Archived',
    //     value: 'archived'
    // },
    // {
    //     label: 'Closed',
    //     value: 'closed'
    // }
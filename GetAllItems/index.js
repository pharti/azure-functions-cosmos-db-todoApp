module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // const allTasks = context.bindings.getAllTasks;
     const allTasks = [{
         taskId:"1",
         task:"Read Sapient",
     },
     {
        taskId:"2",
        task:"Go Running",
    }]

    context.res = {
        status: 200, /* Defaults to 200 */
        headers:{"Content-Type":"application/json"},
        body: {
            allTasks:allTasks,
        }
    };
}
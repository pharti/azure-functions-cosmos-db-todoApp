module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const task = req;

    if (task == null) {
        context.res = {
            status: 400,
            header: { "Content-Type": "application/json" },
            body: "Body can not be empty"
        }
        return;
    }
    context.res = {
        body: task
    };
}
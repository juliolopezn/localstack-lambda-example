module.exports.handler = (event, context, callback) => {
    console.log('Lambda function triggered');
    console.log('Event: ', JSON.stringify(event));
    console.log('Context: ', JSON.stringify(context));
    console.log('Callback: ', JSON.stringify(callback));
}

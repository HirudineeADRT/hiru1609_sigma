let AWS = require('aws-sdk');
const recog = new AWS.Rekognition();
exports.handler = function(event, context, callback) {
    recog.detectLabels({
        Image:{
            S3Object:{
                Bucket: bucket,
                Name: name
            }
        },
        Readlabels : 1
    }).promise()
    .then(data =>{

    })
    .catch(err => {
            console.log(err, err.stack);
            callback(err); // an error occurred
        });
    callback(null, {"message": "Successfully executed"});
}
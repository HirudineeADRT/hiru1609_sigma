let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    console.log(event);
    let img = Buffer.from(event.body, "base64");
    s3.putObject({
        "Body": image,
        "Bucket": "hirudinee0508",
        "Key": "test",
        "ACL": "public-read"
    })
        .promise()
        .then(data => {
            console.log(data);           
                callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "headerName": "headerValue"
        },
        "body": "..."
    });
        })
        .catch(err => {
            console.log(err, err.stack);
            callback(err); // an error occurred
        });

}
var AWS = require('aws-sdk');
export const dynamoDb : any = () => {
    // Set the region 
    AWS.config.update({ region: 'us-east-2' });
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb;
}

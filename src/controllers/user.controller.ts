
import { organizationParams, addProjectsParams } from '../middleware';
import { config } from '../config/config';
import { dynamoDb } from '../dbConnections';
// import * as uuid from "uuid";
const uuid = require('uuid');

export const createOrganization = async (req: any, res: any) => {
    try {
        const params: any = await organizationParams(req.body);
        if (!params) {
            res.status(400).json({ meesage: config.messages.emptyParams });
        } else {
            // Create the DynamoDB service object

            let dbParams = {
                TableName: config.collections.organizations,
                Item: params
            };
            // Call DynamoDB to add the item to the table
            await dynamoDb().put(dbParams, function (err: any, data: any) {
                if (err) {
                    console.log("Error", err);
                } else {
                    console.log("Success", data);
                    res.status(200).json({
                        message: config.messages.Inserted,
                    })
                }
            })

        }
    } catch (error) {
        console.log("error", error);

    }
}

export const getOrganizations = async (req: any, res: any) => {
    try {
        var dbParams = {
            KeyConditionExpression: "begins_with(#PK, ORG)",
            TableName: config.collections.organizations,
        };
        await dynamoDb().query(dbParams, function (err: any, data: any) {
            if (err) console.log(err, err.stack);
            else console.log(data);

        });

    } catch (error) {
        console.log("error", error);

    }
}

export const addProjects = async (req: any, res: any) => {
    try {
        const params: any = await addProjectsParams(req.body);
        if (!params) {
            res.status(400).json({ meesage: config.messages.emptyParams });
        } else {
            // Create the DynamoDB service object

            let dbParams = {
                TableName: config.collections.organizations,
                Item: params
            };
            // Call DynamoDB to add the item to the table
            await dynamoDb().put(dbParams, function (err: any, data: any) {
                if (err) {
                    console.log("Error", err);
                } else {
                    console.log("Success", data);
                    res.status(200).json({
                        message: config.messages.Inserted,
                    })
                }
            })

        }
    } catch (error) {
        console.log("error", error);

    }
}
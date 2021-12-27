export const config: any = {
    "name": "Configseruration",
    "project": "User-Hobbies",
    "database": {
        "uri": "mongodb://localhost:27017/user-hobbies?readwritePreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
        "devIp": "40.77.17.193",
        "prodIp": "20.102.74.14",
        "devDB": "mongodb://admin:Swopple2021@10.0.0.4:27017/dbswopple?authSource=admin&w=1",
        "prodDB": "mongodb://admin:Sw0pple2021$$@10.0.0.4:27017/dbswopple_prod?authSource=admin&w=1",
        "liveIp": "10.0.0.4",
        "user": "admin",
        "password": "Sw0pple2021$$",
        "database": "admin",
        "connectionLimit": 30,
        "mutipleStatements": "true",
        "charset": "utf8mb4"
    },
    "version": "1.0.0",
    "port": 3000,
    "contentType": {
        "appJson": "application/json",
        "textHtml": "text/html",
        "int": "integer"
    },
    "api": {
        "v1": {
            "default": "/",
            "createOrganization": "/api/v1/createOrganization",
            "getOrganizations": "/api/v1/getOrganizations",
            "addProjects": "/api/v1/addProjects",
            
        }
    },
    "messages": {
        "emptyParams": "Params can't be blank",
        "Inserted": "Successfully Inserted",
        "Deleted": "Successfully Deleted",
        "Updated": "Successfully Updated",
    },
    "collections": {
        organizations : "Organizations"
    }

}
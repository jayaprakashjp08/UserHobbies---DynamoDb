const uuid = require('uuid');
export const organizationParams = (body: any) => {
    if (body.orgName && body.issueDate && body.noEmp) {
        const orgId = uuid.v4();
        return {
            PK: `ORG#${orgId}`,
            SK: `#METADATA#${orgId}`,
            orgName: body.orgName.toString(),
            issueDate: body.issueDate.toString(),
            noEmp: body.noEmp || 0,
            branches: body.branches || 0
        }
    } else {
        return false;
    }
}

export const addProjectsParams = (body: any) => {
    if (body.orgId && body.projectName && body.projectType && body.startDate && body.estimatedTime && body.noEmp) {
        const projectId = uuid.v4();
        return {
            PK: body.orgId,
            SK: `#PRO#${body.projectType}#${projectId}`,
            projectId: projectId,
            projectName: body.projectName.toString(),
            startDate: body.startDate.toString(),
            noEmp: body.noEmp || 0
        }
    } else {
        return false;
    }
}


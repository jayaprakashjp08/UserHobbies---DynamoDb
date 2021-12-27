import { config } from '../config/config'
import {createOrganization,getOrganizations, addProjects} from '../controllers/user.controller';
// import {insertHobbies,updateHobbies, deleteHobbies, getHobbies} from '../controllers/hobbies.controller';

module.exports = function (router: any) {
    let api = config.api;
    //CRUD operations for users collection
    router.post(api.v1.createOrganization, createOrganization);
    router.get(api.v1.getOrganizations, getOrganizations);
    router.post(api.v1.addProjects, addProjects);

}
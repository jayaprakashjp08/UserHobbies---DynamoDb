
// import { insertParams, updateParams, deleteParams, getParams } from '../middleware';
// import { config } from '../config/config';

// export const insertHobbies = async (req: any, res: any) => {
//     try {
//         const params = await insertParams(req.body);
//         if (!params) {
//             res.status(400).json({ meesage: config.messages.emptyParams });
//         } else {
           
//             res.status(200).json({
//                 message: config.messages.Inserted,
//             })
//         }
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// export const updateHobbies = async (req: any, res: any) => {
//     try {
//         const params: any = await updateParams(req.query, req.body);
//         if (!params) {
//             res.status(400).json({ meesage: config.messages.emptyParams });
//         } else {
            
//             res.status(200).json({
//                 message: config.messages.updated,
//             })
//         }
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// export const deleteHobbies = async (req: any, res: any) => {
//     try {
//         const params = await deleteParams(req.query);
//         if (!params) {
//             res.status(400).json({ meesage: config.messages.emptyParams });
//         } else {
        
//             res.status(200).json({
//                 message: config.messages.Deleted,
//             })
//         }
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// export const getHobbies = async (req: any, res: any) => {
//     try {
//         const params = await getParams(req.query);
//         if (!params) {
//             res.status(400).json({ meesage: config.messages.emptyParams });
//         } else {
           
//             res.status(200).json({
//                 message: config.messages.Deleted,
//             })
//         }
//     } catch (error) {
//         console.log("error", error);
//     }
// }
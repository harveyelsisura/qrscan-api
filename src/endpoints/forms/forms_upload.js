const forms = require('../../models/forms'),
    { sendError, sendResponse } = require('../../utils/responses_utils'),
    path = require("path"),
    fs = require('fs');

module.exports = async function (req, res, next) {

    try {
        console.log(req.files.file)

        // new Promise((resolve, reject) => {
        //     try {
        //         console.log(file);
        //         let oldPath = file.path,
        //             fileSize = file.size,
        //             fileExt = file.name.split('.').pop(),
        //             fileIndex = oldPath.lastIndexOf('/') + 1,
        //             fileName = file.name,
        //             newPath = path.join(process.cwd(), '/storage/file_transfer/', fileName);

        //         let fileObj = {
        //             old_path: oldPath,
        //             file_size: fileSize,
        //             file_ext: fileExt,
        //             file_index: fileIndex,
        //             file_name: fileName,
        //             new_path: newPath
        //         };
        //         fs.readFile(oldPath, (err, data) => {
        //             fs.writeFile(newPath, data, (err) => {
        //                 fs.unlink(oldPath, (err) => {
        //                     if (err) {
        //                         console.log(err);
        //                         sendError(res, err, "Error creating Request Information");
        //                     }
        //                     else {
        //                         resolve(fileObj);
        //                     }
        //                 });
        //             });
        //         });
        //     }
        //     catch (err) {
        //         console.log(err);
        //         sendError(res, err, "Error creating Request Information");
        //     }
        // });

        // var uploadedFile = {}
        // if (req.files.file) {
        //     uploadedFile = await uploadFile(req.files.file);
        // }
        // var to_upload = {
        //     forms: uploadedFile
        // }
        // forms.create(to_upload)
        sendResponse(res, 200, CODE_SUCCESS, "File Successfully added");

    }
    catch (e) {
        console.log(e);
        sendError(res, e, "Error creating Request Information");
    }
};
import multer from "multer";
import multerConfig from "../config/multerConfig";

import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photo");

export default new (class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { student_id: studentId } = req.body;
        if (!studentId) {
          return res.status(400).json({
            errors: ["Bad student id"],
          });
        }

        const { originalname: originalName, filename } = req.file;
        const photo = await Photo.create({
          original_name: originalName,
          filename,
          student_id: studentId,
        });

        return res.json(photo);
      } catch (error) {
        return res.status(400).json({
          errors: ["Student not exists"],
        });
      }
    });
  }
})();

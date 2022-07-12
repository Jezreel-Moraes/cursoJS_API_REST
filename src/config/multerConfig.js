import multer, { MulterError } from "multer";
import { extname, resolve } from "path";

const randomValue = () => Math.floor(Math.random() * 89_999 + 10_000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(
        new MulterError("Invalid file: only PNG and JPEG files accepted")
      );
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomValue()}${extname(file.originalname)}`);
    },
  }),
};

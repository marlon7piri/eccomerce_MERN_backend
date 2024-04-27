import { v2 as cloudinary } from "cloudinary";
import {
  API_KEY_CLOUDINARY,
  API_SECRET_CLOUDINARY,
  CLOUD_NAME,
} from "../config";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY_CLOUDINARY,
  api_secret: API_SECRET_CLOUDINARY,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "tienda_bolsas",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};

import {config} from 'dotenv'
config()

export const  DB_HOST= process.env.DB_HOST || bgwoduztu8xjliztcii5-mysql.services.clever-cloud.com
export const DB_DATABASE=process.env.DB_DATABASE || bgwoduztu8xjliztcii5
export const DB_USE=process.env.DB_USE || u5t4yk2qcgcxyhtu
export const DB_PASSWORD=process.env.DB_PASSWORD || 'C5yaJuqk9T7RIZ21bPBF'
export const DB_PORT=process.env.DB_PORT || 3306
export const PORT=process.env.PORT || 3000
export const JWT_SECRET = process.env.JWT_SECRET || 'clave';
export const CLOUDINARY_CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME || 'api_2024'
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY || '519959443575498'
export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET || 'cpnkX0l9O1QIgA8iJn1rsVRyo1I'

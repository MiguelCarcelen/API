import { Router } from "express"
import multer  from 'multer';
import {getProductos,getProductosxid,postProductos,putProductos,patchProductos,deleteProductos} from  '../controladores/productosCtrl.js'

//configurar multer para almcenar las imagenes
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');//carpeta donde se guardan las imagenes
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload=multer({storage});
const router=Router()
// armar nuestras rutas

router.get('/productos',getProductos)//select
router.get('/productos/:id',getProductosxid)//select por ID
router.post('/productos',upload.single('image'),postProductos) //inserta nuevo
router.put('/productos/:id',upload.single('image'),putProductos) //update modifica todo
router.patch('/productos/:id',upload.single('image'),patchProductos)//update modifica el especifico
router.delete('/productos/:id',deleteProductos) //delete

export default router 
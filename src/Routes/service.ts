import { Router } from "express";
import service from "../Controllers/service";
import verify from "../middlewares/verify_Token"
import verify_pro from "../middlewares/verifiy_professional";
const router = Router();




router.route('/viewAll').get(service.viewAll);
router.route('/viewMyServices').get([verify], service.viewAllmyService);
router.route("/update/:service_id").patch(service.UpdateService);
router.route("/delete/:service_id").delete(service.deleteService);
router.route("/getoneservice/:service_id").get(service.Oneservice);
router.route('/create').post([verify, verify_pro], service.create);





export default router;
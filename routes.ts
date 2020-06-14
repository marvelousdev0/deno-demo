import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controllers/employees.ts";

const router = new Router();

router
  .get("/api/v1/employees", getEmployees)
  .get("/api/v1/employees/:employeeId", getEmployee)
  .post("/api/v1/employees", addEmployee)
  .put("/api/v1/employees/:employeeId", updateEmployee)
  .delete("/api/v1/employee/:employeeId", deleteEmployee);

export default router;

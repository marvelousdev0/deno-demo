import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Employee } from "../types.ts";

let employees: Employee[] = [
  {
    employeeId: "EMP001",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.834Z",
    dateRelieved: "2020-03-22T07:41:23.469Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP002",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.835Z",
    dateRelieved: "2020-03-22T07:41:23.470Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP003",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.835Z",
    dateRelieved: "2020-03-22T07:41:23.470Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP004",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.836Z",
    dateRelieved: "2020-03-22T07:41:23.471Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP005",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.837Z",
    dateRelieved: "2020-03-22T07:41:23.472Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP006",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.837Z",
    dateRelieved: "2020-03-22T07:41:23.472Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP007",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.839Z",
    dateRelieved: "2020-03-22T07:41:23.474Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP008",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.839Z",
    dateRelieved: "2020-03-22T07:41:23.474Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP009",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.840Z",
    dateRelieved: "2020-03-22T07:41:23.475Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
  {
    employeeId: "EMP010",
    firstName: "Zion",
    lastName: "Reichel",
    jobTitle: "Chief Solutions Liaison",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Marketing",
    phone: "031-336-3958",
    email: "Elza.Paucek@yahoo.com",
    salary: "443.45",
    dateJoined: "2019-07-29T14:28:39.840Z",
    dateRelieved: "2020-03-22T07:41:23.475Z",
    managerName: "Alek Lesch",
    department: "Baby",
    productName: "Unbranded Cotton Table",
    city: "Hipolitoland",
  },
];

// @desc    Get all employees
// @route   GET /api/v1/employees
const getEmployees = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: employees,
  };
};

// @desc    Get single product
// @route   GET /api/v1/employees/:id
const getEmployee = ({
  params,
  response,
}: {
  params: { employeeId: string };
  response: any;
}) => {
  const employee: Employee | undefined = employees.find(
    (p) => p.employeeId === params.employeeId
  );

  if (employee) {
    response.status = 200;
    response.body = {
      success: true,
      data: employee,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found",
    };
  }
};

// @desc    Add product
// @route   Post /api/v1/employees
const addEmployee = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const employee: Employee = body.value;
    employee.employeeId = v4.generate();
    employees.push(employee);
    response.status = 201;
    response.body = {
      success: true,
      data: employee,
    };
  }
};

// @desc    Update product
// @route   PUT /api/v1/employees/:id
const updateEmployee = async ({
  params,
  request,
  response,
}: {
  params: { employeeId: string };
  request: any;
  response: any;
}) => {
  const employee: Employee | undefined = employees.find(
    (p) => p.employeeId === params.employeeId
  );

  if (employee) {
    const body = await request.body();

    const updateData: {
      firstName?: string;
      lastName?: string;
      jobTitle?: string;
    } = body.value;

    employees = employees.map((p) =>
      p.employeeId === params.employeeId ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      success: true,
      data: employees,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No employee found",
    };
  }
};

// @desc    Delete product
// @route   DELETE /api/v1/product/:id
const deleteEmployee = ({
  params,
  response,
}: {
  params: { employeeId: string };
  response: any;
}) => {
  employees = employees.filter((p) => p.employeeId !== params.employeeId);
  response.body = {
    success: true,
    msg: "Employee removed",
  };
};

export {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};

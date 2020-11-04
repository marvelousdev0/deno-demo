import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Employee } from "../types.ts";

let employees: Employee[] = [
  {
    employeeId: "EMP001",
    firstName: "Arlie",
    lastName: "Hegmann",
    jobTitle: "District Directives Developer",
    prefix: "Mr.",
    suffix: "I",
    jobArea: "Accountability",
    phone: "1-123-625-3344",
    email: "Alfredo.Zemlak@gmail.com",
    salary: "178.99",
    dateJoined: "2019-12-29T07:01:59.670Z",
    dateRelieved: "2020-03-04T20:47:25.869Z",
    managerName: "Pattie Hoppe",
    department: "Automotive",
    productName: "Ergonomic Cotton Car",
    city: "Trompfort",
  },
  {
    employeeId: "EMP002",
    firstName: "Brendan",
    lastName: "Swift",
    jobTitle: "Dynamic Assurance Technician",
    prefix: "Mrs.",
    suffix: "DVM",
    jobArea: "Markets",
    phone: "(287) 328-1726 x785",
    email: "George.Turcotte70@gmail.com",
    salary: "254.04",
    dateJoined: "2020-03-24T21:03:02.087Z",
    dateRelieved: "2019-12-26T02:36:01.256Z",
    managerName: "Haskell Mueller",
    department: "Clothing",
    productName: "Generic Steel Chips",
    city: "Carterstad",
  },
  {
    employeeId: "EMP003",
    firstName: "Eleanore",
    lastName: "Ryan",
    jobTitle: "Internal Metrics Administrator",
    prefix: "Dr.",
    suffix: "PhD",
    jobArea: "Creative",
    phone: "1-584-389-1491 x22676",
    email: "Coralie.Block18@gmail.com",
    salary: "615.57",
    dateJoined: "2020-04-28T04:51:56.355Z",
    dateRelieved: "2020-05-17T19:29:43.511Z",
    managerName: "Dallin Toy",
    department: "Music",
    productName: "Handmade Concrete Chicken",
    city: "Langmouth",
  },
  {
    employeeId: "EMP004",
    firstName: "Ashleigh",
    lastName: "Johns",
    jobTitle: "Regional Web Strategist",
    prefix: "Ms.",
    suffix: "DDS",
    jobArea: "Accounts",
    phone: "160-822-9353 x5863",
    email: "Florian.Cummerata@yahoo.com",
    salary: "234.59",
    dateJoined: "2020-03-08T12:50:29.063Z",
    dateRelieved: "2020-05-31T15:55:56.861Z",
    managerName: "Eric Stiedemann",
    department: "Music",
    productName: "Gorgeous Concrete Car",
    city: "Millertown",
  },
  {
    employeeId: "EMP005",
    firstName: "Marianne",
    lastName: "Kovacek",
    jobTitle: "National Group Officer",
    prefix: "Mrs.",
    suffix: "Sr.",
    jobArea: "Usability",
    phone: "1-104-236-1409 x3095",
    email: "Carmen_Rohan@yahoo.com",
    salary: "931.00",
    dateJoined: "2019-09-03T21:53:31.756Z",
    dateRelieved: "2020-01-27T07:33:48.053Z",
    managerName: "Jasper Sawayn",
    department: "Electronics",
    productName: "Rustic Rubber Shoes",
    city: "East Billshire",
  },
  {
    employeeId: "EMP006",
    firstName: "Annabelle",
    lastName: "Lang",
    jobTitle: "Dynamic Communications Designer",
    prefix: "Mr.",
    suffix: "PhD",
    jobArea: "Security",
    phone: "1-543-239-4161 x998",
    email: "Gladys_Kautzer78@yahoo.com",
    salary: "0.15",
    dateJoined: "2019-06-23T21:47:31.923Z",
    dateRelieved: "2020-05-18T08:10:01.602Z",
    managerName: "June Carroll",
    department: "Sports",
    productName: "Handmade Fresh Chair",
    city: "Litzymouth",
  },
  {
    employeeId: "EMP007",
    firstName: "Emmy",
    lastName: "Rosenbaum",
    jobTitle: "Principal Metrics Designer",
    prefix: "Mrs.",
    suffix: "Jr.",
    jobArea: "Program",
    phone: "244.448.7498",
    email: "Kadin10@yahoo.com",
    salary: "895.76",
    dateJoined: "2020-02-12T07:38:36.659Z",
    dateRelieved: "2019-06-17T12:54:07.900Z",
    managerName: "Deja Emmerich",
    department: "Kids",
    productName: "Intelligent Steel Shoes",
    city: "Turnerland",
  },
  {
    employeeId: "EMP008",
    firstName: "Shayne",
    lastName: "Rogahn",
    jobTitle: "Legacy Web Developer",
    prefix: "Miss",
    suffix: "PhD",
    jobArea: "Quality",
    phone: "184-024-3869",
    email: "Halie73@hotmail.com",
    salary: "846.70",
    dateJoined: "2020-01-27T15:13:50.193Z",
    dateRelieved: "2019-07-29T07:07:29.905Z",
    managerName: "Casimir Schoen",
    department: "Kids",
    productName: "Tasty Granite Sausages",
    city: "Summertown",
  },
  {
    employeeId: "EMP009",
    firstName: "Virgie",
    lastName: "Cartwright",
    jobTitle: "Internal Accounts Supervisor",
    prefix: "Mrs.",
    suffix: "IV",
    jobArea: "Security",
    phone: "468-228-3537",
    email: "Stephania.Kerluke@gmail.com",
    salary: "832.32",
    dateJoined: "2019-07-03T00:05:31.647Z",
    dateRelieved: "2019-09-23T07:54:43.215Z",
    managerName: "Merl Schroeder",
    department: "Grocery",
    productName: "Licensed Rubber Fish",
    city: "Donmouth",
  },
  {
    employeeId: "EMP010",
    firstName: "Zena",
    lastName: "Kemmer",
    jobTitle: "Internal Paradigm Supervisor",
    prefix: "Mrs.",
    suffix: "Jr.",
    jobArea: "Intranet",
    phone: "(532) 622-3178 x235",
    email: "Felix_Gleichner@hotmail.com",
    salary: "358.77",
    dateJoined: "2019-11-08T05:19:22.360Z",
    dateRelieved: "2020-03-08T09:45:22.367Z",
    managerName: "Fanny Kerluke",
    department: "Kids",
    productName: "Tasty Frozen Ball",
    city: "New Gwenchester",
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

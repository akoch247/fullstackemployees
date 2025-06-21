import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({
    name: "Steve",
    birthday: "1981-01-01",
    salary: 75000,
  });

  await createEmployee({
    name: "Steven",
    birthday: "1961-01-01",
    salary: 75500,
  });

  await createEmployee({
    name: "Stevie",
    birthday: "1989-01-01",
    salary: 75550,
  });

  await createEmployee({
    name: "Stev",
    birthday: "1987-01-01",
    salary: 75001,
  });

  await createEmployee({
    name: "Stephen",
    birthday: "1951-01-01",
    salary: 75600,
  });

  await createEmployee({
    name: "Stephan",
    birthday: "1971-01-01",
    salary: 75030,
  });

  await createEmployee({
    name: "Steph",
    birthday: "1941-01-01",
    salary: 70000,
  });

  await createEmployee({
    name: "Stephanie",
    birthday: "1981-02-01",
    salary: 71000,
  });

  await createEmployee({
    name: "Stefan",
    birthday: "1921-01-01",
    salary: 66000,
  });

  await createEmployee({
    name: "Stefano",
    birthday: "1991-01-01",
    salary: 95000,
  });
}

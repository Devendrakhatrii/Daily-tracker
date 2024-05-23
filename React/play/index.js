const data = [
  { id: 1, name: "ram", role: ["admin"] },
  { id: 2, name: "sita", role: ["user", "manager"] },
];

const withMyDet = data.push({ id: 3, name: "devendra", role: ["CEO"] });

console.log(withMyDet);

const admin = data.filter((item) => item.role.includes("admin"));
console.log(admin);

const other = data.filter((item) => !item.role.includes("admin"));
console.log(other);

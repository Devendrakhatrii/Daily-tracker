const roleA = ["admin", "manager"];
const roleB = ["admin", "reseptionist"];

const check = (systemRole, userRole) => {
  return systemRole.some((role) => userRole.includes(role));
};

console.log(check(roleA, roleB));


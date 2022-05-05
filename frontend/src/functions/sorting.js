//Staff sorting
//Sort firstname
export const sortFirstname = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.firstname > b.firstname ? 1 : b.firstname > a.firstname ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.firstname < b.firstname ? 1 : b.firstname < a.firstname ? -1 : 0
      );
  }
};

//Sort lastname
export const sortLastname = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.lastname > b.lastname ? 1 : b.lastname > a.lastname ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.lastname < b.lastname ? 1 : b.lastname < a.lastname ? -1 : 0
      );
  }
};

//Sort telephone number
export const sortTelephoneNumber = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.telephoneNumber > b.telephoneNumber
          ? 1
          : b.telephoneNumber > a.telephoneNumber
          ? -1
          : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.telephoneNumber < b.telephoneNumber
          ? 1
          : b.telephoneNumber < a.telephoneNumber
          ? -1
          : 0
      );
  }
};

//Sort telephone number
export const sortManager = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.employeeManager > b.employeeManager
          ? 1
          : b.employeeManager > a.employeeManager
          ? -1
          : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.employeeManager < b.employeeManager
          ? 1
          : b.employeeManager < a.employeeManager
          ? -1
          : 0
      );
  }
};

export const sortEmail = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.email > b.email ? 1 : b.email > a.email ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.email < b.email ? 1 : b.email < a.email ? -1 : 0
      );
  }
};

//Dept sorting
//Sort by dept name
export const sortName = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      );
  }
};
//Sort by dept Manager
export const sortDeptManager = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.manager > b.manager ? 1 : b.manager > a.manager ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.manager < b.manager ? 1 : b.manager < a.manager ? -1 : 0
      );
  }
};
//Sort by status
export const sortStatus = (arr, orderBy) => {
  switch (orderBy) {
    case "asc":
    default:
      return arr.sort((a, b) =>
        a.status > b.status ? 1 : b.status > a.status ? -1 : 0
      );
    case "desc":
      return arr.sort((a, b) =>
        a.status < b.status ? 1 : b.status < a.status ? -1 : 0
      );
  }
};

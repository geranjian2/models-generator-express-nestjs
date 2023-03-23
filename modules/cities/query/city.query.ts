const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const code = 'LOWER(t.code) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const departmentId = 'LOWER(t.department_id) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'code':
      fs = `AND ${ code }`;
    break;
    case 'name':
      fs = `AND ${ name }`;
    break;
    case 'department_id':
      fs = `AND ${ departmentId }`;
    break;
    case 'created_at':
      fs = `AND ${ createdAt }`;
    break;
    case 'updated_at':
      fs = `AND ${ updatedAt }`;
    break;
    case 'deleted_at':
      fs = `AND ${ deletedAt }`;
    break;
  default:
  break;
  }
  return fs;
}

export const CityTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM cities c
         INNER JOIN departments d ON d.id = c.department_id
    WHERE c.deleted_at IS NULL ${fs}`;
  return query;
};

export const CityQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            c.id id,
            c.code code,
            c.name name,
            c.department_id departmentId,
            c.created_at createdAt,
            c.updated_at updatedAt,
            c.deleted_at deletedAt,
          FROM cities c
            INNER JOIN departments d ON d.id = c. department_id
          WHERE c.deleted_at IS NULL ${fs}`;
};





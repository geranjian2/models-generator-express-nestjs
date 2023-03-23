const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const code = 'LOWER(t.code) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const countryId = 'LOWER(t.country_id) LIKE :search';
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
    case 'country_id':
      fs = `AND ${ countryId }`;
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

export const DepartmentTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM departments d
         INNER JOIN countries c ON c.id = d.country_id
    WHERE d.deleted_at IS NULL ${fs}`;
  return query;
};

export const DepartmentQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            d.id id,
            d.code code,
            d.name name,
            d.country_id countryId,
            d.created_at createdAt,
            d.updated_at updatedAt,
            d.deleted_at deletedAt,
          FROM departments d
            INNER JOIN countries c ON c.id = d. country_id
          WHERE d.deleted_at IS NULL ${fs}`;
};





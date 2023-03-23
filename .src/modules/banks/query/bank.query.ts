const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const description = 'LOWER(t.description) LIKE :search';
  const code = 'LOWER(t.code) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'name':
      fs = `AND ${ name }`;
    break;
    case 'description':
      fs = `AND ${ description }`;
    break;
    case 'code':
      fs = `AND ${ code }`;
    break;
    case 'status':
      fs = `AND ${ status }`;
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

export const BankTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM banks b
    WHERE b.deleted_at IS NULL ${fs}`;
  return query;
};

export const BankQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            b.id id,
            b.name name,
            b.description description,
            b.code code,
            b.status status,
            b.created_at createdAt,
            b.updated_at updatedAt,
            b.deleted_at deletedAt,
          FROM banks b
          WHERE b.deleted_at IS NULL ${fs}`;
};





const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const code = 'LOWER(t.code) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
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

export const AccountTypeTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM account_type at
    WHERE at.deleted_at IS NULL ${fs}`;
  return query;
};

export const AccountTypeQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            at.id id,
            at.code code,
            at.name name,
            at.status status,
            at.created_at createdAt,
            at.updated_at updatedAt,
            at.deleted_at deletedAt,
          FROM account_type at
          WHERE at.deleted_at IS NULL ${fs}`;
};





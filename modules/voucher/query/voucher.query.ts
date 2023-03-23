const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const description = 'LOWER(t.description) LIKE :search';
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

export const VoucherTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM voucher v
    WHERE v.deleted_at IS NULL ${fs}`;
  return query;
};

export const VoucherQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            v.id id,
            v.name name,
            v.description description,
            v.status status,
            v.created_at createdAt,
            v.updated_at updatedAt,
            v.deleted_at deletedAt,
          FROM voucher v
          WHERE v.deleted_at IS NULL ${fs}`;
};





const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
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

export const ThirdCategoryTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM third_category tc
    WHERE tc.deleted_at IS NULL ${fs}`;
  return query;
};

export const ThirdCategoryQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            tc.id id,
            tc.name name,
            tc.status status,
            tc.created_at createdAt,
            tc.updated_at updatedAt,
            tc.deleted_at deletedAt,
          FROM third_category tc
          WHERE tc.deleted_at IS NULL ${fs}`;
};





const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const code = 'LOWER(t.code) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const description = 'LOWER(t.description) LIKE :search';
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
    case 'description':
      fs = `AND ${ description }`;
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

export const TypeDocumentTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM type_document td
    WHERE td.deleted_at IS NULL ${fs}`;
  return query;
};

export const TypeDocumentQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            td.id id,
            td.code code,
            td.name name,
            td.description description,
            td.created_at createdAt,
            td.updated_at updatedAt,
            td.deleted_at deletedAt,
          FROM type_document td
          WHERE td.deleted_at IS NULL ${fs}`;
};





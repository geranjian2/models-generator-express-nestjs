const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const indicative = 'LOWER(t.indicative) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'indicative':
      fs = `AND ${ indicative }`;
    break;
    case 'name':
      fs = `AND ${ name }`;
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

export const CountryTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM countries c
    WHERE c.deleted_at IS NULL ${fs}`;
  return query;
};

export const CountryQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            c.id id,
            c.indicative indicative,
            c.name name,
            c.created_at createdAt,
            c.updated_at updatedAt,
            c.deleted_at deletedAt,
          FROM countries c
          WHERE c.deleted_at IS NULL ${fs}`;
};





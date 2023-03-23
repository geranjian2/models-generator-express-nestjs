const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const name = 'LOWER(t.name) LIKE :search';
  const description = 'LOWER(t.description) LIKE :search';
  const dispersionsNumber = 'LOWER(t.dispersions_number) LIKE :search';
  const value = 'LOWER(t.value) LIKE :search';
  const implementationFee = 'LOWER(t.implementation_fee) LIKE :search';
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
    case 'dispersions_number':
      fs = `AND ${ dispersionsNumber }`;
    break;
    case 'value':
      fs = `AND ${ value }`;
    break;
    case 'implementation_fee':
      fs = `AND ${ implementationFee }`;
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

export const PlanTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM plans p
    WHERE p.deleted_at IS NULL ${fs}`;
  return query;
};

export const PlanQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            p.id id,
            p.name name,
            p.description description,
            p.dispersions_number dispersionsNumber,
            p.value value,
            p.implementation_fee implementationFee,
            p.status status,
            p.created_at createdAt,
            p.updated_at updatedAt,
            p.deleted_at deletedAt,
          FROM plans p
          WHERE p.deleted_at IS NULL ${fs}`;
};





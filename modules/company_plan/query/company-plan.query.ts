const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const planId = 'LOWER(t.plan_id) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'company_id':
      fs = `AND ${ companyId }`;
    break;
    case 'plan_id':
      fs = `AND ${ planId }`;
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

export const CompanyPlanTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM company_plan cp
         INNER JOIN companies c ON c.id = cp.company_id
         INNER JOIN plans p ON p.id = cp.plan_id
    WHERE cp.deleted_at IS NULL ${fs}`;
  return query;
};

export const CompanyPlanQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            cp.id id,
            cp.company_id companyId,
            cp.plan_id planId,
            cp.created_at createdAt,
            cp.updated_at updatedAt,
            cp.deleted_at deletedAt,
          FROM company_plan cp
            INNER JOIN companies c ON c.id = cp. company_id
            INNER JOIN plans p ON p.id = cp. plan_id
          WHERE cp.deleted_at IS NULL ${fs}`;
};





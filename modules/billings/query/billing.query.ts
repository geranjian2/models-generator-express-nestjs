const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const numberBilling = 'LOWER(t.number_billing) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const valuePlan = 'LOWER(t.value_plan) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const dateBilling = 'LOWER(t.date_billing) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'number_billing':
      fs = `AND ${ numberBilling }`;
    break;
    case 'company_id':
      fs = `AND ${ companyId }`;
    break;
    case 'value_plan':
      fs = `AND ${ valuePlan }`;
    break;
    case 'status':
      fs = `AND ${ status }`;
    break;
    case 'date_billing':
      fs = `AND ${ dateBilling }`;
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

export const BillingTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM billings b
         INNER JOIN companies c ON c.id = b.company_id
    WHERE b.deleted_at IS NULL ${fs}`;
  return query;
};

export const BillingQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            b.id id,
            b.number_billing numberBilling,
            b.company_id companyId,
            b.value_plan valuePlan,
            b.status status,
            b.date_billing dateBilling,
            b.created_at createdAt,
            b.updated_at updatedAt,
            b.deleted_at deletedAt,
          FROM billings b
            INNER JOIN companies c ON c.id = b. company_id
          WHERE b.deleted_at IS NULL ${fs}`;
};





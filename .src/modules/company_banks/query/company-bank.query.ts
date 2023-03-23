const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const bankId = 'LOWER(t.bank_id) LIKE :search';
  const bankAccount = 'LOWER(t.bank_account) LIKE :search';
  const accountTypeId = 'LOWER(t.account_type_id) LIKE :search';
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
    case 'bank_id':
      fs = `AND ${ bankId }`;
    break;
    case 'bank_account':
      fs = `AND ${ bankAccount }`;
    break;
    case 'account_type_id':
      fs = `AND ${ accountTypeId }`;
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

export const CompanyBankTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM company_banks cb
         INNER JOIN account_type a ON a.id = cb.account_type_id
         INNER JOIN banks b ON b.id = cb.bank_id
         INNER JOIN companies c ON c.id = cb.company_id
    WHERE cb.deleted_at IS NULL ${fs}`;
  return query;
};

export const CompanyBankQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            cb.id id,
            cb.company_id companyId,
            cb.bank_id bankId,
            cb.bank_account bankAccount,
            cb.account_type_id accountTypeId,
            cb.created_at createdAt,
            cb.updated_at updatedAt,
            cb.deleted_at deletedAt,
          FROM company_banks cb
            INNER JOIN account_type a ON a.id = cb. account_type_id
            INNER JOIN banks b ON b.id = cb. bank_id
            INNER JOIN companies c ON c.id = cb. company_id
          WHERE cb.deleted_at IS NULL ${fs}`;
};





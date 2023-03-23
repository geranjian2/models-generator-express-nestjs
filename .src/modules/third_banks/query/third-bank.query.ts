const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const thirdId = 'LOWER(t.third_id) LIKE :search';
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
    case 'third_id':
      fs = `AND ${ thirdId }`;
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

export const ThirdBankTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM third_banks tb
         INNER JOIN account_type a ON a.id = tb.account_type_id
         INNER JOIN banks b ON b.id = tb.bank_id
         INNER JOIN third t ON t.id = tb.third_id
    WHERE tb.deleted_at IS NULL ${fs}`;
  return query;
};

export const ThirdBankQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            tb.id id,
            tb.third_id thirdId,
            tb.bank_id bankId,
            tb.bank_account bankAccount,
            tb.account_type_id accountTypeId,
            tb.created_at createdAt,
            tb.updated_at updatedAt,
            tb.deleted_at deletedAt,
          FROM third_banks tb
            INNER JOIN account_type a ON a.id = tb. account_type_id
            INNER JOIN banks b ON b.id = tb. bank_id
            INNER JOIN third t ON t.id = tb. third_id
          WHERE tb.deleted_at IS NULL ${fs}`;
};





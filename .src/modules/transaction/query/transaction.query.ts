const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const uuid = 'LOWER(t.uuid) LIKE :search';
  const reference = 'LOWER(t.reference) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const companyBankId = 'LOWER(t.company_bank_id) LIKE :search';
  const thirdId = 'LOWER(t.third_id) LIKE :search';
  const thirdBankId = 'LOWER(t.third_bank_id) LIKE :search';
  const companyTeamId = 'LOWER(t.company_team_id) LIKE :search';
  const quantity = 'LOWER(t.quantity) LIKE :search';
  const averageValue = 'LOWER(t.average_value) LIKE :search';
  const value = 'LOWER(t.value) LIKE :search';
  const expirationDate = 'LOWER(t.expiration_date) LIKE :search';
  const observations = 'LOWER(t.observations) LIKE :search';
  const statusProcess = 'LOWER(t.status_process) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const payedAt = 'LOWER(t.payed_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  const groupPayingId = 'LOWER(t.group_paying_id) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'uuid':
      fs = `AND ${ uuid }`;
    break;
    case 'reference':
      fs = `AND ${ reference }`;
    break;
    case 'company_id':
      fs = `AND ${ companyId }`;
    break;
    case 'company_bank_id':
      fs = `AND ${ companyBankId }`;
    break;
    case 'third_id':
      fs = `AND ${ thirdId }`;
    break;
    case 'third_bank_id':
      fs = `AND ${ thirdBankId }`;
    break;
    case 'company_team_id':
      fs = `AND ${ companyTeamId }`;
    break;
    case 'quantity':
      fs = `AND ${ quantity }`;
    break;
    case 'average_value':
      fs = `AND ${ averageValue }`;
    break;
    case 'value':
      fs = `AND ${ value }`;
    break;
    case 'expiration_date':
      fs = `AND ${ expirationDate }`;
    break;
    case 'observations':
      fs = `AND ${ observations }`;
    break;
    case 'status_process':
      fs = `AND ${ statusProcess }`;
    break;
    case 'status':
      fs = `AND ${ status }`;
    break;
    case 'created_at':
      fs = `AND ${ createdAt }`;
    break;
    case 'payed_at':
      fs = `AND ${ payedAt }`;
    break;
    case 'updated_at':
      fs = `AND ${ updatedAt }`;
    break;
    case 'deleted_at':
      fs = `AND ${ deletedAt }`;
    break;
    case 'group_paying_id':
      fs = `AND ${ groupPayingId }`;
    break;
  default:
  break;
  }
  return fs;
}

export const TransactionTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM transaction t
         INNER JOIN company_banks c ON c.id = t.company_bank_id
         INNER JOIN companies c ON c.id = t.company_id
         INNER JOIN company_team c ON c.id = t.company_team_id
         INNER JOIN third_banks t ON t.id = t.third_bank_id
         INNER JOIN third t ON t.id = t.third_id
    WHERE t.deleted_at IS NULL ${fs}`;
  return query;
};

export const TransactionQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            t.id id,
            t.uuid uuid,
            t.reference reference,
            t.company_id companyId,
            t.company_bank_id companyBankId,
            t.third_id thirdId,
            t.third_bank_id thirdBankId,
            t.company_team_id companyTeamId,
            t.quantity quantity,
            t.average_value averageValue,
            t.value value,
            t.expiration_date expirationDate,
            t.observations observations,
            t.status_process statusProcess,
            t.status status,
            t.created_at createdAt,
            t.payed_at payedAt,
            t.updated_at updatedAt,
            t.deleted_at deletedAt,
            t.group_paying_id groupPayingId,
          FROM transaction t
            INNER JOIN company_banks c ON c.id = t. company_bank_id
            INNER JOIN companies c ON c.id = t. company_id
            INNER JOIN company_team c ON c.id = t. company_team_id
            INNER JOIN third_banks t ON t.id = t. third_bank_id
            INNER JOIN third t ON t.id = t. third_id
          WHERE t.deleted_at IS NULL ${fs}`;
};





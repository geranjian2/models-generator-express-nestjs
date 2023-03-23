const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const uuid = 'LOWER(t.uuid) LIKE :search';
  const transactionId = 'LOWER(t.transaction_id) LIKE :search';
  const voucherId = 'LOWER(t.voucher_id) LIKE :search';
  const document = 'LOWER(t.document) LIKE :search';
  const invoiceNumber = 'LOWER(t.invoice_number) LIKE :search';
  const invoiceExpiration = 'LOWER(t.invoice_expiration) LIKE :search';
  const value = 'LOWER(t.value) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'uuid':
      fs = `AND ${ uuid }`;
    break;
    case 'transaction_id':
      fs = `AND ${ transactionId }`;
    break;
    case 'voucher_id':
      fs = `AND ${ voucherId }`;
    break;
    case 'document':
      fs = `AND ${ document }`;
    break;
    case 'invoice_number':
      fs = `AND ${ invoiceNumber }`;
    break;
    case 'invoice_expiration':
      fs = `AND ${ invoiceExpiration }`;
    break;
    case 'value':
      fs = `AND ${ value }`;
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

export const TransactionDetailTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM transaction_details td
         INNER JOIN transaction t ON t.id = td.transaction_id
         INNER JOIN voucher v ON v.id = td.voucher_id
    WHERE td.deleted_at IS NULL ${fs}`;
  return query;
};

export const TransactionDetailQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            td.id id,
            td.uuid uuid,
            td.transaction_id transactionId,
            td.voucher_id voucherId,
            td.document document,
            td.invoice_number invoiceNumber,
            td.invoice_expiration invoiceExpiration,
            td.value value,
            td.status status,
            td.created_at createdAt,
            td.updated_at updatedAt,
            td.deleted_at deletedAt,
          FROM transaction_details td
            INNER JOIN transaction t ON t.id = td. transaction_id
            INNER JOIN voucher v ON v.id = td. voucher_id
          WHERE td.deleted_at IS NULL ${fs}`;
};





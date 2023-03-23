const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const billingId = 'LOWER(t.billing_id) LIKE :search';
  const paymentAt = 'LOWER(t.payment_at) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'billing_id':
      fs = `AND ${ billingId }`;
    break;
    case 'payment_at':
      fs = `AND ${ paymentAt }`;
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

export const InvoicePaymentTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM invoices_payment ip
         INNER JOIN billings b ON b.id = ip.billing_id
    WHERE ip.deleted_at IS NULL ${fs}`;
  return query;
};

export const InvoicePaymentQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            ip.id id,
            ip.billing_id billingId,
            ip.payment_at paymentAt,
            ip.created_at createdAt,
            ip.updated_at updatedAt,
            ip.deleted_at deletedAt,
          FROM invoices_payment ip
            INNER JOIN billings b ON b.id = ip. billing_id
          WHERE ip.deleted_at IS NULL ${fs}`;
};





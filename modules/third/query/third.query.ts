const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const uuid = 'LOWER(t.uuid) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const businessName = 'LOWER(t.business_name) LIKE :search';
  const typeDocumentId = 'LOWER(t.type_document_id) LIKE :search';
  const document = 'LOWER(t.document) LIKE :search';
  const dv = 'LOWER(t.dv) LIKE :search';
  const emailNotification = 'LOWER(t.email_notification) LIKE :search';
  const indicativeContact = 'LOWER(t.indicative_contact) LIKE :search';
  const phoneContact = 'LOWER(t.phone_contact) LIKE :search';
  const categoryId = 'LOWER(t.category_id) LIKE :search';
  const thirdType = 'LOWER(t.third_type) LIKE :search';
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
    case 'company_id':
      fs = `AND ${ companyId }`;
    break;
    case 'business_name':
      fs = `AND ${ businessName }`;
    break;
    case 'type_document_id':
      fs = `AND ${ typeDocumentId }`;
    break;
    case 'document':
      fs = `AND ${ document }`;
    break;
    case 'dv':
      fs = `AND ${ dv }`;
    break;
    case 'email_notification':
      fs = `AND ${ emailNotification }`;
    break;
    case 'indicative_contact':
      fs = `AND ${ indicativeContact }`;
    break;
    case 'phone_contact':
      fs = `AND ${ phoneContact }`;
    break;
    case 'category_id':
      fs = `AND ${ categoryId }`;
    break;
    case 'third_type':
      fs = `AND ${ thirdType }`;
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

export const ThirdTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM third t
         INNER JOIN third_category t ON t.id = t.category_id
         INNER JOIN companies c ON c.id = t.company_id
         INNER JOIN type_document t ON t.id = t.type_document_id
    WHERE t.deleted_at IS NULL ${fs}`;
  return query;
};

export const ThirdQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            t.id id,
            t.uuid uuid,
            t.company_id companyId,
            t.business_name businessName,
            t.type_document_id typeDocumentId,
            t.document document,
            t.dv dv,
            t.email_notification emailNotification,
            t.indicative_contact indicativeContact,
            t.phone_contact phoneContact,
            t.category_id categoryId,
            t.third_type thirdType,
            t.status status,
            t.created_at createdAt,
            t.updated_at updatedAt,
            t.deleted_at deletedAt,
          FROM third t
            INNER JOIN third_category t ON t.id = t. category_id
            INNER JOIN companies c ON c.id = t. company_id
            INNER JOIN type_document t ON t.id = t. type_document_id
          WHERE t.deleted_at IS NULL ${fs}`;
};





const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const uuid = 'LOWER(t.uuid) LIKE :search';
  const typeDocumentId = 'LOWER(t.type_document_id) LIKE :search';
  const document = 'LOWER(t.document) LIKE :search';
  const dv = 'LOWER(t.dv) LIKE :search';
  const businessName = 'LOWER(t.business_name) LIKE :search';
  const countryId = 'LOWER(t.country_id) LIKE :search';
  const departmentId = 'LOWER(t.department_id) LIKE :search';
  const cityId = 'LOWER(t.city_id) LIKE :search';
  const address = 'LOWER(t.address) LIKE :search';
  const emailNotification = 'LOWER(t.email_notification) LIKE :search';
  const emailInvoice = 'LOWER(t.email_invoice) LIKE :search';
  const indicativeContact = 'LOWER(t.indicative_contact) LIKE :search';
  const phoneContact = 'LOWER(t.phone_contact) LIKE :search';
  const firstNameRl = 'LOWER(t.first_name_rl) LIKE :search';
  const lastNameRl = 'LOWER(t.last_name_rl) LIKE :search';
  const typeDocumentRlId = 'LOWER(t.type_document_rl_id) LIKE :search';
  const documentRl = 'LOWER(t.document_rl) LIKE :search';
  const indicativeRl = 'LOWER(t.indicative_rl) LIKE :search';
  const phoneRl = 'LOWER(t.phone_rl) LIKE :search';
  const logo = 'LOWER(t.logo) LIKE :search';
  const acceptTerms = 'LOWER(t.accept_terms) LIKE :search';
  const chamberCommerceImage = 'LOWER(t.chamber_commerce_image) LIKE :search';
  const rut = 'LOWER(t.rut) LIKE :search';
  const commercialContract = 'LOWER(t.commercial_contract) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const emailRegister = 'LOWER(t.email_register) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  const uploadedAt = 'LOWER(t.uploaded_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'uuid':
      fs = `AND ${ uuid }`;
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
    case 'business_name':
      fs = `AND ${ businessName }`;
    break;
    case 'country_id':
      fs = `AND ${ countryId }`;
    break;
    case 'department_id':
      fs = `AND ${ departmentId }`;
    break;
    case 'city_id':
      fs = `AND ${ cityId }`;
    break;
    case 'address':
      fs = `AND ${ address }`;
    break;
    case 'email_notification':
      fs = `AND ${ emailNotification }`;
    break;
    case 'email_invoice':
      fs = `AND ${ emailInvoice }`;
    break;
    case 'indicative_contact':
      fs = `AND ${ indicativeContact }`;
    break;
    case 'phone_contact':
      fs = `AND ${ phoneContact }`;
    break;
    case 'first_name_rl':
      fs = `AND ${ firstNameRl }`;
    break;
    case 'last_name_rl':
      fs = `AND ${ lastNameRl }`;
    break;
    case 'type_document_rl_id':
      fs = `AND ${ typeDocumentRlId }`;
    break;
    case 'document_rl':
      fs = `AND ${ documentRl }`;
    break;
    case 'indicative_rl':
      fs = `AND ${ indicativeRl }`;
    break;
    case 'phone_rl':
      fs = `AND ${ phoneRl }`;
    break;
    case 'logo':
      fs = `AND ${ logo }`;
    break;
    case 'accept_terms':
      fs = `AND ${ acceptTerms }`;
    break;
    case 'chamber_commerce_image':
      fs = `AND ${ chamberCommerceImage }`;
    break;
    case 'rut':
      fs = `AND ${ rut }`;
    break;
    case 'commercial_contract':
      fs = `AND ${ commercialContract }`;
    break;
    case 'status':
      fs = `AND ${ status }`;
    break;
    case 'email_register':
      fs = `AND ${ emailRegister }`;
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
    case 'uploaded_at':
      fs = `AND ${ uploadedAt }`;
    break;
  default:
  break;
  }
  return fs;
}

export const CompanyTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM companies c
         INNER JOIN cities c ON c.id = c.city_id
         INNER JOIN countries c ON c.id = c.country_id
         INNER JOIN departments d ON d.id = c.department_id
         INNER JOIN type_document t ON t.id = c.type_document_id
    WHERE c.deleted_at IS NULL ${fs}`;
  return query;
};

export const CompanyQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            c.id id,
            c.uuid uuid,
            c.type_document_id typeDocumentId,
            c.document document,
            c.dv dv,
            c.business_name businessName,
            c.country_id countryId,
            c.department_id departmentId,
            c.city_id cityId,
            c.address address,
            c.email_notification emailNotification,
            c.email_invoice emailInvoice,
            c.indicative_contact indicativeContact,
            c.phone_contact phoneContact,
            c.first_name_rl firstNameRl,
            c.last_name_rl lastNameRl,
            c.type_document_rl_id typeDocumentRlId,
            c.document_rl documentRl,
            c.indicative_rl indicativeRl,
            c.phone_rl phoneRl,
            c.logo logo,
            c.accept_terms acceptTerms,
            c.chamber_commerce_image chamberCommerceImage,
            c.rut rut,
            c.commercial_contract commercialContract,
            c.status status,
            c.email_register emailRegister,
            c.created_at createdAt,
            c.updated_at updatedAt,
            c.deleted_at deletedAt,
            c.uploaded_at uploadedAt,
          FROM companies c
            INNER JOIN cities c ON c.id = c. city_id
            INNER JOIN countries c ON c.id = c. country_id
            INNER JOIN departments d ON d.id = c. department_id
            INNER JOIN type_document t ON t.id = c. type_document_id
          WHERE c.deleted_at IS NULL ${fs}`;
};





const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const roleId = 'LOWER(t.role_id) LIKE :search';
  const uuid = 'LOWER(t.uuid) LIKE :search';
  const email = 'LOWER(t.email) LIKE :search';
  const emailValidationCode = 'LOWER(t.email_validation_code) LIKE :search';
  const emailValidation = 'LOWER(t.email_validation) LIKE :search';
  const indicative = 'LOWER(t.indicative) LIKE :search';
  const phone = 'LOWER(t.phone) LIKE :search';
  const phoneValidationCode = 'LOWER(t.phone_validation_code) LIKE :search';
  const phoneValidation = 'LOWER(t.phone_validation) LIKE :search';
  const password = 'LOWER(t.password) LIKE :search';
  const photo = 'LOWER(t.photo) LIKE :search';
  const firstName = 'LOWER(t.first_name) LIKE :search';
  const lastName = 'LOWER(t.last_name) LIKE :search';
  const step = 'LOWER(t.step) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const phoneOtp = 'LOWER(t.phone_otp) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'role_id':
      fs = `AND ${ roleId }`;
    break;
    case 'uuid':
      fs = `AND ${ uuid }`;
    break;
    case 'email':
      fs = `AND ${ email }`;
    break;
    case 'email_validation_code':
      fs = `AND ${ emailValidationCode }`;
    break;
    case 'email_validation':
      fs = `AND ${ emailValidation }`;
    break;
    case 'indicative':
      fs = `AND ${ indicative }`;
    break;
    case 'phone':
      fs = `AND ${ phone }`;
    break;
    case 'phone_validation_code':
      fs = `AND ${ phoneValidationCode }`;
    break;
    case 'phone_validation':
      fs = `AND ${ phoneValidation }`;
    break;
    case 'password':
      fs = `AND ${ password }`;
    break;
    case 'photo':
      fs = `AND ${ photo }`;
    break;
    case 'first_name':
      fs = `AND ${ firstName }`;
    break;
    case 'last_name':
      fs = `AND ${ lastName }`;
    break;
    case 'step':
      fs = `AND ${ step }`;
    break;
    case 'status':
      fs = `AND ${ status }`;
    break;
    case 'phone_otp':
      fs = `AND ${ phoneOtp }`;
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

export const TeamTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM teams t
         INNER JOIN roles r ON r.id = t.role_id
    WHERE t.deleted_at IS NULL ${fs}`;
  return query;
};

export const TeamQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            t.id id,
            t.role_id roleId,
            t.uuid uuid,
            t.email email,
            t.email_validation_code emailValidationCode,
            t.email_validation emailValidation,
            t.indicative indicative,
            t.phone phone,
            t.phone_validation_code phoneValidationCode,
            t.phone_validation phoneValidation,
            t.password password,
            t.photo photo,
            t.first_name firstName,
            t.last_name lastName,
            t.step step,
            t.status status,
            t.phone_otp phoneOtp,
            t.created_at createdAt,
            t.updated_at updatedAt,
            t.deleted_at deletedAt,
          FROM teams t
            INNER JOIN roles r ON r.id = t. role_id
          WHERE t.deleted_at IS NULL ${fs}`;
};





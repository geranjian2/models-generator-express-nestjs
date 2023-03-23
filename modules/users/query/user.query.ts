const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const username = 'LOWER(t.username) LIKE :search';
  const roleId = 'LOWER(t.role_id) LIKE :search';
  const email = 'LOWER(t.email) LIKE :search';
  const password = 'LOWER(t.password) LIKE :search';
  const status = 'LOWER(t.status) LIKE :search';
  const createdAt = 'LOWER(t.created_at) LIKE :search';
  const updatedAt = 'LOWER(t.updated_at) LIKE :search';
  const deletedAt = 'LOWER(t.deleted_at) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'username':
      fs = `AND ${ username }`;
    break;
    case 'role_id':
      fs = `AND ${ roleId }`;
    break;
    case 'email':
      fs = `AND ${ email }`;
    break;
    case 'password':
      fs = `AND ${ password }`;
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

export const UserTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM users u
         INNER JOIN roles r ON r.id = u.role_id
    WHERE u.deleted_at IS NULL ${fs}`;
  return query;
};

export const UserQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            u.id id,
            u.username username,
            u.role_id roleId,
            u.email email,
            u.password password,
            u.status status,
            u.created_at createdAt,
            u.updated_at updatedAt,
            u.deleted_at deletedAt,
          FROM users u
            INNER JOIN roles r ON r.id = u. role_id
          WHERE u.deleted_at IS NULL ${fs}`;
};





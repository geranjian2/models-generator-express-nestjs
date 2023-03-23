const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const userId = 'LOWER(t.user_id) LIKE :search';
  const permissionId = 'LOWER(t.permission_id) LIKE :search';
  const permit = 'LOWER(t.permit) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'user_id':
      fs = `AND ${ userId }`;
    break;
    case 'permission_id':
      fs = `AND ${ permissionId }`;
    break;
    case 'permit':
      fs = `AND ${ permit }`;
    break;
  default:
  break;
  }
  return fs;
}

export const UserPermissionTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM user_permission up
         INNER JOIN permissions p ON p.id = up.permission_id
         INNER JOIN users u ON u.id = up.user_id
    WHERE up.deleted_at IS NULL ${fs}`;
  return query;
};

export const UserPermissionQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            up.id id,
            up.user_id userId,
            up.permission_id permissionId,
            up.permit permit,
          FROM user_permission up
            INNER JOIN permissions p ON p.id = up. permission_id
            INNER JOIN users u ON u.id = up. user_id
          WHERE up.deleted_at IS NULL ${fs}`;
};





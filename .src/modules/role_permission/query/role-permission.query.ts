const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const roleId = 'LOWER(t.role_id) LIKE :search';
  const permissionId = 'LOWER(t.permission_id) LIKE :search';
  switch (fieldSearch) {
    case 'role_id':
      fs = `AND ${ roleId }`;
    break;
    case 'permission_id':
      fs = `AND ${ permissionId }`;
    break;
  default:
  break;
  }
  return fs;
}

export const RolePermissionTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM role_permission rp
         INNER JOIN permissions p ON p.id = rp.permission_id
         INNER JOIN roles r ON r.id = rp.role_id
    WHERE rp.deleted_at IS NULL ${fs}`;
  return query;
};

export const RolePermissionQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            rp.role_id roleId,
            rp.permission_id permissionId,
          FROM role_permission rp
            INNER JOIN permissions p ON p.id = rp. permission_id
            INNER JOIN roles r ON r.id = rp. role_id
          WHERE rp.deleted_at IS NULL ${fs}`;
};





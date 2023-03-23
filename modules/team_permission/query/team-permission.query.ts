const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const teamId = 'LOWER(t.team_id) LIKE :search';
  const permissionId = 'LOWER(t.permission_id) LIKE :search';
  const permit = 'LOWER(t.permit) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'team_id':
      fs = `AND ${ teamId }`;
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

export const TeamPermissionTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM team_permission tp
         INNER JOIN permissions p ON p.id = tp.permission_id
         INNER JOIN teams t ON t.id = tp.team_id
    WHERE tp.deleted_at IS NULL ${fs}`;
  return query;
};

export const TeamPermissionQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            tp.id id,
            tp.team_id teamId,
            tp.permission_id permissionId,
            tp.permit permit,
          FROM team_permission tp
            INNER JOIN permissions p ON p.id = tp. permission_id
            INNER JOIN teams t ON t.id = tp. team_id
          WHERE tp.deleted_at IS NULL ${fs}`;
};





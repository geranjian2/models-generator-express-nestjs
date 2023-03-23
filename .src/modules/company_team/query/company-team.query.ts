const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const id = 'LOWER(t.id) LIKE :search';
  const companyId = 'LOWER(t.company_id) LIKE :search';
  const teamId = 'LOWER(t.team_id) LIKE :search';
  switch (fieldSearch) {
    case 'id':
      fs = `AND ${ id }`;
    break;
    case 'company_id':
      fs = `AND ${ companyId }`;
    break;
    case 'team_id':
      fs = `AND ${ teamId }`;
    break;
  default:
  break;
  }
  return fs;
}

export const CompanyTeamTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM company_team ct
         INNER JOIN companies c ON c.id = ct.company_id
         INNER JOIN teams t ON t.id = ct.team_id
    WHERE ct.deleted_at IS NULL ${fs}`;
  return query;
};

export const CompanyTeamQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            ct.id id,
            ct.company_id companyId,
            ct.team_id teamId,
          FROM company_team ct
            INNER JOIN companies c ON c.id = ct. company_id
            INNER JOIN teams t ON t.id = ct. team_id
          WHERE ct.deleted_at IS NULL ${fs}`;
};





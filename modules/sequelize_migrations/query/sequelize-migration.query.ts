const queryFieldSearch = (fieldSearch) => {
  let fs = '';
  const name = 'LOWER(t.name) LIKE :search';
  switch (fieldSearch) {
    case 'name':
      fs = `AND ${ name }`;
    break;
  default:
  break;
  }
  return fs;
}

export const SequelizeMigrationTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM sequelize_migrations sm
    WHERE sm.deleted_at IS NULL ${fs}`;
  return query;
};

export const SequelizeMigrationQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            sm.name name,
          FROM sequelize_migrations sm
          WHERE sm.deleted_at IS NULL ${fs}`;
};





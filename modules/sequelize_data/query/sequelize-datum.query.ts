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

export const SequelizeDatumTotalQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  const query = `
    SELECT count(*) AS "count"
    FROM sequelize_data sd
    WHERE sd.deleted_at IS NULL ${fs}`;
  return query;
};

export const SequelizeDatumQuery = (fieldSearch: string) => {
  const fs = queryFieldSearch(fieldSearch);

  return `SELECT 
            sd.name name,
          FROM sequelize_data sd
          WHERE sd.deleted_at IS NULL ${fs}`;
};





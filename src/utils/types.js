const dataTypes = (type) => {
    /* 
     * Possible types in database
     * ================
     * varchar    bigint    longtext
     * datetime    int    tinyint
     * decimal    double    tinytext
     * text    timestamp    date
     * mediumtext    float    smallint
     * char    enum    blob
     * longblob    set 
     * 
     * Types available in json schema
     * string    number    object
     * array    boolean    null
     * integer    any
     * 
     */
    switch (type) {
        case 'varchar':
        case 'character varying':
        case 'text':
        case 'longtext':
        case 'tinytext':
        case 'text':
        case 'mediumtext':
        case 'char':
        case 'numeric':
        case 'tinyint':
        case 'smallint':
        case 'decimal':
        case 'USER-DEFINED':
            return 'string';
        case 'date':
        case 'datetime':
        case 'timestamp with time zone':
        case 'timestamp':
            return 'Date';
        case 'int':
        case 'integer':
        case 'float':
        case 'double':
        case 'bigint':
            return 'number';
        case 'boolean':
            return 'boolean'
        default:
            return 'any';
        
    }
};
module.exports = {
    dataTypes 
}

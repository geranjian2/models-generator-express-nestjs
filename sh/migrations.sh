salir=5
Green='\033[0;32m'
NC='\033[0m' # No Color
createMigration(){
    echo "${Green}create migration...${NC} ${1}"
    npm run migration:create "./db/migrations/typeorm/${1}"
    echo -e "${Green}Migration Success${NC} ${1}"
}
revertMigration(){
    echo -e "${Green}Revert Migration...${NC}"
    npm run migration:revert
    echo -e "${Green}Revert Success${NC}"
}
runMigration(){
    echo -e "${Green}Run Migration...${NC}"
    npm run migration:run
    echo -e "${Green}Revert Success${NC}"
}
showMigration(){
    echo -e "${Green}Show Migration...${NC}"
    npm run migration:show
    echo -e "${Green}Show Success${NC}"
}
init(){
    

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}New migration${NC} \n 2-${Green}Run Migration${NC}\n 3-${Green}Revert Migration${NC}\n 4-${Green}Show Migration${NC}\n ${salir}-${Green}Salir${NC}"
    read x

    while [ $x != 5 ]
    do
    case $x in
        1)
            echo "Ingrese Nombre de la gracion"
            read y
            createMigration "$y"
            exit
        ;;
        2)
            
            runMigration
            exit
        ;;
        3)
            
            revertMigration
            exit
        ;;
        4)
            
            showMigration
            exit
        ;;
        $salir)
            exit 0
        ;;
        esac
    done

}
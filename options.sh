#!/bin/bash
exitv=5

Green='\033[0;32m'
NC='\033[0m' # No Color

echo "Seleccione el port forward"
echo -e " 1-${Green}Git${NC} \n 2-${Green}Node${NC}\n 3-${Green}Migraciones${NC}\n 4-${Green}Microservicios${NC}\n ${exitv}-${Green}Salir${NC}"
read x

while [ $x != $exitv ]
do
  case $x in
    1)
        source  sh/git.sh
        init
        exit
    ;;
    2)
        source  sh/node.sh
        init
        exit
    ;;
    3)
        source  sh/migrations.sh
        init
        exit
    ;;
    4)
        source  sh/microservice.sh
        init
        exit
    ;;
    $exitv)
        exit 0
    ;;
    esac
done
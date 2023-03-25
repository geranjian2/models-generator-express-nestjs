#!/bin/bash
exitv=3

Green='\033[0;32m'
NC='\033[0m' # No Color

echo "Seleccione el port forward"
echo -e " 1-${Green}Git${NC} \n 2-${Green}Node${NC}\n ${exitv}-${Green}Salir${NC}"
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
    $exitv)
        exit 0
    ;;
    esac
done
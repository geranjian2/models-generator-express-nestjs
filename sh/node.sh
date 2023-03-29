#!/bin/bash
exitv=2
npmclean(){
 echo borrando node_modules...
  rm -Rf node_modules
  rm package-lock.json
  echo borrado exitoso...
  echo instalando node_modules...
  npm i
}

init(){
    Green='\033[0;32m'
    NC='\033[0m' # No Color

    echo "Seleccione una opcion de node"
    echo -e " 1-${Green}npm clean${NC} \n ${exitv}-${Green}Salir${NC}"
    read x

    while [ $x != $exitv ]
    do
    case $x in
        1)
            npmclean
            exit
        ;;
        $exitv)
            exit 0
        ;;
        esac
    done
}
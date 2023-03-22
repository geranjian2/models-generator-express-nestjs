#!/bin/bash
exitv=5
Green='\033[0;32m'
NC='\033[0m' # No Color
runMicroservice(){
  echo "Running Seguro..."
  echo "Running companies...🎠"
  /bin/bash -c 'echo companies-service 5004 &'
  /bin/bash -c 'nest start companies  --watch &'
  echo "Running user_business...🎠"
  /bin/bash -c 'echo user_business-service 5004 &'
  /bin/bash -c 'nest start user_business  --watch &'
  echo "Running type-notifications...🎠"
  /bin/bash -c 'echo type-notifications  5004 &'
  /bin/bash -c 'nest start type-notifications  --watch &'
}
user_business(){
    /bin/bash -c "kill -9 $(lsof -t -i tcp:3001)"
     echo "Running user_business...🎠"
  /bin/bash -c 'echo user_business-service &'
  /bin/bash -c 'nest start user-business  --watch &'
  exit 0
}
companies1(){
/bin/bash -c "kill -9 $(lsof -t -i tcp:3002)"
  echo "Running companies... 🎠 &"
  /bin/bash -c 'nest start companies  --watch &'
  exit 0
}
type_notifications(){
    /bin/bash -c "kill -9 $(lsof -t -i tcp:3003)"
   echo "Running type-notifications...🎠 &"
   /bin/bash -c 'nest start type-notifications  --watch &'
   exit 0
}

init(){

    echo "digite el nombre dle microservicio que quiere iniciar" 
    echo -e " 1-${Green}user-business ${NC} \n 2-${Green}companies ${NC} \n 3-${Green}type_notifications ${NC} \n 4-${Green}document-store ${NC} \n ${exitv}-${Green}Salir${NC}"
    read x

    while [ $x != $exitv ]
    do
    case $x in
        1)  
            user_business
            exit 0
        ;;
        2)  
            companies1
            exit 0
        ;;
        3)  
            type_notifications
            exit 0
        ;;
        $exitv)
            exit 0
        ;;
        esac
    done

}
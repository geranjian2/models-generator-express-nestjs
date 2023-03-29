salir=9
Green='\033[0;32m'
NC='\033[0m' # No Color
newBranchDevelop(){

# Sirve para generar una nueva rama para un nuevo desarrollo.
  git stash save "feature-nuevo"
  git fetch
  git checkout develop
  git pull
  git checkout -b "feature-CMM-$1-$2"
  git branch
  git stash pop
  git add .
  git commit -m "Create branch feature-CMM-$1-$2"
  git push --set-upstream origin "feature-CMM-$1-$2"
  exit 0
}
function push {
    message="[$1: $2]"
    git add .
    git commit -m "${message}"
    git push
    echo -e "${Green}MESSAGE COMMIT:${NC} ${message}"
}
function pull_origin_develop {
    git add -A
    git commit -m "UPDATE DEVELOP::"
    git pull origin develop
    echo -e "${Green}UPDATE DEVELOP SUCCESS:${NC}"
}
function remove_cache {
    echo -e "${Green}REMOVIENDO CACHE GIT${NC}"
    git rm -r --cached .
    echo -e "${Green}REMOVE CACHE SUCCESS:${NC} ${message}"
}
function deleteBranchExeptDevelop {
    echo -e "${Green}ELIMINANDO RAMAS${NC}"
    git add -A
    git commit -m "UPDATE DEVELOP::"
    git checkout develop
    git branch | grep -v "develop" | grep -v "main"  | xargs git branch -D 
    echo -e "${Green}RAMAS ELIMINADAS SUCCESS${NC}"
}
function setMergeBranch {
    branch=$(git symbolic-ref --short HEAD)
    git add -A
    git commit -m "UPDATE ${1}:: "
    git checkout $1
    git pull
    git checkout $branch
    git merge $1
     echo -e "${Green}RAMAS FUSIONADA $1 A $branch${NC}"
}

function createBranchFromActual {
    branch=$(git symbolic-ref --short HEAD)
    newBranch="feature-CMM-$1-$2"
    git add -A
    git commit -m "UPDATE ${newBranch}"
    git checkout -b "${newBranch}"
    echo -e "${Green}RAMA CREADA a PARTIR DE $branch${NC}"
}

function setMergeBranchActualToOther {
    branch=$(git symbolic-ref --short HEAD)
    echo $1
    git add -A
    git commit -m "UPDATE ${1}"
    git checkout $1
    git pull
    git merge $branch
     echo -e "${Green}RAMAS FUSIONADA $branch${NC} A $1"
}
init(){
    

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}New feature of DEVELEOP${NC} \n 2-${Green}Push changes${NC}\n 3-${Green}Update origin develop${NC}\n 4-${Green}Delete Cache${NC}\n 5-${Green}Delete branchs exept develop and main${NC}\n 6-${Green}Merge branch specific${NC}\n 7-${Green}New feature of branch actual${NC} \n 8-${Green}Merge Branch existent of branch actual${NC} \n ${salir}-${Green}Salir${NC}"
    read x
    echo "Opcion: $x"
    while [ $x != $salir ]
    do
    case $x in
        1)
            echo -e "${Green}Esta tarea se creara a partir de la rama Develop${NC}"
            echo "[nº de historia o tarea]"
            read y
            echo "[nombre-funcionalidad]"
            read z
            newBranchDevelop "$y" "$z"
            exit
        ;;
        2)
            exitpu=5
            echo "Commit message"
            ADD='ADD'
            REFACTOR='REFACTOR'
            REMOVE='REMOVE'
            MODIFY='MODIFY'
            FIX='FIX'

            echo -e "1-${Green}${ADD}${NC}
2-${Green}${MODIFY}${NC} 
3-${Green}${REFACTOR}${NC} 
4-${Green}${REMOVE}${NC} 
${exitpu}-${Green}Salir${NC}"
            read y
            case $y in
                1)
                    commit=$ADD
                ;;
                2)
                    commit=$MODIFY
                ;;
                3)
                    commit=$REFACTOR
                ;;
                4)
                    commit=$REMOVE
                ;;
                $exitpu)
                 exit 0
                ;;
                esac
            echo "opcion ${commit}"
            echo " ingrese su Commit message"
            read z
            push $commit "$z"
            exit
        ;;
        3)
            pull_origin_develop
            exit
        ;;
        4)
            remove_cache
            exit
        ;;
        5)
            deleteBranchExeptDevelop
            exit
        ;;
        6)
            git branch
            echo "ingrese branch merge"
            read z
            setMergeBranch $z
            exit
        ;;
        7)
            echo $(git symbolic-ref --short HEAD)
            echo -e "${Green}Esta tarea se creara a partir de la rama actual${NC}"
            echo "[nº de historia o tarea]"
            read y
            echo "[nombre-funcionalidad]"
            read z
            createBranchFromActual "$y" "$z"
            exit
        ;;
        8)
            
            git branch
            echo -e "${Green}Esta tarea se ira a una rama ya existente y hara merge con la rama actual${NC}"
            echo "insert branch to merge"
            read z
            setMergeBranchActualToOther "$z"
            exit
        ;;
        $salir)
            exit 0
        ;;
        esac
    done

}
const emlist = ["pippobaudo@gmail.com", "francorossi@gmail.com", "alessiogirolamo@gmail.com"];
const userem= prompt("inserici la tua email:");
let flag;
for (let i = 0; i < emlist.length; i++) {
    if(userem=== emlist[i]){
        flag=true;
        console.log("accesso consentito!!!");
        break;
    }  
}
if(!flag){
    console.log("accesso negato XC")
}

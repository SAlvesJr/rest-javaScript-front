class Utils{

    static dataFomart(date){
        return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+ " " +date.getHours()+":"+date.getMinutes();
    }
}
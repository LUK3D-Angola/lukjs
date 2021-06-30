(function(){

    window.luk = {};

    
    luk.debug = {
        /** function to verify if 
         * @param  {string} val the value that needs to be verified
         * @param  {object} type the type of the expected value
         */
        isValid(val, type){
            if(!val){
                console.error(`The value of type: ${type.name} Cannot be of type ${typeof(val)} or Empty`);
                return false;
            }
           
            if(typeof(val).toLocaleLowerCase() == type.name.toLocaleLowerCase() && val.trim().split(" ").join(" "))
            return true;
            console.error(`The value of type: ${type.name} Cannot be of type ${typeof(val)} or Empty`);
            return false;
        }
    }

    /**Functio that helps to find elemente by Id */
    luk.find = (selector)=>{
        if(luk.debug.isValid(selector, String))
        return document.querySelector(selector);
        return null;

    }
    luk.findById = (id)=>{
        if(luk.debug.isValid(id, String))
        return document.getElementById(id);
        return null;
    }

}());
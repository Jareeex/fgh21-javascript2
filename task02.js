const names = [
    'Abigail', 'Alexandra', 'Alison',
     'Amanda', 'Angela', 'Bella',
     'Carol', 'Caroline', 'Carolyn', 
     'Deirdre', 'Diana', 'Elizabeth', 
     'Ella', 'Faith', 'Olivia', 'Penelope'
    ];
    function searchName(arr, cb){

        let result = 
            const filterNama = /an/
        
        for(let i=0; i < arr.length  && filterNama.test(arr[i]); i++){
        const nama = arr[i]
        result = [...result, nama]
   
    }
    
    
        cb(result, 3)
        
 }
        
        function limit(arr, lim){
        
        let result = []
        
        for(let i=0; i < lim; i++){
        
        if(arr[i] !== undefined) {
        
        result = [...result, arr[i]]
           
        
    }
   
 }
        
 console.log(result)
        
}
        
       searchName(names, limit)

 export  function Numbers(value){
   return value.replace(/[^0-9]/g, '');
 }

export function Letters(value) {
  return value.replace(/[^A-Za-z\s'-]/g, '');
}
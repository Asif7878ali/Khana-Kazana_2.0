 export  function Numbers(value){
   return value.replace(/[^0-9]/g, '');
 }

export function Letters(value) {
  return value.replace(/[^A-Za-z\s'-]/g, '');
}

// Returns true if file is valid type, otherwise false
export function isValidFileType(
  file,
  validTypes = ["image/png", "image/jpg", "image/jpeg"],
  maxSizeMB = 5
) {
  if (!file) {
    return false;
  }
  const isValidType = validTypes.includes(file.type);
  const isValidSize = file.size / (1024 * 1024) <= maxSizeMB; // size in MB
  return isValidType && isValidSize;
}

import { msg } from "./constaint";

/**
 * Format a date into human-readable form based on the given format
 * @param {Date} date - The date to format
 * @param {string} format - The format string (e.g., 'dd-mm-yy', 'ddd-mmm-yyyy')
 * @returns {string} The formatted date string
 */
export function dateFormat(date, format) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    // Validate date
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Pad with leading zero if needed
    const pad = (num) => num.toString().padStart(2, '0');

    const replacements = {
        'dd': pad(day),
        'd': day.toString(),
        'mmm': monthNames[month - 1],
        'mm': pad(month),
        'm': month.toString(),
        'yyyy': year.toString(),
        'yy': year.toString().slice(-2),
        'ddd': dayNames[dayOfWeek]
    };

    // Replace each format token with its corresponding value
    return format.replace(/dd|d|mmm|mm|m|yyyy|yy|ddd/g, match => replacements[match]);
}

// console.log(formatDate(today, 'dd-mm-yy'));       // e.g., "26-06-25"
// console.log(formatDate(today, 'ddd-mmm-yyyy'));    // e.g., "Thu-Jun-2025"
// console.log(formatDate(today, 'd/m/yyyy'));        // e.g., "26/6/2025"
// console.log(formatDate('2025-12-25', 'ddd, mmm d, yyyy')); // e.g., "Thu, Dec 25, 2025"


// Returns only numbers from the input string
export function Numbers(value) {
  return value.replace(/[^0-9]/g, "");
}

// Returns only letters, spaces, apostrophes, and hyphens from the input string
export function Letters(value) {
  return value.replace(/[^A-Za-z\s'-]/g, "");
}

// Returns true if file is valid type, otherwise false
export function isValidFileType(
  file,
  validTypes = ["image/png", "image/jpg", "image/jpeg"],
  maxSizeMB = 5,
) {
  if (!file) {
    return false;
  }
  const isValidType = validTypes.includes(file.type);
  const isValidSize = file.size / (1024 * 1024) <= maxSizeMB; // size in MB
  return isValidType && isValidSize;
}

// Returns the authenticated user object from session storage, or null if not found or invalid
export function getAuthenticatedUser(showAlert, translate) {
  const raw = sessionStorage.getItem("user");
  if (!raw) {
    showAlert(translate("error.userIDNotFound"), msg.err);
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch {
    showAlert(translate("error.userIDNotFound"), msg.err);
    return null;
  }
}
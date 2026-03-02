// set data
export function setLocalstorageData({ key, data }) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error setting local storage data:", error);
  }
}

// get data
export function getLocalstorageData(key) {
  try {
    const data = localStorage.getItem(key);
    return data && JSON.parse(data);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

//remove items
export const removeLocalstorageData = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

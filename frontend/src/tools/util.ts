export const _isEmpty = (data: any = {}) => {
  const queryDefault =
    data === null || data === "undefined" || data === undefined || data === "";
  if (queryDefault) return true;
  if (typeof data === "number") return false;
  if (typeof data === "string") return false;
  const obj = queryDefault ? [] : data;
  return Object.entries(obj).length === 0;
};

export const createQueryString = (values: any) => {
  if (!values) {
    return "";
  }
  let query = "";
  let result = {};
  for (const [key, value] of Object.entries(values)) {
    if (value || value === 0 || value === false) {
      result = { ...result, [key]: value };
    }
  }
  Object.entries(result).forEach(([key, value], index) => {
    if (index === Object.keys(result).length - 1) {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}`;
      }
    } else {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}&`;
      }
    }
  });
  return query;
};

export const justNumbers = (data: string) => {
  var numsStr = data.replace(/[^0-9]/g, "");
  return numsStr;
};

export const dummyRequest = ({ _, onSuccess }: any) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

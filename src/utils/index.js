export function isNull(val) {
  if (val == null || val === undefined || val === '') return true;
  return false;
}
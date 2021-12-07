"use strict";

module.exports = function (moduleName) {
  if (typeof moduleName !== "string") {
    throw new TypeError("Passed parameter must be a string.");
  }

  try {
    require.resolve(moduleName);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      return false;
    }
    throw error;
  }
  return true;
};

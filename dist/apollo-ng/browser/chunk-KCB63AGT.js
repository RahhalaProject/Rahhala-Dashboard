// src/app/shared/utils/api-error.ts
function extractApiError(error, fallback = "An error occurred. Please try again.") {
  if (typeof error === "string" && error.trim())
    return error;
  const httpErr = error;
  const body = httpErr?.error;
  if (body && typeof body === "object") {
    const o = body;
    if (typeof o["title"] === "string" && o["title"].trim())
      return o["title"];
    if (typeof o["detail"] === "string" && o["detail"].trim())
      return o["detail"];
    if (typeof o["message"] === "string" && o["message"].trim())
      return o["message"];
  }
  const msg = error?.message;
  if (msg && typeof msg === "string" && msg.trim())
    return msg;
  return fallback;
}

export {
  extractApiError
};
//# sourceMappingURL=chunk-KCB63AGT.js.map

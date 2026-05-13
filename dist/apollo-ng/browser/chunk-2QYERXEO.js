import {
  APP_CONFIG
} from "./chunk-F4KDDWFR.js";
import {
  HttpClient
} from "./chunk-VKOXGSWD.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-74N5S3WL.js";

// src/app/core/utils/profile-picture-url.ts
function resolveProfilePictureUrl(raw, apiBaseUrl) {
  const u = raw?.trim() ?? "";
  if (!u)
    return "/layout/images/avatar.png";
  if (/^https?:\/\//i.test(u) || u.startsWith("data:"))
    return u;
  let origin;
  try {
    origin = new URL(apiBaseUrl).origin;
  } catch {
    return "/layout/images/avatar.png";
  }
  if (u.startsWith("/"))
    return `${origin}${u}`;
  return `${origin}/images/users/${u}`;
}
function resolveUploadedImageUrl(raw, apiBaseUrl) {
  const u = raw?.trim() ?? "";
  if (!u)
    return "";
  if (/^https?:\/\//i.test(u) || u.startsWith("data:"))
    return u;
  let origin;
  try {
    origin = new URL(apiBaseUrl).origin;
  } catch {
    return "";
  }
  if (u.startsWith("/"))
    return `${origin}${u}`;
  return `${origin}/images/users/${u}`;
}

// src/app/core/services/user-profile.service.ts
var UserProfileService = class _UserProfileService {
  http = inject(HttpClient);
  config = inject(APP_CONFIG);
  base = `${this.config.apiUrl}/v1`;
  getMyProfile() {
    return this.http.get(`${this.base}/Users/my-profile`);
  }
  updateMyProfile(body) {
    return this.http.put(`${this.base}/Users/my-profile`, body);
  }
  uploadSingleImage(file) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(`${this.base}/FileUpload/single-Image`, formData).pipe(map((res) => (res?.fileName ?? "").trim()));
  }
  static \u0275fac = function UserProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserProfileService, factory: _UserProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  resolveProfilePictureUrl,
  resolveUploadedImageUrl,
  UserProfileService
};
//# sourceMappingURL=chunk-2QYERXEO.js.map

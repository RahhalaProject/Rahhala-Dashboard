/**
 * Builds a usable image URL for p-avatar.
 * - Full http(s) / data URLs are returned as-is.
 * - Paths starting with `/` are resolved against the API host origin.
 * - Bare file names map to `{origin}/images/users/{fileName}`.
 */
export function resolveProfilePictureUrl(raw: string | null | undefined, apiBaseUrl: string): string {
    const u = raw?.trim() ?? '';
    if (!u) return '/layout/images/avatar.png';
    if (/^https?:\/\//i.test(u) || u.startsWith('data:')) return u;

    let origin: string;
    try {
        origin = new URL(apiBaseUrl).origin;
    } catch {
        return '/layout/images/avatar.png';
    }

    if (u.startsWith('/')) return `${origin}${u}`;
    return `${origin}/images/users/${u}`;
}

/**
 * Same URL rules as {@link resolveProfilePictureUrl} for values returned from
 * `FileUpload/single-Image`, but returns an empty string when there is no value
 * (no placeholder avatar).
 */
export function resolveUploadedImageUrl(raw: string | null | undefined, apiBaseUrl: string): string {
    const u = raw?.trim() ?? '';
    if (!u) return '';
    if (/^https?:\/\//i.test(u) || u.startsWith('data:')) return u;

    let origin: string;
    try {
        origin = new URL(apiBaseUrl).origin;
    } catch {
        return '';
    }

    if (u.startsWith('/')) return `${origin}${u}`;
    return `${origin}/images/users/${u}`;
}

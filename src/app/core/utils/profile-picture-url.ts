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

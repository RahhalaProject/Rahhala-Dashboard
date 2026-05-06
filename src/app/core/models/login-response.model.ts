export interface LoginResponse {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    refreshToken: string;
    accessTokenExpiration?: string | Date;
    roles: string[];
}

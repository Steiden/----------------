export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const endpoints: Record<string, string> = {
    'login': `${BASE_URL}/auth/signin`,
    'register': `${BASE_URL}/auth/signup`,
    'logout': `${BASE_URL}/auth/logout`,
    'profile': `${BASE_URL}/auth/user`,
    'forgot': `${BASE_URL}/auth/forgot`,
}
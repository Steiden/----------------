export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const endpoints: Record<string, string> = {
    'login': `${BASE_URL}/auth/signin`,
    'register': `${BASE_URL}/auth/signup`,
    'logout': `${BASE_URL}/auth/logout`,
    'profile': `${BASE_URL}/auth/user`,
    'forgot': `${BASE_URL}/auth/forgot`,
    'reset': `${BASE_URL}/auth/reset`,
    'users': `${BASE_URL}/user/search`,
    'user': `${BASE_URL}/user`,
    'chats': `${BASE_URL}/chats`,
    'chat': `${BASE_URL}/chats/`,
    'messages': `${BASE_URL}/chats/`,
    'message': `${BASE_URL}/chats/`,
}
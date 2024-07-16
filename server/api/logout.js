export default defineEventHandler(async (event) => {
    deleteCookie(event, 'auth_token', { // Очищаю куки, и всё, считай, что юзер вышел
        path: '/',
    })
    return {message: 'Logged out'}
})

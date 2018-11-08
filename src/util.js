export function getRedirectPath({type, avatar}) {
    // 根据用户信息 返回跳转地址
    // user.type /boss /user
    // user.avatar /bossInfo /userInfo
    let url = (type === 'boss') ? '/boss' : '/user'
    if (!avatar) {
        url += 'Info'
    }
    return url
}
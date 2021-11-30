/*
 * @Author: matiastang
 * @Date: 2021-11-12 09:49:44
 * @LastEditors: matiastang
 * @LastEditTime: 2021-11-30 16:28:33
 * @FilePath: /datumwealth-openalpha-front/src/common/utils/check/userInfoCheck.ts
 * @Description: 用户信息校验
 */
/**
 * 邮箱校验
 * @param email 邮箱
 * @returns 错误提示 | 正确null
 */
function email_check(email: string): string | null {
    if (email.trim() == '') {
        return '请输入邮箱'
    }
    const reg = /^[A-Za-z\d]+@[A-Za-z\d]+.[A-Za-z\d]{2,5}$/
    if (!reg.test(email)) {
        return '邮箱格式不正确'
    }
    return null
}
/**
 * 手机号校验
 * @param phone 手机号
 * @returns 结果
 */
function phone_check(phone: string): string | null {
    if (phone.trim() == '') {
        return '请输入手机号'
    }
    if (phone.length < 11) {
        return '请输入11位手机号'
    }
    const reg = /^[\d]{11}$/
    if (!reg.test(phone)) {
        return '手机号格式不正确'
    }
    return null
}

/**
 * 验证码校验
 * @param code 验证码
 * @returns 结果
 */
function code_check(code: string): string | null {
    if (code.trim() == '') {
        return '请输入验证码'
    }
    if (code.length !== 6) {
        return '请输入6位验证码'
    }
    const reg = /^[\d]{6}$/
    if (!reg.test(code)) {
        return '验证码格式不正确'
    }
    return null
}

/**
 * 密码校验
 * @param password 密码
 * @returns 结果
 */
function password_check(password: string): string | null {
    if (password.trim() == '') {
        return '请输入密码'
    }
    const reg = /^[A-Za-z\d]{6,20}$/
    if (!reg.test(password)) {
        return '密码格式为6-20位数字与字母组合'
    }
    return null
}

export { phone_check, code_check, password_check, email_check }

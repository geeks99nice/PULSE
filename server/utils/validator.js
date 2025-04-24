/**
 * 이메일 유효성 검사
 * @param {string} email - 검사할 이메일 주소
 * @returns {boolean} 유효성 여부
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 비밀번호 유효성 검사 (최소 길이 6자, 영문/숫자 조합)
 * @param {string} password - 검사할 비밀번호
 * @returns {boolean} 유효성 여부
 */
const isValidPassword = (password) => {
  // 최소 6자, 영문자와 숫자 조합
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};

/**
 * 이름 유효성 검사 (2~20자)
 * @param {string} name - 검사할 이름
 * @returns {boolean} 유효성 여부
 */
const isValidName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 20;
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidName
};
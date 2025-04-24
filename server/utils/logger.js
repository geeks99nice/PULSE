const fs = require('fs');
const path = require('path');

// 로그 디렉토리 확인 및 생성
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

/**
 * 시스템 로그 기록
 * @param {string} level - 로그 레벨 (info, error, warn, debug)
 * @param {string} message - 로그 메시지
 * @param {Object} data - 추가 데이터 (선택사항)
 */
const log = (level, message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  
  // 파일에 로그 저장
  const logFile = path.join(logDir, `${new Date().toISOString().split('T')[0]}.log`);
  fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
};

module.exports = {
  info: (message, data) => log('info', message, data),
  error: (message, data) => log('error', message, data),
  warn: (message, data) => log('warn', message, data),
  debug: (message, data) => log('debug', message, data),
};
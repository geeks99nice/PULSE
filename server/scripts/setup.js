/**
 * 초기 설정 스크립트
 * 기본 관리자 계정 생성
 */

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Admin = require('../models/admin');
const { isValidEmail, isValidPassword } = require('../utils/validator');

// 환경 변수 로드
dotenv.config();

// 기본 관리자 정보
const adminUsername = process.env.ADMIN_USERNAME || 'admin';
const adminPassword = process.env.ADMIN_PASSWORD || 'adminPassword123';
const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

// 기본 관리자 계정 생성 함수
async function setupAdminAccount() {
  try {
    // 데이터베이스 연결
    console.log('데이터베이스에 연결 중...');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('데이터베이스 연결 성공');
    
    // 기존 관리자 확인
    const existingAdmin = await Admin.findOne({ username: adminUsername });
    
    if (existingAdmin) {
      console.log(`\n기존 관리자 계정(${adminUsername})이 이미 존재합니다.`);
      await mongoose.disconnect();
      return;
    }
    
    // 유효성 검사
    if (!isValidEmail(adminEmail)) {
      console.error('유효하지 않은 이메일 형식입니다');
      await mongoose.disconnect();
      return;
    }
    
    if (!isValidPassword(adminPassword)) {
      console.error('비밀번호는 최소 6자 이상이어야 하며 영문자와 숫자를 포함해야 합니다');
      await mongoose.disconnect();
      return;
    }
    
    // 관리자 계정 생성
    const admin = new Admin({
      username: adminUsername,
      email: adminEmail,
      password: adminPassword,
      role: 'superadmin'
    });
    
    await admin.save();
    
    console.log(`\n관리자 계정(${adminUsername})이 성공적으로 생성되었습니다.`);
    
    // 데이터베이스 연결 해제
    await mongoose.disconnect();
    console.log('데이터베이스 연결 해제');
    
  } catch (error) {
    console.error('관리자 계정 생성 중 오류 발생:', error);
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  }
}

// 스크립트 실행
setupAdminAccount();
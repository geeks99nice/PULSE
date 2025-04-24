const express = require('express');
const router = express.Router();

// 다른 라우트 파일들 임포트
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const deliveryRoutes = require('./deliveryRoutes');
const sentenceRoutes = require('./sentenceRoutes');

// 라우트 설정
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/sentences', sentenceRoutes);

// API 버전 및 상태 확인용 라우트
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'PULSE API 서버가 실행 중입니다',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
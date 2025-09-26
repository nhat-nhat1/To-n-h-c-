// Biến toàn cục
let selectedDifficulty = 'easy';

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const startBtn = document.getElementById('start-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const selectedDifficultyElement = document.getElementById('selected-difficulty');

// Khởi tạo game khi trang load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Game đã sẵn sàng!');
    initGame();
});

// Khởi tạo game
function initGame() {
    console.log('Đang khởi tạo game...');
    
    // Đặt độ khó mặc định là Dễ
    setDefaultDifficulty();
    
    // Thêm sự kiện cho các nút độ khó
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Đã chọn độ khó:', this.dataset.difficulty);
            selectDifficulty(this);
        });
    });
    
    // Thêm sự kiện cho nút Bắt Đầu
    startBtn.addEventListener('click', function() {
        console.log('Bắt đầu game với độ khó:', selectedDifficulty);
        startGame();
    });
    
    console.log('Khởi tạo thành công!');
}

// Chọn độ khó
function selectDifficulty(button) {
    // Xóa active khỏi tất cả nút
    difficultyBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Thêm active vào nút được chọn
    button.classList.add('active');
    selectedDifficulty = button.dataset.difficulty;
    
    // Cập nhật thông báo "Đã chọn"
    selectedDifficultyElement.textContent = `Đã chọn: ${getDifficultyName(selectedDifficulty)}`;
    
    console.log('Đã cập nhật độ khó:', selectedDifficulty);
}

// Đặt độ khó mặc định
function setDefaultDifficulty() {
    const easyBtn = document.querySelector('.difficulty-btn.easy');
    if (easyBtn) {
        easyBtn.classList.add('active');
        selectedDifficulty = 'easy';
        selectedDifficultyElement.textContent = `Đã chọn: ${getDifficultyName(selectedDifficulty)}`;
    }
}

// Bắt đầu game
function startGame() {
    console.log('Đang bắt đầu game...');
    
    // Ẩn màn hình bắt đầu
    startScreen.style.display = 'none';
    
    // Hiện màn hình game
    gameContainer.style.display = 'block';
    
    // Cập nhật độ khó trong game
    document.getElementById('difficulty-value').textContent = getDifficultyName(selectedDifficulty);
    
    console.log('Game đã bắt đầu!');
}

// Utility functions
function getDifficultyName(difficulty) {
    const names = { 
        easy: 'Dễ', 
        medium: 'Khó', 
        hard: 'Siêu Khó' 
    };
    return names[difficulty] || 'Dễ';
}

// Thêm sự kiện cho nút trả lời (demo đơn giản)
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answer-input').value);
    const correctAnswer = 8; // 5 + 3 = 8
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Chính xác! +10 điểm';
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = `Sai rồi! Đáp án đúng là: ${correctAnswer}`;
        feedbackElement.className = 'feedback incorrect';
    }
});

// Thêm sự kiện cho nút về menu
document.getElementById('back-to-menu').addEventListener('click', function() {
    gameContainer.style.display = 'none';
    startScreen.style.display = 'flex';
});
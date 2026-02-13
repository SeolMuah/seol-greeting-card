document.addEventListener('DOMContentLoaded', () => {
    // Initialize Supabase
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === 'YOUR_SUPABASE_URL') {
        alert('Supabase 설정이 필요합니다. script/config.js 파일을 확인해주세요.');
        return;
    }
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const messageForm = document.getElementById('message-form');
    const messagesGrid = document.getElementById('messages-grid');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');
    const commentForm = document.getElementById('comment-form');
    let currentMessageId = null;

    // Load Messages
    async function loadMessages() {
        // Clear grid first? No, maybe append or diff? For simplicity, clear and redraw or just initial load.
        // Let's simple load everything sorted by date desc
        const { data, error } = await supabase
            .from('greeting_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error loading messages:', error);
            messagesGrid.innerHTML = '<p>메시지를 불러오는데 실패했습니다.</p>';
            return;
        }

        renderMessages(data);
    }

    function renderMessages(messages) {
        messagesGrid.innerHTML = '';
        if (messages.length === 0) {
            messagesGrid.innerHTML = '<p class="no-messages">첫 번째 덕담을 남겨주세요!</p>';
            return;
        }

        messages.forEach(msg => {
            const card = document.createElement('div');
            card.className = `message-card ${msg.color || 'pastel-yellow'}`;
            // Random rotation specific to each card visual
            const rotate = (Math.random() * 6 - 3).toFixed(1);
            card.style.transform = `rotate(${rotate}deg)`;

            card.innerHTML = `
                <div class="pin">📍</div>
                <p class="msg-content">${escapeHtml(msg.message)}</p>
                <p class="msg-author">- ${escapeHtml(msg.nickname)}</p>
            `;

            card.addEventListener('click', () => openModal(msg));
            messagesGrid.appendChild(card);
        });
    }

    // Post Message
    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nickname = document.getElementById('nickname').value;
        const message = document.getElementById('message-content').value;
        const colors = ['pastel-pink', 'pastel-blue', 'pastel-green', 'pastel-yellow', 'pastel-purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const btn = document.getElementById('btn-post');
        btn.disabled = true;
        btn.innerText = '등록 중...';

        const { error } = await supabase
            .from('greeting_messages')
            .insert([{ nickname, message, color: randomColor }]);

        if (error) {
            alert('메시지 등록 실패: ' + error.message);
        } else {
            document.getElementById('message-content').value = ''; // Keep nickname
            loadMessages(); // Reload to show new
        }
        btn.disabled = false;
        btn.innerText = '덕담 남기기 💌';
    });

    // Open Modal
    async function openModal(msg) {
        currentMessageId = msg.id;
        document.getElementById('modal-nickname').innerText = msg.nickname;
        document.getElementById('modal-date').innerText = new Date(msg.created_at).toLocaleDateString();
        document.getElementById('modal-message').innerText = msg.message;

        // Remove existing color classes and add the message color
        const content = document.querySelector('.modal-content');
        content.classList.remove('pastel-pink', 'pastel-blue', 'pastel-green', 'pastel-yellow', 'pastel-purple');
        content.classList.add(msg.color || 'pastel-yellow');

        modal.classList.remove('hidden');
        loadComments(msg.id);
    }

    // Load Comments
    async function loadComments(messageId) {
        const list = document.getElementById('comments-list');
        list.innerHTML = 'loading...';

        const { data, error } = await supabase
            .from('greeting_comments')
            .select('*')
            .eq('message_id', messageId)
            .order('created_at', { ascending: true });

        list.innerHTML = '';
        if (data && data.length > 0) {
            data.forEach(comment => {
                const item = document.createElement('div');
                item.className = 'comment-item';
                item.innerHTML = `<strong>${escapeHtml(comment.nickname)}:</strong> ${escapeHtml(comment.content)}`;
                list.appendChild(item);
            });
        } else {
            list.innerHTML = '<p class="no-comments">아직 댓글이 없습니다.</p>';
        }
    }

    // Post Comment
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!currentMessageId) return;

        const nickname = document.getElementById('comment-nickname').value;
        const content = document.getElementById('comment-content').value;

        const { error } = await supabase
            .from('greeting_comments')
            .insert([{ message_id: currentMessageId, nickname, content }]);

        if (error) {
            alert('댓글 등록 실패');
        } else {
            document.getElementById('comment-content').value = '';
            loadComments(currentMessageId);
        }
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        currentMessageId = null;
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.add('hidden');
            currentMessageId = null;
        }
    }

    // Helper
    function escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Initial Load
    loadMessages();
});

(function () {
    'use strict';

    function clock(value) {
        if (!Number.isFinite(value) || value < 0) return '0:00';
        const seconds = Math.floor(value);
        return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    }

    function bind(root) {
        if (!root || root.dataset.playerBound === 'true') return;
        const audio = root.querySelector('audio');
        const play = root.querySelector('[data-player-play]');
        const seek = root.querySelector('[data-player-seek]');
        const progress = root.querySelector('[data-player-progress]');
        const current = root.querySelector('[data-player-current]');
        const duration = root.querySelector('[data-player-duration]');
        const rewind = root.querySelector('[data-player-rewind]');
        const forward = root.querySelector('[data-player-forward]');
        const loop = root.querySelector('[data-player-loop]');
        const speed = root.querySelector('[data-player-speed]');
        if (!audio || !play || !seek) return;

        root.dataset.playerBound = 'true';

        const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
        const pauseIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
        const rewindIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><text x="12" y="16.5" font-size="8.5" font-weight="900" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">6</text></svg>';
        const forwardIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><text x="12" y="16.5" font-size="8.5" font-weight="900" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">6</text></svg>';

        play.innerHTML = playIcon;
        if (rewind) rewind.innerHTML = rewindIcon;
        if (forward) forward.innerHTML = forwardIcon;

        function sync() {
            const total = Number.isFinite(audio.duration) ? audio.duration : 0;
            const elapsed = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
            const value = total > 0 ? Math.min(100, Math.max(0, elapsed / total * 100)) : 0;
            if (progress) progress.style.width = `${value}%`;
            if (current) current.textContent = clock(elapsed);
            if (duration) duration.textContent = clock(total);
            play.classList.toggle('is-playing', !audio.paused && !audio.ended);
            play.setAttribute('aria-label', audio.paused || audio.ended ? '再生' : '一時停止');
            play.innerHTML = audio.paused || audio.ended ? playIcon : pauseIcon;
            if (loop) loop.classList.toggle('active', audio.loop);
            if (speed) {
                const rateLabel = audio.playbackRate === 1
                    ? '1.0'
                    : audio.playbackRate.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
                speed.textContent = `${rateLabel}x`;
            }
        }

        play.addEventListener('click', () => {
            if (audio.paused || audio.ended) {
                if (audio.ended) audio.currentTime = 0;
                audio.play().catch(() => sync());
            } else {
                audio.pause();
            }
        });
        function seekFromPointer(event) {
            if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
            const rect = seek.getBoundingClientRect();
            if (!rect.width) return;
            const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
            audio.currentTime = ratio * audio.duration;
            sync();
        }

        seek.addEventListener('click', seekFromPointer);
        seek.addEventListener('keydown', (event) => {
            if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                const delta = event.key === 'ArrowLeft' ? -6 : 6;
                audio.currentTime = Math.min(audio.duration, Math.max(0, audio.currentTime + delta));
                sync();
            }
        });
        if (rewind) {
            rewind.addEventListener('click', () => {
                audio.currentTime = Math.max(0, audio.currentTime - 6);
                sync();
            });
        }
        if (forward) {
            forward.addEventListener('click', () => {
                const total = Number.isFinite(audio.duration) ? audio.duration : 0;
                audio.currentTime = Math.min(total, audio.currentTime + 6);
                sync();
            });
        }
        if (loop) {
            loop.addEventListener('click', () => {
                audio.loop = !audio.loop;
                sync();
            });
        }
        if (speed) {
            speed.addEventListener('click', () => {
                audio.playbackRate = audio.playbackRate === 1 ? 0.75 : 1;
                sync();
            });
        }
        ['loadedmetadata', 'durationchange', 'timeupdate', 'play', 'pause', 'ended', 'emptied'].forEach((eventName) => {
            audio.addEventListener(eventName, sync);
        });
        sync();
    }

    function init() {
        document.querySelectorAll('[data-derived-player]').forEach(bind);
    }

    window.ListeningDerivedPlayer = { bind, init };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();

/**
 * Touch Gestures — swipe to open/close sidebar and right panel on mobile
 */
const TouchGestures = {
  _startX: 0,
  _startY: 0,
  _threshold: 60,

  init() {
    const main = document.querySelector('.main-area');
    if (!main) return;

    main.addEventListener('touchstart', (e) => {
      this._startX = e.touches[0].clientX;
      this._startY = e.touches[0].clientY;
    }, { passive: true });

    main.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - this._startX;
      const dy = endY - this._startY;

      // Ignore vertical swipes
      if (Math.abs(dy) > Math.abs(dx)) return;
      if (Math.abs(dx) < this._threshold) return;

      const vw = window.innerWidth;

      if (dx > 0 && this._startX < 30) {
        // Swipe right from left edge → open sidebar
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.add('open');
      } else if (dx < 0 && this._startX < 260) {
        // Swipe left on sidebar → close
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
        }
      } else if (dx < 0 && this._startX > vw - 30) {
        // Swipe left from right edge → open right panel
        const panel = document.getElementById('right-panel');
        if (panel) panel.classList.add('open');
      } else if (dx > 0 && this._startX > vw - 300) {
        // Swipe right on right panel → close
        const panel = document.getElementById('right-panel');
        if (panel && panel.classList.contains('open')) {
          panel.classList.remove('open');
        }
      }
    }, { passive: true });
  }
};

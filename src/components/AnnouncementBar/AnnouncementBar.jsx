import './AnnouncementBar.css'

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>
        <span className="announcement-bar__message announcement-bar__message--desktop">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
        </span>

        <span className="announcement-bar__divider"> | </span>

        <span className="announcement-bar__message">
          FREE SHIPPING on orders &gt; $200
        </span>

        <span className="announcement-bar__divider_second">|</span>

        <span className="announcement-bar__message announcement-bar__message--return">
          easy 45 day return window.
        </span>
      </p>
    </div>
  )
}

export default AnnouncementBar
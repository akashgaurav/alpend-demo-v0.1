import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function IconX({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function IconTelegram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function IconGithub({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconGlobe({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconDoc({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function IconCheck({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 6.5 5 9.5 11 3.5" />
    </svg>
  )
}

function IconArrow({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7.5h10M9 4l3.5 3.5L9 11" />
    </svg>
  )
}

function IconLock({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="5.5" width="9" height="6" rx="1.5" />
      <path d="M3.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5" />
    </svg>
  )
}

function IconExternal({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 2H2v7h7V6.5M6.5 1.5H9V4M9 1.5 4.5 6" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PILL BUTTON — Alpend brand style (label left + circular icon right)
// ─────────────────────────────────────────────────────────────────────────────

function PillButton({ label, accent = '#14b8a6', onClick, size = 'sm', icon = 'arrow', fullWidth = false }) {
  const [hov, setHov] = useState(false)
  const xl = size === 'xl'
  const sm = size === 'sm'
  const iconSize = xl ? 14 : sm ? 9 : 11
  const circleSize = xl ? 44 : sm ? 22 : 30
  const iconColor = accent === '#f59e0b' ? '#1a0f00' : '#071e1e'

  const ArrowIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 11 11" fill="none">
      <path d="M2.5 8.5L8.5 2.5M8.5 2.5H3.5M8.5 2.5V7.5"
        stroke={iconColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  const ReturnIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 11 11" fill="none">
      <path d="M8.5 2.5v3a3 3 0 0 1-3 3H2.5M2.5 8.5 4.5 6.5M2.5 8.5l2-2"
        stroke={iconColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: xl ? 16 : sm ? 6 : 10,
        padding: xl ? '7px 7px 7px 28px' : sm ? '3px 3px 3px 10px' : '5px 5px 5px 18px',
        borderRadius: 100,
        background: hov ? accent + '18' : '#071e1e',
        border: `1px solid ${hov ? accent + '55' : '#1e4040'}`,
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
        whiteSpace: 'nowrap',
        width: fullWidth ? '100%' : undefined,
        justifyContent: fullWidth ? 'space-between' : undefined,
      }}
    >
      <span style={{
        fontSize: xl ? 16 : sm ? 11 : 13,
        fontWeight: xl ? 600 : 500,
        color: hov ? accent : '#8ecece',
        transition: 'color 0.15s cubic-bezier(0.4,0,0.2,1)',
        flex: fullWidth ? 1 : undefined,
        textAlign: fullWidth ? 'left' : undefined,
        letterSpacing: xl ? '-0.01em' : undefined,
      }}>
        {label}
      </span>
      <span style={{
        width: circleSize,
        height: circleSize,
        borderRadius: '50%',
        background: accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transform: hov ? 'scale(1.1)' : 'scale(1)',
        boxShadow: hov ? `0 0 16px ${accent}60` : 'none',
        transition: 'transform 0.2s cubic-bezier(0.33,1,0.68,1), box-shadow 0.2s',
      }}>
        {icon === 'return' ? <ReturnIcon /> : <ArrowIcon />}
      </span>
    </button>
  )
}

function IconSpinner({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={{ animation: 'a-spin 0.75s linear infinite' }}>
      <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <path d="M13 7.5a5.5 5.5 0 0 0-5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO
// ─────────────────────────────────────────────────────────────────────────────

function AlpendLogo({ className = 'h-7 w-auto' }) {
  return (
    <svg className={className} viewBox="0 0 942 215" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M160.154 93.627C178.44 129.07 194.437 160.53 202.634 177.08L190.802 210.091C185.293 199.739 172.538 175.064 158.227 147.019C139.671 110.658 123.975 80.2435 123.344 79.4248C122.714 78.6128 120.457 81.3531 118.327 85.5146C107.215 107.228 75.1084 169.33 63.4463 191.666L53.4932 210.727L41.876 178.313C50.1016 161.378 67.6951 126.711 88.9463 85.6816L108.1 48.7041L103.907 40.4443C101.601 35.9034 99.0512 31.2056 98.2412 30.0068C97.1908 28.4554 91.5694 37.9745 78.7197 63.0645C54.883 109.608 40.4811 137.417 32.5059 152.171L20.8496 119.649L26.5635 108.527C35.3503 91.4208 51.4957 60.0044 62.4404 38.7119L82.3408 0H111.849L160.154 93.627ZM148.354 0.366211C156.118 0.0896709 162.63 0.0898354 162.827 0.366211C163.02 0.642851 179.297 32.0868 198.996 70.2422L223.745 118.178L211.614 152.025C206.578 142.186 199.694 128.717 192.163 113.961C177.021 84.2962 157.794 46.7151 149.434 30.4473L134.232 0.869141L148.354 0.366211ZM45.8086 0.0224609C59.605 0.00158754 60.098 0.131721 58.5352 3.41992C57.6401 5.30247 47.6599 24.6818 36.3564 46.4824C27.5624 63.4445 17.7672 82.4055 11.7178 94.1709L0 61.4746C2.78314 55.9833 5.84185 49.9806 9.03906 43.7471L31.4551 0.046875L45.8086 0.0224609ZM199.452 0.0742188L213.868 0.149414L236.284 43.9209C239.19 49.595 241.97 55.0943 244.524 60.2041L232.516 93.708C220.868 71.1777 203.728 37.5003 190.949 11.8652L185.033 0L199.452 0.0742188Z" fill="white" />
      <path d="M509.932 49.6577C521.245 49.6577 531.05 52.2216 539.346 57.3501C547.642 62.4786 554.053 69.4926 558.578 78.3921C563.103 87.2917 565.366 97.3984 565.366 108.711C565.366 119.874 563.103 129.905 558.578 138.804C554.053 147.704 547.567 154.718 539.12 159.846C530.824 164.824 521.019 167.313 509.706 167.313C500.505 167.313 492.283 165.428 485.043 161.657C477.954 157.886 472.524 152.606 468.753 145.818V214.375H449.746V52.3726H466.942L468.753 70.9263C472.373 65.496 477.502 60.5936 484.139 56.2192C490.926 51.845 499.524 49.6578 509.932 49.6577ZM330.514 49.6577C341.827 49.6577 350.953 51.7691 357.892 55.9927C364.83 60.0653 369.883 65.5708 373.051 72.5093C376.218 79.448 377.803 87.1413 377.803 95.5884V129.98C377.803 135.561 378.481 139.785 379.839 142.651C381.196 145.517 384.666 147.252 390.247 147.855V164.598C385.269 164.598 380.744 163.994 376.671 162.788C372.598 161.43 369.129 159.319 366.263 156.453C363.548 153.436 361.587 149.514 360.38 144.687C356.609 151.022 351.405 156.377 344.769 160.751C338.282 165.126 330.439 167.313 321.237 167.313C313.545 167.313 306.531 166.031 300.195 163.466C293.86 160.902 288.806 157.056 285.035 151.927C281.415 146.648 279.605 140.237 279.605 132.695C279.606 123.946 281.868 117.008 286.393 111.879C290.918 106.6 296.876 102.829 304.268 100.566C311.81 98.1525 319.88 96.9458 328.478 96.9458H358.797C358.797 89.1021 357.439 82.9173 354.724 78.3921C352.159 73.8671 348.765 70.6245 344.542 68.6636C340.318 66.7026 335.642 65.7222 330.514 65.7222C323.123 65.7222 316.711 67.5317 311.281 71.1519C306.002 74.6212 302.684 80.0518 301.326 87.4429H281.867C282.621 79.2975 285.337 72.4341 290.013 66.853C294.689 61.272 300.572 57.0481 307.661 54.1821C314.901 51.1653 322.519 49.6577 330.514 49.6577ZM635.943 49.6577C646.502 49.6577 655.704 51.9953 663.548 56.6714C671.391 61.3474 677.501 67.6827 681.875 75.6772C686.4 83.521 688.663 92.3453 688.663 102.15V107.127C688.663 108.334 688.587 110.22 688.437 112.784H599.063C599.516 120.175 601.251 126.812 604.268 132.695C607.435 138.427 611.658 142.953 616.938 146.271C622.368 149.589 628.553 151.249 635.491 151.249C643.335 151.249 649.896 149.438 655.176 145.818C660.455 142.198 664.301 137.296 666.715 131.112H685.495C683.534 138.05 680.291 144.234 675.766 149.665C671.24 155.095 665.584 159.394 658.796 162.562C652.159 165.73 644.391 167.313 635.491 167.313C625.083 167.313 615.656 164.9 607.209 160.073C598.913 155.246 592.35 148.458 587.523 139.709C582.697 130.81 580.283 120.401 580.283 108.485C580.283 96.7194 582.546 86.4621 587.071 77.7134C591.747 68.8139 598.233 61.9504 606.529 57.1235C614.976 52.1458 624.781 49.6578 635.943 49.6577ZM941.075 164.598H923.879L922.069 146.044C918.449 151.475 913.245 156.377 906.457 160.751C899.669 165.126 891.147 167.313 880.89 167.313C869.426 167.313 859.545 164.673 851.249 159.394C842.953 154.115 836.542 147.025 832.017 138.125C827.491 129.226 825.23 119.27 825.229 108.259C825.229 97.3987 827.417 87.5183 831.791 78.6187C836.316 69.7193 842.726 62.7052 851.022 57.5767C859.319 52.2973 869.35 49.6578 881.115 49.6577C890.317 49.6577 898.462 51.5429 905.552 55.314C912.641 59.085 918.147 64.364 922.069 71.1519V6.21533H941.075V164.598ZM425.383 164.598H406.377V6.21533H425.383V164.598ZM764.084 49.6577C777.358 49.6578 787.917 53.7301 795.761 61.8755C803.755 69.87 807.752 82.2389 807.752 98.9819V164.598H788.746V101.019C788.746 89.4043 786.333 80.6548 781.506 74.772C776.679 68.8894 769.439 65.9478 759.785 65.9478C750.131 65.9478 742.061 69.4931 735.575 76.5825C729.24 83.5212 726.072 93.4765 726.072 106.449V164.598H707.065V52.3726H724.262L725.393 72.5093C729.013 65.4198 734.217 59.8388 741.005 55.7661C747.793 51.6934 755.486 49.6577 764.084 49.6577ZM330.062 111.653C324.782 111.653 319.804 112.257 315.128 113.463C310.452 114.519 306.681 116.555 303.815 119.572C300.949 122.438 299.516 126.511 299.516 131.791C299.516 138.578 301.93 143.556 306.757 146.723C311.584 149.74 317.391 151.249 324.179 151.249C331.721 151.249 338.056 149.363 343.185 145.592C348.313 141.67 352.159 136.692 354.724 130.659C357.439 124.625 358.797 118.365 358.797 111.879V111.653H330.062ZM507.67 66.1743C500.128 66.1743 493.415 67.9848 487.532 71.605C481.8 75.0743 477.275 79.9767 473.956 86.312C470.789 92.6471 469.205 100.038 469.205 108.485C469.205 116.329 470.788 123.494 473.956 129.98C477.124 136.315 481.574 141.368 487.306 145.139C493.038 148.91 499.826 150.796 507.67 150.796C515.363 150.796 522.075 149.061 527.807 145.592C533.539 141.972 537.989 136.994 541.156 130.659C544.475 124.173 546.134 116.781 546.134 108.485C546.134 100.491 544.55 93.3258 541.383 86.9907C538.366 80.5046 533.991 75.4508 528.259 71.8306C522.527 68.0598 515.664 66.1744 507.67 66.1743ZM882.926 66.1743C875.685 66.1743 869.199 67.9091 863.467 71.3784C857.735 74.8477 853.134 79.7503 849.665 86.0854C846.347 92.2698 844.688 99.7363 844.688 108.485C844.688 117.234 846.422 124.776 849.892 131.112C853.361 137.447 857.962 142.349 863.693 145.818C869.576 149.136 875.987 150.796 882.926 150.796C891.222 150.796 898.236 148.91 903.968 145.139C909.7 141.217 913.999 136.089 916.865 129.753C919.882 123.267 921.391 116.178 921.391 108.485C921.391 100.34 919.882 93.0994 916.865 86.7642C913.848 80.4289 909.474 75.4507 903.742 71.8306C898.01 68.0598 891.071 66.1743 882.926 66.1743ZM635.491 65.7222C626.441 65.7222 618.371 68.5122 611.281 74.0933C604.343 79.5235 600.345 87.5188 599.289 98.0776H669.883C669.43 87.9713 665.961 80.0518 659.475 74.3198C652.988 68.588 644.994 65.7222 635.491 65.7222Z" fill="white" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: truncate party ID
// ─────────────────────────────────────────────────────────────────────────────

function truncatePartyId(id) {
  if (!id) return ''
  if (id.length <= 20) return id
  return id.slice(0, 8) + '…' + id.slice(-8)
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Header
// ─────────────────────────────────────────────────────────────────────────────

function Header({ partyId, onLogout, onConnect }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!partyId) return
    navigator.clipboard.writeText(partyId).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 md:px-14"
      style={{ height: 56 }}
    >
      <a href="https://alpend.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
        <AlpendLogo className="h-[22px] w-auto" />
      </a>
      {partyId ? (
        <div className="flex items-center gap-3">
          {/* Party ID — click to copy */}
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer select-none transition-all duration-150"
            style={{ background: '#0a2020', border: '1px solid #1e4040' }}
            onClick={handleCopy}
            title={copied ? 'Copied!' : 'Click to copy Party ID'}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2a5a5a'; e.currentTarget.style.background = '#0d2828' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e4040'; e.currentTarget.style.background = '#0a2020' }}
          >
            <span style={{ color: '#5a9090' }}><IconLock size={11} /></span>
            <span className="font-mono text-[10px]" style={{
              color: copied ? '#14b8a6' : '#8ecece',
              letterSpacing: '0.03em',
              transition: 'color 0.15s',
            }}>
              {copied ? 'Copied!' : truncatePartyId(partyId)}
            </span>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              className="text-xs px-3 py-1.5 rounded-lg transition-all duration-150"
              style={{ color: '#7ababa', border: '1px solid #1e4040', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#c0e8e8'; e.currentTarget.style.borderColor = '#2a5a5a' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7ababa'; e.currentTarget.style.borderColor = '#1e4040' }}
            >
              Logout
            </button>
          )}
        </div>
      ) : onConnect ? (
        <button
          onClick={onConnect}
          className="text-xs px-4 py-2 rounded-lg transition-all duration-150 font-semibold"
          style={{ color: '#071e1e', background: '#14b8a6', border: 'none', letterSpacing: '0.02em' }}
          onMouseEnter={e => e.currentTarget.style.background = '#0d9488'}
          onMouseLeave={e => e.currentTarget.style.background = '#14b8a6'}
        >
          Connect Wallet
        </button>
      ) : null}
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Footer
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { icon: <IconGlobe size={14} />, href: 'https://alpend.com',           label: 'Website'  },
  { icon: <IconDoc    size={14} />, href: 'https://docs.alpend.com',     label: 'Docs'     },
  { icon: <IconX      size={13} />, href: 'https://x.com/AlpendMarket',  label: 'X'        },
  { icon: <IconTelegram size={14}/>, href: 'https://t.me/AlpendDesk',    label: 'Telegram' },
  { icon: <IconGithub size={14} />, href: 'https://github.com/alpend',   label: 'GitHub'   },
]

const LEGAL_LINKS = [
  { label: 'Terms of Use',   to: '/terms'   },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Disclaimer',     to: null       },
  { label: 'Audit',          to: null       },
]

const legalLinkStyle = { color: '#4a7878', fontSize: 11, textDecoration: 'none', whiteSpace: 'nowrap' }

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #0d2a2a' }}>
      <div className="px-4 sm:px-8 md:px-14 py-4 sm:py-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

        {/* Copyright */}
        <div className="sm:flex-1 order-3 sm:order-1">
          <span style={{ color: '#4a7878', fontSize: 11 }}>© 2026 Alpend. All rights reserved.</span>
        </div>

        {/* Legal links */}
        <div className="flex items-center justify-center gap-4 flex-wrap order-1 sm:order-2">
          {LEGAL_LINKS.map(l => l.to ? (
            <Link key={l.label} to={l.to} style={legalLinkStyle}
              onMouseEnter={e => e.target.style.color = '#8ecece'}
              onMouseLeave={e => e.target.style.color = '#4a7878'}>
              {l.label}
            </Link>
          ) : (
            <a key={l.label} href="#" style={legalLinkStyle}
              onMouseEnter={e => e.target.style.color = '#8ecece'}
              onMouseLeave={e => e.target.style.color = '#4a7878'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-end gap-0.5 sm:flex-1 order-2 sm:order-3">
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
              style={{ color: '#5a8888' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#a8d8d8'; e.currentTarget.style.background = '#0d2828' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#5a8888'; e.currentTarget.style.background = 'transparent' }}>
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Step dot
// ─────────────────────────────────────────────────────────────────────────────

function StepDot({ complete }) {
  return (
    <div
      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
      style={{
        background: complete ? '#14b8a6' : 'transparent',
        border: `1.5px solid ${complete ? '#14b8a6' : '#1e4040'}`,
        boxShadow: complete ? '0 0 10px #14b8a630' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      {complete && <span style={{ color: '#071e1e' }}><IconCheck size={12} /></span>}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BACKGROUND LAYERS
// ─────────────────────────────────────────────────────────────────────────────

const A_PATH = "M218.1 127.505C243.003 175.773 264.789 218.617 275.951 241.154L259.838 286.11C252.336 272.015 234.966 238.409 215.475 200.214C190.205 150.697 168.83 109.277 167.971 108.163C167.114 107.057 164.039 110.789 161.139 116.456C146.006 146.026 102.283 230.597 86.4014 261.016L72.8496 286.969L57.0283 242.826C68.2312 219.761 92.1891 172.554 121.127 116.684L147.211 66.3262L141.502 55.0791C138.361 48.8956 134.89 42.4984 133.786 40.8652C132.356 38.7504 124.701 51.7136 107.201 85.8838C74.7424 149.262 55.1302 187.133 44.2686 207.227L28.3945 162.938L36.1729 147.796C48.139 124.5 70.1264 81.7154 85.0312 52.7188L112.132 0H152.316L218.1 127.505ZM202.031 0.5C212.606 0.123352 221.474 0.123477 221.74 0.5C222.019 0.907291 244.179 43.7151 270.996 95.6572L304.701 160.939L288.181 207.033C281.321 193.634 271.947 175.291 261.69 155.195C241.07 114.797 214.885 63.6177 203.5 41.4639L182.8 1.18457L202.031 0.5ZM62.3809 0.0302734C81.1695 0.00184335 81.8411 0.180335 79.7129 4.6582C78.4927 7.22439 64.9022 33.6139 49.5098 63.3008C37.5348 86.3983 24.1965 112.218 15.958 128.24L0 83.7139C3.78962 76.2368 7.95531 68.0637 12.3086 59.5762L42.834 0.0634766L62.3809 0.0302734ZM271.617 0.101562L291.25 0.203125L321.775 59.8125C325.733 67.5406 329.519 75.0308 332.998 81.9902L316.646 127.616C300.783 96.9341 277.441 51.0705 260.038 16.1592L251.981 0L271.617 0.101562Z"

// Watermark A — reusable inline SVG
function AMark({ width, height, opacity, color = '#14b8a6', style = {} }) {
  return (
    <svg viewBox="0 0 333 287" width={width} height={height}
      fill={color} style={{ opacity, display: 'block', ...style }}>
      <path d={A_PATH} />
    </svg>
  )
}

// WM 1: Corner — large, bottom-right, bleeds off edge
function BgWmCorner() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-5%', bottom: '-5%' }}>
        <AMark width={580} height={500} opacity={0.07} />
      </div>
    </div>
  )
}

// WM 2: Center — enormous, dead-center, very faint, ethereal
function BgWmCenter() {
  // viewBox ratio of the A mark: 333 × 287 → height = width * (287/333)
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -48%)',
        width: 'min(820px, 92vw)',
        aspectRatio: '333 / 287',
      }}>
        <svg viewBox="0 0 333 287" width="100%" height="100%"
          fill="#14b8a6" style={{ opacity: 0.038, display: 'block' }}>
          <path d={A_PATH} />
        </svg>
      </div>
    </div>
  )
}

// WM 3: Top-right stamp — crops off top and right edges, like a letterhead seal
function BgWmStamp() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-15%', right: '-10%' }}>
        <AMark width={500} height={431} opacity={0.09} />
      </div>
    </div>
  )
}

// WM 4: Tiled — repeating A-marks across entire background
function BgWmTiled() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wm-tile" x="20" y="10" width="168" height="148" patternUnits="userSpaceOnUse">
            <g transform="scale(0.505)" fill="#14b8a6" fillOpacity="0.055">
              <path d={A_PATH} />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wm-tile)" />
      </svg>
    </div>
  )
}

// WM 5: Dual — large behind + faint echo offset (depth effect)
function BgWmDual() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Primary — bottom right */}
      <div style={{ position: 'absolute', right: '-6%', bottom: '-8%' }}>
        <AMark width={600} height={517} opacity={0.07} />
      </div>
      {/* Echo — top left, very faint */}
      <div style={{ position: 'absolute', left: '-8%', top: '-5%' }}>
        <AMark width={340} height={293} opacity={0.032} />
      </div>
    </div>
  )
}

// 2. Diagonal rails (brand identity — two crossing sets of 3 bars)
function BgRails() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-60px', bottom: '-60px' }}>
        <svg viewBox="0 0 440 440" width="440" height="440" fill="none">
          <defs>
            <clipPath id="rc">
              <rect width="440" height="440"/>
            </clipPath>
          </defs>
          <g clipPath="url(#rc)">
            {[-88, 0, 88].map((o, i) => (
              <rect key={`ne${i}`} x={220+o-22} y={-700} width={44} height={1800}
                fill="#14b8a6" fillOpacity={0.11 - i*0.025}
                transform="rotate(-45, 220, 220)"
              />
            ))}
            {[-88, 0, 88].map((o, i) => (
              <rect key={`nw${i}`} x={220+o-22} y={-700} width={44} height={1800}
                fill="#14b8a6" fillOpacity={0.09 - i*0.02}
                transform="rotate(45, 220, 220)"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}

// 3. Dot grid
function BgDots() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      backgroundImage: 'radial-gradient(circle, #1c3c3c 1px, transparent 1px)',
      backgroundSize: '26px 26px',
    }} />
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 1 — Landing
// ─────────────────────────────────────────────────────────────────────────────

function LandingScreen({ onJoin }) {
  useEffect(() => { document.title = 'Alpend — Get Early Access' }, [])
  return (
    <div className="min-h-screen flex flex-col" style={{ position: 'relative' }}>
      {/* Soft central bloom */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, #14b8a60a 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative" style={{ zIndex: 2 }}>
        <div className="max-w-lg w-full text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-5 sm:mb-8 px-3 py-1.5 rounded-full text-xs tracking-wide"
            style={{ background: '#0d2828', border: '1px solid #163838', color: '#7ababa' }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#14b8a6', flexShrink: 0,
              animation: 'a-pulse 2.4s ease-in-out infinite',
            }} />
            Canton Network · Mainnet v0.1
          </div>

          {/* Headline */}
          <h1
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(1.55rem, 7vw, 2.4rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#fff' }}>Private Positions.</span><br />
            <span style={{
              background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 60%, #14b8a6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Open Markets.
            </span>
          </h1>

          {/* Subline */}
          <p className="text-sm sm:text-base leading-relaxed mb-7 sm:mb-10 mx-auto" style={{ color: '#8ecece', maxWidth: 360 }}>
            A decentralized money market on Canton — confidential by design, MEV-free execution.
          </p>

          {/* CTA */}
          <div className="mb-2">
            <button onClick={onJoin} className="hero-cta" style={{
              display: 'inline-flex', alignItems: 'center', gap: 16,
              padding: '7px 7px 7px 28px', borderRadius: 100,
              background: '#071e1e', border: '1px solid #1e4040',
              cursor: 'pointer',
            }}>
              <span className="hero-cta-fill" />
              <span className="hero-cta-label" style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', position: 'relative', zIndex: 1 }}>
                Get Early Access
              </span>
              <span className="hero-cta-circle" style={{
                width: 44, height: 44, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, position: 'relative', zIndex: 1,
              }}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="hero-cta-arrow">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Loop note */}
          <p className="mt-4 text-xs" style={{ color: '#4a7878' }}>
            Log in via Loop to continue
          </p>

          {/* Trust marks */}
          <div className="mt-8 sm:mt-14 flex items-center justify-center gap-2 text-xs" style={{ color: '#4a7878' }}>
            <span>Draper Associates</span>
            <span style={{ color: '#2a5050' }}>·</span>
            <span>Boost VC</span>
            <span style={{ color: '#2a5050' }}>·</span>
            <span>Canton Foundation</span>
          </div>
        </div>
      </main>

      <div style={{
        height: 1,
        background: 'linear-gradient(to right, transparent, #14b8a618, transparent)',
        margin: '0 auto',
        width: '60%',
        position: 'relative', zIndex: 2,
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Footer />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 2 — Connecting (Loop)
// ─────────────────────────────────────────────────────────────────────────────

function ConnectingScreen() {
  useEffect(() => { document.title = 'Alpend — Connect Your Wallet' }, [])
  return (
    <div className="dot-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 relative" style={{ zIndex: 2 }}>
        <div
          className="w-full max-w-sm rounded-2xl p-6 sm:p-8 text-center"
          style={{
            background: 'linear-gradient(160deg, #0e2e2e, #0a2424)',
            border: '1px solid #163838',
            boxShadow: '0 0 60px #14b8a610, 0 20px 60px #00000060',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: '#0d2828', border: '1px solid #1e4040', boxShadow: '0 0 20px #14b8a615' }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 5a8 8 0 1 0 8 8" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M21 8V13M21 8H16" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-white mb-1.5">Connecting to Loop</p>
          <p className="text-xs mb-8" style={{ color: '#7ababa' }}>
            Approve the connection request in Loop.
          </p>

          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 5, height: 5, borderRadius: '50%',
                background: '#14b8a6',
                animation: `a-bounce 1.3s ease-in-out ${i * 0.18}s infinite`,
              }} />
            ))}
          </div>

          <p className="mt-8 text-xs" style={{ color: '#4a7878' }}>
            Your private key never leaves your device.
          </p>
        </div>
      </main>
      <div style={{ position: 'relative', zIndex: 2 }}><Footer /></div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 3 — Whitelist Form
// ─────────────────────────────────────────────────────────────────────────────

function WhitelistScreen({ partyId, email, steps, submitting, allComplete, onEmail, onTwitter, onTelegram, onSubmit, onLogout }) {
  useEffect(() => { document.title = 'Alpend — Join the Waitlist' }, [])
  const [touched, setTouched] = useState(false)
  const emailError = touched && email.length > 0 && !steps.email

  return (
    <div className="dot-bg min-h-screen flex flex-col">
      <Header partyId={partyId} onLogout={onLogout} />

      <main className="flex-1 flex items-start justify-center px-3 sm:px-4 pt-20 sm:pt-24 pb-8 relative" style={{ zIndex: 2 }}>
        <div className="w-full max-w-2xl">

          <div className="mb-5 sm:mb-7">
            <h1 className="text-base sm:text-lg font-semibold text-white mb-1">Join the Alpend Waitlist</h1>
            <p className="text-xs sm:text-sm" style={{ color: '#6b9e9e' }}>Complete these steps to claim your spot. We review applications weekly.</p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(170deg, #0e2e2e 0%, #0a2424 100%)',
              border: '1px solid #163838',
              boxShadow: '0 0 50px #14b8a60a, 0 24px 60px #00000050',
            }}
          >
            <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #14b8a622, transparent)' }} />

            <div className="divide-y divide-[#112626]">

              {/* Step 1 — Email */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex gap-3 sm:gap-4">
                <div className="pt-0.5"><StepDot complete={steps.email} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-white">Email address</p>
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: steps.email ? '#14b8a6' : '#4a7070' }}>
                      {steps.email ? 'Done' : 'Required'}
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="you@institution.com"
                    value={email}
                    onChange={e => { onEmail(e.target.value); setTouched(true) }}
                    style={{
                      width: '100%',
                      background: '#071a1a',
                      border: `1px solid ${emailError ? '#ef4444' : steps.email ? '#14b8a625' : '#163030'}`,
                      borderRadius: 10,
                      padding: '10px 14px',
                      fontSize: 13,
                      color: '#fff',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => { if (!emailError && !steps.email) e.target.style.borderColor = '#1e4040' }}
                    onBlur={e => { if (!emailError && !steps.email) e.target.style.borderColor = '#163030' }}
                  />
                  {emailError && <p className="mt-1.5 text-xs text-red-400">Enter a valid email address.</p>}
                </div>
              </div>

              {/* Step 2 — Follow on X */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex gap-3 sm:gap-4">
                <div className="pt-0.5"><StepDot complete={steps.twitter} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-white">Follow on X</p>
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: steps.twitter ? '#14b8a6' : '#4a7070' }}>
                      {steps.twitter ? 'Done' : 'Required'}
                    </span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#6b9e9e' }}>
                    Follow <span className="text-white">@AlpendMarket</span> for protocol updates.
                  </p>
                  <button
                    onClick={onTwitter}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 active:scale-[0.97]"
                    style={{
                      background: steps.twitter ? '#14b8a612' : '#0d2424',
                      border: `1px solid ${steps.twitter ? '#14b8a630' : '#163030'}`,
                      color: steps.twitter ? '#14b8a6' : '#8ecece',
                    }}
                  >
                    {steps.twitter
                      ? <><IconCheck size={12} /> Following @AlpendMarket</>
                      : <><IconX size={13} /> Follow on X <IconExternal /></>
                    }
                  </button>
                </div>
              </div>

              {/* Step 3 — Telegram */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex gap-3 sm:gap-4">
                <div className="pt-0.5"><StepDot complete={steps.telegram} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-white">Join Telegram</p>
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: steps.telegram ? '#14b8a6' : '#4a7070' }}>
                      {steps.telegram ? 'Done' : 'Required'}
                    </span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#6b9e9e' }}>
                    Join <span className="text-white">@AlpendDesk</span> for community updates.
                  </p>
                  <button
                    onClick={onTelegram}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 active:scale-[0.97]"
                    style={{
                      background: steps.telegram ? '#14b8a612' : '#0d2424',
                      border: `1px solid ${steps.telegram ? '#14b8a630' : '#163030'}`,
                      color: steps.telegram ? '#14b8a6' : '#8ecece',
                    }}
                  >
                    {steps.telegram
                      ? <><IconCheck size={12} /> Joined @AlpendDesk</>
                      : <><IconTelegram size={13} /> Join Telegram <IconExternal /></>
                    }
                  </button>
                </div>
              </div>

              {/* Step 4 — Party ID */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex gap-3 sm:gap-4">
                <div className="pt-0.5"><StepDot complete={steps.partyId} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-white">Canton Party ID</p>
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: '#14b8a6' }}>Retrieved</span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#6b9e9e' }}>Your on-chain identifier, retrieved from Loop.</p>
                  <div style={{
                    background: '#071a1a',
                    border: '1px solid #14b8a618',
                    borderRadius: 10,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span className="font-mono text-xs" style={{ color: '#7ababa', fontSize: 12 }}>
                      {partyId.length > 20 ? `${partyId.slice(0, 10)}...${partyId.slice(-10)}` : partyId}
                    </span>
                    <span style={{ color: '#3a7070' }}><IconLock /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div style={{ padding: '16px 16px', background: '#091e1e', borderTop: '1px solid #0f2828' }} className="sm:px-6 sm:py-5">
              {!allComplete && (
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="text-xs" style={{ color: '#4a7878' }}>
                    {Object.values(steps).filter(Boolean).length} of 4 steps complete
                  </span>
                  <div className="flex items-center gap-1">
                    {Object.values(steps).map((done, i) => (
                      <div key={i} style={{
                        width: 24, height: 3, borderRadius: 2,
                        background: done ? '#14b8a6' : '#1e4040',
                        transition: 'background 0.3s ease',
                      }}/>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={allComplete && !submitting ? onSubmit : undefined}
                disabled={!allComplete || submitting}
                className="w-full flex items-center justify-center gap-2.5 rounded-xl text-sm font-semibold"
                style={{
                  padding: '13px 20px',
                  background: allComplete ? '#14b8a6' : 'transparent',
                  color: allComplete ? '#071e1e' : '#4a7878',
                  border: allComplete ? 'none' : '1px solid #1e4040',
                  cursor: allComplete && !submitting ? 'pointer' : 'default',
                  boxShadow: allComplete ? '0 0 24px #14b8a630' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {submitting
                  ? <><IconSpinner size={14} /> Submitting…</>
                  : <>Join the Waitlist {allComplete && <IconArrow />}</>
                }
              </button>
              <p className="mt-3 text-center text-xs" style={{ color: '#2a5050' }}>
                Your Party ID and account balances were read from Loop solely to verify eligibility. No funds are moved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div style={{ position: 'relative', zIndex: 2 }}><Footer /></div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 4 — Submitted (pending review)
// ─────────────────────────────────────────────────────────────────────────────

function SubmittedScreen({ email, partyId, onLogout, onEnterMarkets }) {
  useEffect(() => { document.title = "Alpend — You're on the List" }, [])
  return (
    <div className="dot-bg min-h-screen flex flex-col">
      <Header partyId={partyId} onLogout={onLogout} />
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24" style={{ zIndex: 2, position: 'relative' }}>
        <div className="w-full max-w-sm text-center">
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: '#14b8a610', border: '1px solid #14b8a628',
            boxShadow: '0 0 24px #14b8a618',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <IconCheck size={20} />
          </div>

          <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
            Application received.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#6b9e9e' }}>
            You're on the waitlist. We'll review your application and notify you at{' '}
            <span className="text-white">{email}</span> when access opens.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            <a href="https://x.com/AlpendMarket" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150"
              style={{ background: '#0e2828', border: '1px solid #183838', color: '#7ababa' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1e4040'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#183838'; e.currentTarget.style.color = '#7ababa' }}>
              <IconX size={12} /> @AlpendMarket
            </a>
            <a href="https://t.me/AlpendDesk" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150"
              style={{ background: '#0e2828', border: '1px solid #183838', color: '#7ababa' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1e4040'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#183838'; e.currentTarget.style.color = '#7ababa' }}>
              <IconTelegram size={13} /> @AlpendDesk
            </a>
          </div>

          <p className="text-xs" style={{ color: '#3a6060' }}>
            Canton Network · Backed by Draper Associates & Boost VC
          </p>

          {onEnterMarkets && (
            <button
              onClick={onEnterMarkets}
              style={{
                marginTop: 24,
                background: 'transparent',
                border: 'none',
                color: '#3a6060',
                fontSize: 11,
                cursor: 'pointer',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#6b9e9e' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#3a6060' }}
            >
              Preview Markets →
            </button>
          )}
        </div>
      </main>
      <div style={{ position: 'relative', zIndex: 2 }}><Footer /></div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MARKET ASSETS
// ─────────────────────────────────────────────────────────────────────────────

const MARKET_ASSETS = [
  { id: 'cbtc',  name: 'BitSafe BTC',       symbol: 'CBTC',  icon: '/cbtc.webp', color: '#f7931a', supplyApy: 1.24, borrowRate: 3.82, price: 95420,  ltv: 70, totalSupplied: 145.8,   totalBorrowed: 99.1,    walletKey: 'cbtc'  },
  { id: 'usdcx', name: 'Circle Stablecoin', symbol: 'USDCx', icon: '/usdc.svg',         color: '#2775ca', supplyApy: 4.85, borrowRate: 6.20, price: 1.00,   ltv: 80, totalSupplied: 8500000, totalBorrowed: 6120000, walletKey: 'usdcx' },
  { id: 'cc',    name: 'Canton Coin',       symbol: 'CC',    icon: '/cccoin.svg',       color: '#14b8a6', supplyApy: 2.10, borrowRate: 5.50, price: 0.85,   ltv: 60, totalSupplied: 1200000, totalBorrowed: 660000,  walletKey: 'cc'    },
]

function fmtUSD(n) {
  if (!n && n !== 0) return '—'
  if (n >= 1e9) return `$${(n/1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n/1e6).toFixed(2)}M`
  if (n >= 1e3) return `$${(n/1e3).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}
function fmtToken(n, dec = 4) {
  if (!n && n !== 0) return '—'
  if (n >= 1e6) return `${(n/1e6).toFixed(2)}M`
  if (n >= 1e3) return `${(n/1e3).toFixed(1)}K`
  return parseFloat(n).toFixed(dec)
}
function fmtPct(n) { return `${n.toFixed(2)}%` }

// ─────────────────────────────────────────────────────────────────────────────
// Inline action button — clean rectangular, premium feel
// ─────────────────────────────────────────────────────────────────────────────

function ActionBtn({ label, accent, onClick }) {
  const [h, setH] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: '5px 14px',
        borderRadius: 7,
        border: `1px solid ${h ? accent : accent + '55'}`,
        background: h ? accent + '18' : 'transparent',
        color: h ? accent : accent + 'cc',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.03em',
        cursor: 'pointer',
        transition: 'all 0.15s cubic-bezier(0.4,0,0.2,1)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 5 — Markets (Reimagined)
// ─────────────────────────────────────────────────────────────────────────────

function IconShield({ size = 14, color = '#14b8a6' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z"
        stroke={color} strokeWidth="1.5" fill={color + '20'} strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconEye({ open = true, size = 14, color = '#4a7878' }) {
  if (!open) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}

function ArcGauge({ value, max = 4 }) {
  const pct  = Math.min(Math.max(value / max, 0), 1)
  const r    = 52, cx = 72, cy = 68
  const arcLen = Math.PI * r
  const offset = arcLen * (1 - pct)
  const color  = value >= 2 ? '#14b8a6' : value >= 1.2 ? '#f59e0b' : '#ef4444'
  const θ  = Math.PI * (1 - pct)
  const nx = cx + r * Math.cos(θ)
  const ny = cy - r * Math.sin(θ)
  return (
    <svg width="144" height="84" viewBox="0 0 144 84">
      {[0.25, 0.5, 0.75].map((p, i) => {
        const a = Math.PI * (1 - p)
        return <line key={i}
          x1={cx + (r - 7) * Math.cos(a)} y1={cy - (r - 7) * Math.sin(a)}
          x2={cx + (r + 3) * Math.cos(a)} y2={cy - (r + 3) * Math.sin(a)}
          stroke="#1a3838" strokeWidth="1.5" />
      })}
      {/* Track */}
      <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,0 ${cx+r},${cy}`}
        fill="none" stroke="#0d2020" strokeWidth="9" strokeLinecap="round"/>
      {/* Danger zone tint */}
      <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,0 ${cx + r * Math.cos(Math.PI * 0.75)},${cy - r * Math.sin(Math.PI * 0.75)}`}
        fill="none" stroke="#ef444418" strokeWidth="9" strokeLinecap="round"/>
      {/* Progress */}
      <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,0 ${cx+r},${cy}`}
        fill="none" stroke={color} strokeWidth="9" strokeLinecap="round"
        strokeDasharray={`${arcLen} ${arcLen}`} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.33,1,0.68,1), stroke 0.3s', filter: `drop-shadow(0 0 5px ${color}60)` }}
      />
      {/* Needle */}
      <circle cx={nx} cy={ny} r={4} fill={color}
        style={{ filter: `drop-shadow(0 0 5px ${color})`, transition: 'all 0.7s cubic-bezier(0.33,1,0.68,1)' }}/>
      {/* Value */}
      <text x={cx} y={cy - 6} textAnchor="middle"
        fill={color} fontSize="20" fontWeight="700" fontFamily="IBM Plex Mono, monospace"
        style={{ transition: 'fill 0.3s' }}>
        {value >= 99 ? '∞' : value.toFixed(2)}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle"
        fill="#2a5050" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em">
        {value >= 2 ? 'SAFE' : value >= 1.2 ? 'MONITOR' : 'AT RISK'}
      </text>
    </svg>
  )
}

function DonutRing({ pct, color, size = 36, stroke = 3 }) {
  const r    = (size / 2) - stroke - 1
  const circ = 2 * Math.PI * r
  const off  = circ * (1 - Math.min(pct, 1))
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#0a1e1e" strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${circ} ${circ}`} strokeDashoffset={off} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s' }}/>
    </svg>
  )
}

function MarketsScreen({ partyId, balance, onLogout, connected = true, onConnect }) {
  useEffect(() => { document.title = 'Alpend — Dashboard' }, [])
  const [modal, setModal]           = useState(null)
  const [modalStep, setModalStep]   = useState(1)
  const [modalAmount, setModalAmount] = useState('')
  const [masked, setMasked]         = useState(false)

  const [positions, setPositions]   = useState({ supplied: {}, borrowed: {} })

  const walletBal    = (asset) => parseFloat(balance?.[asset.walletKey] || 0)
  const card         = (extra = {}) => ({ background: 'linear-gradient(160deg, #0d2a2a 0%, #091e1e 100%)', border: '1px solid #112828', borderRadius: 16, overflow: 'hidden', ...extra })
  const isBorrowSide = modal && (modal.type === 'borrow' || modal.type === 'repay')
  const accent       = isBorrowSide ? '#f59e0b' : '#14b8a6'

  const totalSuppliedUSD = Object.entries(positions.supplied).reduce((s, [id, amt]) => {
    const a = MARKET_ASSETS.find(x => x.id === id); return s + (parseFloat(amt) || 0) * a.price }, 0)
  const totalBorrowedUSD = Object.entries(positions.borrowed).reduce((s, [id, amt]) => {
    const a = MARKET_ASSETS.find(x => x.id === id); return s + (parseFloat(amt) || 0) * a.price }, 0)
  const netWorth     = totalSuppliedUSD - totalBorrowedUSD
  const healthFactor = totalBorrowedUSD > 0
    ? Object.entries(positions.supplied).reduce((s, [id, amt]) => {
        const a = MARKET_ASSETS.find(x => x.id === id)
        return s + (parseFloat(amt) || 0) * a.price * (a.ltv / 100) }, 0) / totalBorrowedUSD
    : null
  const hfColor  = healthFactor === null ? '#14b8a6' : healthFactor >= 50 ? '#14b8a6' : healthFactor >= 10 ? '#34d399' : healthFactor >= 3 ? '#a3e635' : healthFactor >= 1.5 ? '#f59e0b' : '#ef4444'
  const totalTVL = MARKET_ASSETS.reduce((s, a) => s + a.totalSupplied * a.price, 0)
  const totalBorrowedProtocol = MARKET_ASSETS.reduce((s, a) => s + a.totalBorrowed * a.price, 0)
  const netAPY   = totalSuppliedUSD > 0
    ? Object.entries(positions.supplied).reduce((s, [id, amt]) => {
        const a = MARKET_ASSETS.find(x => x.id === id)
        return s + (parseFloat(amt) || 0) * a.price * a.supplyApy }, 0) / totalSuppliedUSD
    : null
  const hasPositions = totalSuppliedUSD > 0 || totalBorrowedUSD > 0

  const openModal  = (type, asset) => { setModal({ type, asset }); setModalAmount(''); setModalStep(1) }
  const closeModal = () => { setModal(null); setModalAmount(''); setModalStep(1) }

  const getAvailable = (type, asset) => {
    if (type === 'supply')   return walletBal(asset)
    if (type === 'borrow') {
      const collateralUSD = Object.entries(positions.supplied).reduce((s, [id, amt]) => {
        const a = MARKET_ASSETS.find(x => x.id === id)
        return s + (parseFloat(amt) || 0) * a.price * (a.ltv / 100)
      }, 0)
      const userLimitUSD = Math.max(0, collateralUSD - totalBorrowedUSD)
      return userLimitUSD / asset.price
    }
    if (type === 'withdraw') return parseFloat(positions.supplied[asset.id] || 0)
    if (type === 'repay')    return parseFloat(positions.borrowed[asset.id] || 0)
    return 0
  }

  const handleConfirm = () => {
    const amt = parseFloat(modalAmount)
    if (!amt || amt <= 0) return
    const { type, asset } = modal
    setPositions(prev => {
      const next = { supplied: { ...prev.supplied }, borrowed: { ...prev.borrowed } }
      if (type === 'supply')   next.supplied[asset.id] = String((parseFloat(prev.supplied[asset.id] || 0) + amt).toFixed(6))
      if (type === 'borrow')   next.borrowed[asset.id] = String((parseFloat(prev.borrowed[asset.id] || 0) + amt).toFixed(6))
      if (type === 'withdraw') { const r = parseFloat(prev.supplied[asset.id] || 0) - amt; if (r <= 0) delete next.supplied[asset.id]; else next.supplied[asset.id] = String(r.toFixed(6)) }
      if (type === 'repay')    { const r = parseFloat(prev.borrowed[asset.id] || 0) - amt; if (r <= 0) delete next.borrowed[asset.id]; else next.borrowed[asset.id] = String(r.toFixed(6)) }
      return next
    })
    closeModal()
  }

  // Live health factor preview while typing amount
  const previewHF = (() => {
    if (!modal || !parseFloat(modalAmount)) return healthFactor
    const amt = parseFloat(modalAmount)
    const { type, asset } = modal
    let ns = { ...positions.supplied }, nb = { ...positions.borrowed }
    if (type === 'supply')   ns[asset.id] = String((parseFloat(ns[asset.id] || 0) + amt).toFixed(6))
    if (type === 'borrow')   nb[asset.id] = String((parseFloat(nb[asset.id] || 0) + amt).toFixed(6))
    if (type === 'withdraw') { const r = parseFloat(ns[asset.id] || 0) - amt; if (r <= 0) delete ns[asset.id]; else ns[asset.id] = String(r.toFixed(6)) }
    if (type === 'repay')    { const r = parseFloat(nb[asset.id] || 0) - amt; if (r <= 0) delete nb[asset.id]; else nb[asset.id] = String(r.toFixed(6)) }
    const bUSD = Object.entries(nb).reduce((s, [id, a]) => { const x = MARKET_ASSETS.find(m => m.id === id); return s + (parseFloat(a) || 0) * x.price }, 0)
    if (bUSD === 0) return null
    const col  = Object.entries(ns).reduce((s, [id, a]) => { const x = MARKET_ASSETS.find(m => m.id === id); return s + (parseFloat(a) || 0) * x.price * (x.ltv / 100) }, 0)
    return col / bUSD
  })()

  const mask = (v) => masked ? '•••••' : v

  return (
    <div className="dot-bg-subtle" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header partyId={connected ? partyId : null} onLogout={connected ? onLogout : null} onConnect={!connected ? onConnect : null} />

      {/* ── Portfolio stats bar ──────────────────────────────────────────── */}
      <div style={{ marginTop: 56, borderBottom: '1px solid #0d2424', background: 'linear-gradient(90deg, #071a1a, #081e1e)', position: 'sticky', top: 56, zIndex: 10 }}>
        <div className="px-4 sm:px-8 md:px-14" style={{ display: 'flex', alignItems: 'stretch' }}>

          {connected ? (<>
          {/* Net worth */}
          <div style={{ padding: '18px 24px 18px 0', borderRight: '1px solid #0d2424', marginRight: 24, flexShrink: 0 }}>
            <p style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Net Worth</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{mask(hasPositions ? fmtUSD(netWorth) : '—')}</p>
          </div>

          {/* Supplied */}
          <div style={{ borderRight: '1px solid #0d2424', paddingRight: 24, marginRight: 24, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '18px 0' }}>
              <p style={{ fontSize: 8, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Supplied</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#14b8a6', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{mask(fmtUSD(totalSuppliedUSD))}</p>
              <p style={{ fontSize: 8, color: netAPY !== null ? '#14b8a6aa' : '#2a5050', marginTop: 3 }}>{netAPY !== null ? `${fmtPct(netAPY)} APY` : '—'}</p>
            </div>
          </div>

          {/* Borrowed */}
          <div style={{ borderRight: '1px solid #0d2424', paddingRight: 24, marginRight: 24, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '18px 0' }}>
              <p style={{ fontSize: 8, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Borrowed</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: totalBorrowedUSD > 0 ? '#f59e0b' : '#3a6060', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{mask(fmtUSD(totalBorrowedUSD))}</p>
              <p style={{ fontSize: 8, color: totalBorrowedUSD > 0 ? '#f59e0baa' : '#2a5050', marginTop: 3 }}>{totalBorrowedUSD > 0 ? `${(Object.entries(positions.borrowed).reduce((s, [id, amt]) => { const a = MARKET_ASSETS.find(x => x.id === id); return s + (parseFloat(amt)||0) * a.price * a.borrowRate }, 0) / totalBorrowedUSD).toFixed(2)}% APR` : '—'}</p>
            </div>
          </div>

          {/* Health factor */}
          <div style={{ borderRight: '1px solid #0d2424', paddingRight: 24, marginRight: 24, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: '18px 0' }}>
            <p style={{ fontSize: 8, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Health Factor</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: hfColor, fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>
                {healthFactor !== null ? healthFactor.toFixed(2) : '—'}
              </p>
              {healthFactor !== null && (
                <span style={{ fontSize: 9, fontWeight: 600, color: hfColor, background: hfColor+'18', border: `1px solid ${hfColor}35`, borderRadius: 5, padding: '1px 6px' }}>
                  {healthFactor >= 3 ? 'Safe' : healthFactor >= 1.5 ? 'Monitor' : 'At Risk'}
                </span>
              )}
            </div>
            {healthFactor !== null && (
              <div style={{ position: 'relative', width: 120 }}>
                <div style={{ height: 5, background: '#0a1e1e', borderRadius: 3 }}>
                  <div style={{ height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${hfColor}70, ${hfColor})`, boxShadow: `0 0 6px ${hfColor}55`, transition: 'width 0.5s', width: `${Math.min(Math.log1p(healthFactor) / Math.log1p(75), 1) * 100}%` }} />
                </div>
                <div style={{ position: 'absolute', top: -2, bottom: -2, left: `${Math.log1p(1) / Math.log1p(75) * 100}%`, width: 1, background: '#ef444455' }} />
              </div>
            )}
          </div></div>
          </>) : (<>
          {/* Public: protocol-level stats */}
          <div style={{ padding: '18px 24px 18px 0', borderRight: '1px solid #0d2424', marginRight: 24, flexShrink: 0 }}>
            <p style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Total Market Size</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtUSD(totalTVL)}</p>
            <p style={{ fontSize: 8, color: '#4a7878', marginTop: 3 }}>{MARKET_ASSETS.length} assets</p>
          </div>
          <div style={{ borderRight: '1px solid #0d2424', paddingRight: 24, marginRight: 24, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '18px 0' }}>
              <p style={{ fontSize: 8, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Total Borrowed</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#f59e0b', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtUSD(totalBorrowedProtocol)}</p>
              <p style={{ fontSize: 8, color: '#4a7878', marginTop: 3 }}>{Math.round(totalBorrowedProtocol / totalTVL * 100)}% of pool</p>
            </div>
          </div>
          <div style={{ borderRight: '1px solid #0d2424', paddingRight: 24, marginRight: 24, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '18px 0' }}>
              <p style={{ fontSize: 8, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Best Supply APY</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#14b8a6', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtPct(Math.max(...MARKET_ASSETS.map(a => a.supplyApy)))}</p>
              <p style={{ fontSize: 8, color: '#4a7878', marginTop: 3 }}>{MARKET_ASSETS.sort((a,b) => b.supplyApy - a.supplyApy)[0].symbol}</p>
            </div>
          </div>
          </>)}

          {/* Protocol TVL */}
          <div style={{ padding: '18px 24px 18px 0', borderRight: '1px solid #0d2424', marginRight: 24, flexShrink: 0 }}>
            <p style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Protocol TVL</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#8ecece', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtUSD(totalTVL)}</p>
          </div>
          <div style={{ flex: 1 }} />

          {/* Right: privacy + mask */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 0 0 24px', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#0d2020', border: '1px solid #1a3838', borderRadius: 6, padding: '4px 10px' }}>
              <IconShield size={10} color="#14b8a6" />
              <span style={{ fontSize: 9, color: '#14b8a6', letterSpacing: '0.05em' }}>MEV-free · Encrypted</span>
            </div>
            <button onClick={() => setMasked(m => !m)} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'transparent', border: '1px solid #0d2424', borderRadius: 7, padding: '5px 10px', cursor: 'pointer', color: '#2a5050', fontSize: 10, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#14b8a640'; e.currentTarget.style.color='#14b8a6' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#0d2424'; e.currentTarget.style.color='#2a5050' }}>
              <IconEye open={!masked} size={11} color="currentColor" />
              <span>{masked ? 'Reveal' : 'Mask'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Aave-style two-column layout ────────────────────────────────── */}
      <main className="px-4 sm:px-8 md:px-14 pt-6 pb-8" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>

        {/* ════ SUPPLY COLUMN ════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Your Supplies */}
          {connected && totalSuppliedUSD > 0 && (
            <div style={card()} className="fade-up">
              <div style={{ padding: '12px 20px', borderBottom: '1px solid #0d2424', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <IconShield size={11} color="#14b8a6" />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#14b8a6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Supplies</span>
                </div>
                <span style={{ fontSize: 10, color: '#14b8a6', fontFamily: 'IBM Plex Mono' }}>{mask(fmtUSD(totalSuppliedUSD))}{netAPY !== null ? ` · ${fmtPct(netAPY)} APY` : ''}</span>
              </div>
              {/* Column headers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 88px', padding: '8px 20px', gap: 8 }}>
                {['Asset', 'Balance', 'APY', ''].map((h, i) => (
                  <span key={i} style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
                ))}
              </div>
              {Object.entries(positions.supplied).map(([id, amt]) => {
                const a = MARKET_ASSETS.find(x => x.id === id)
                return (
                  <div key={id} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 88px', padding: '11px 20px', gap: 8, alignItems: 'center', borderTop: '1px solid #071c1c' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: a.color+'18', border: `1px solid ${a.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                        <img src={a.icon} alt={a.symbol} style={{ width: 18, height: 18, objectFit: 'contain' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{a.symbol}</p>
                        <p style={{ fontSize: 9, color: '#5a8888' }}>{a.name}</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: '#fff', fontFamily: 'IBM Plex Mono' }}>{mask(fmtToken(parseFloat(amt)))}</p>
                      <p style={{ fontSize: 9, color: '#5a8888', fontFamily: 'IBM Plex Mono' }}>{mask(fmtUSD((parseFloat(amt)||0)*a.price))}</p>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#14b8a6', fontFamily: 'IBM Plex Mono' }}>{fmtPct(a.supplyApy)}</span>
                    <button onClick={() => openModal('withdraw', a)}
                      style={{ fontSize: 10, padding: '5px 12px', borderRadius: 7, background: '#14b8a610', border: '1px solid #14b8a630', color: '#14b8a6', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.12s' }}
                      onMouseEnter={e => e.currentTarget.style.background='#14b8a622'} onMouseLeave={e => e.currentTarget.style.background='#14b8a610'}>
                      Withdraw
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          {/* Assets to Supply */}
          <div style={card()}>
            <div style={{ padding: '12px 20px', borderBottom: '1px solid #0d2424', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#4a8080', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Assets to Supply</span>
              <span style={{ fontSize: 9, color: '#4a7878' }}>{fmtUSD(totalTVL)} total supplied</span>
            </div>
            {/* Column headers */}
            <div style={{ display: 'grid', gridTemplateColumns: connected ? '2fr 1.2fr 0.7fr 0.7fr 1fr 88px' : '2fr 1.2fr 0.7fr 0.7fr 88px', padding: '8px 20px', gap: 16 }}>
              {(connected ? ['Asset', 'Market Size', 'APY', 'Max LTV', 'Wallet', ''] : ['Asset', 'Market Size', 'APY', 'Max LTV', '']).map((h, i) => (
                <span key={i} style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
              ))}
            </div>
            {MARKET_ASSETS.map(asset => {
              const avail = asset.totalSupplied - asset.totalBorrowed
              const util  = asset.totalBorrowed / asset.totalSupplied
              const wb = walletBal(asset)
              const hasSupply = !!positions.supplied[asset.id]
              return (
                <div key={asset.id} style={{ display: 'grid', gridTemplateColumns: connected ? '2fr 1.2fr 0.7fr 0.7fr 1fr 88px' : '2fr 1.2fr 0.7fr 0.7fr 88px', padding: '13px 20px', gap: 16, alignItems: 'center', borderTop: '1px solid #0a2020', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background='#0d262600'}
                  onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: asset.color+'18', border: `1px solid ${asset.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                      <img src={asset.icon} alt={asset.symbol} style={{ width: 20, height: 20, objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{asset.symbol}</p>
                      <p style={{ fontSize: 9, color: '#5a8888' }}>{asset.name}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: '#8ecece', fontFamily: 'IBM Plex Mono' }}>{fmtToken(asset.totalSupplied, 2)} <span style={{ fontSize: 9, color: '#5a8888' }}>{asset.symbol}</span></p>
                    <p style={{ fontSize: 9, color: '#5a8888', fontFamily: 'IBM Plex Mono', marginTop: 2 }}>{fmtUSD(asset.totalSupplied * asset.price)}</p>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#14b8a6', fontFamily: 'IBM Plex Mono' }}>{fmtPct(asset.supplyApy)}</span>
                  <span style={{ fontSize: 12, color: '#6aabab', fontFamily: 'IBM Plex Mono' }}>{asset.ltv}%</span>
                  {connected && <div>
                    <p style={{ fontSize: 12, color: '#8ecece', fontFamily: 'IBM Plex Mono' }}>{mask(fmtToken(wb, 2))}</p>
                    <p style={{ fontSize: 9, color: '#5a8888', fontFamily: 'IBM Plex Mono' }}>{mask(fmtUSD(wb * asset.price))}</p>
                  </div>}
                  <button onClick={() => connected ? openModal('supply', asset) : onConnect?.()}
                    style={{ fontSize: 11, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: connected && hasSupply ? '#14b8a618' : '#14b8a622', border: '1px solid #14b8a640', color: '#14b8a6', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background='#14b8a630'; e.currentTarget.style.borderColor='#14b8a660' }}
                    onMouseLeave={e => { e.currentTarget.style.background= connected && hasSupply ? '#14b8a618' : '#14b8a622'; e.currentTarget.style.borderColor='#14b8a640' }}>
                    {connected ? (hasSupply ? '+ Supply' : 'Supply') : 'Connect'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* ════ BORROW COLUMN ════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Your Borrows */}
          {connected && totalBorrowedUSD > 0 && (
            <div style={card()} className="fade-up">
              <div style={{ padding: '12px 20px', borderBottom: '1px solid #0d2424', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <IconShield size={11} color="#f59e0b" />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Borrows</span>
                </div>
                <span style={{ fontSize: 10, color: '#f59e0b', fontFamily: 'IBM Plex Mono' }}>{mask(fmtUSD(totalBorrowedUSD))} outstanding</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 88px', padding: '8px 20px', gap: 8 }}>
                {['Asset', 'Debt', 'Rate', ''].map((h, i) => (
                  <span key={i} style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
                ))}
              </div>
              {Object.entries(positions.borrowed).map(([id, amt]) => {
                const a = MARKET_ASSETS.find(x => x.id === id)
                return (
                  <div key={id} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 88px', padding: '11px 20px', gap: 8, alignItems: 'center', borderTop: '1px solid #071c1c' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: a.color+'18', border: `1px solid ${a.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                        <img src={a.icon} alt={a.symbol} style={{ width: 18, height: 18, objectFit: 'contain' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{a.symbol}</p>
                        <p style={{ fontSize: 9, color: '#5a8888' }}>{a.name}</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: '#fff', fontFamily: 'IBM Plex Mono' }}>{mask(fmtToken(parseFloat(amt)))}</p>
                      <p style={{ fontSize: 9, color: '#5a8888', fontFamily: 'IBM Plex Mono' }}>{mask(fmtUSD((parseFloat(amt)||0)*a.price))}</p>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#f59e0b', fontFamily: 'IBM Plex Mono' }}>{fmtPct(a.borrowRate)}</span>
                    <button onClick={() => openModal('repay', a)}
                      style={{ fontSize: 10, padding: '5px 12px', borderRadius: 7, background: '#f59e0b10', border: '1px solid #f59e0b30', color: '#f59e0b', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.12s' }}
                      onMouseEnter={e => e.currentTarget.style.background='#f59e0b22'} onMouseLeave={e => e.currentTarget.style.background='#f59e0b10'}>
                      Repay
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          {/* Assets to Borrow */}
          <div style={card()}>
            <div style={{ padding: '12px 20px', borderBottom: '1px solid #0d2424', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#4a8080', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Assets to Borrow</span>
              <span style={{ fontSize: 9, color: '#4a7878' }}>{fmtUSD(totalBorrowedProtocol)} outstanding</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: connected ? '2fr 1.1fr 0.8fr 1fr 88px' : '2fr 1.1fr 0.8fr 88px', padding: '8px 20px', gap: 16 }}>
              {(connected ? ['Asset', 'Available', 'Rate', 'Your Limit', ''] : ['Asset', 'Available', 'Rate', '']).map((h, i) => (
                <span key={i} style={{ fontSize: 9, color: '#4a7878', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
              ))}
            </div>
            {MARKET_ASSETS.map(asset => {
              const avail = asset.totalSupplied - asset.totalBorrowed
              const util  = asset.totalBorrowed / asset.totalSupplied
              const collateralUSD = Object.entries(positions.supplied).reduce((s, [id, amt]) => {
                const a = MARKET_ASSETS.find(x => x.id === id)
                return s + (parseFloat(amt) || 0) * a.price * (a.ltv / 100)
              }, 0)
              const yourLimitUSD = Math.max(collateralUSD - totalBorrowedUSD, 0)
              const yourLimitTokens = yourLimitUSD / asset.price
              const hasBorrow = !!positions.borrowed[asset.id]
              return (
                <div key={asset.id} style={{ display: 'grid', gridTemplateColumns: connected ? '2fr 1.1fr 0.8fr 1fr 88px' : '2fr 1.1fr 0.8fr 88px', padding: '13px 20px', gap: 16, alignItems: 'center', borderTop: '1px solid #0a2020', transition: 'background 0.15s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: asset.color+'18', border: `1px solid ${asset.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                      <img src={asset.icon} alt={asset.symbol} style={{ width: 20, height: 20, objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{asset.symbol}</p>
                      <p style={{ fontSize: 9, color: '#5a8888' }}>{asset.name}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: '#8ecece', fontFamily: 'IBM Plex Mono' }}>{fmtToken(avail, 2)} <span style={{ fontSize: 9, color: '#5a8888' }}>{asset.symbol}</span></p>
                    <p style={{ fontSize: 9, color: '#5a8888', fontFamily: 'IBM Plex Mono', marginTop: 2 }}>{fmtUSD(avail * asset.price)}</p>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#f59e0b', fontFamily: 'IBM Plex Mono' }}>{fmtPct(asset.borrowRate)}</span>
                  {connected && <div>
                    {yourLimitUSD > 0
                      ? <>
                          <p style={{ fontSize: 12, color: '#8ecece', fontFamily: 'IBM Plex Mono' }}>{mask(fmtToken(yourLimitTokens, 2))} <span style={{ fontSize: 9, color: '#5a8888' }}>{asset.symbol}</span></p>
                          <p style={{ fontSize: 9, color: '#5a8888', marginTop: 2 }}>{mask(fmtUSD(yourLimitUSD))}</p>
                        </>
                      : <p style={{ fontSize: 10, color: '#3a6060' }}>Supply first</p>
                    }
                  </div>}
                  <button onClick={() => connected ? openModal('borrow', asset) : onConnect?.()}
                    style={{ fontSize: 11, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: connected && hasBorrow ? '#f59e0b18' : '#f59e0b22', border: '1px solid #f59e0b40', color: '#f59e0b', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background='#f59e0b30'; e.currentTarget.style.borderColor='#f59e0b60' }}
                    onMouseLeave={e => { e.currentTarget.style.background= connected && hasBorrow ? '#f59e0b18' : '#f59e0b22'; e.currentTarget.style.borderColor='#f59e0b40' }}>
                    {connected ? (hasBorrow ? '+ Borrow' : 'Borrow') : 'Connect'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Trust section */}
      <div className="px-4 sm:px-8 md:px-14" style={{ borderTop: '1px solid #0a2020', display: 'flex' }}>
        {[
          { label: 'Powered by',    name: 'Canton Network',  sub: 'Institutional-grade L1',  icon: '/canton-icon.svg',    iconStyle: { height: 16, opacity: 0.9 } },
          { label: 'Settlement via', name: 'Chainlink Oracle', sub: 'Real-time price feeds',    icon: '/chainlink-logo.svg', iconStyle: { height: 16, opacity: 0.85 } },
        ].map((item, i) => (
          <div key={i} style={{ padding: '18px 28px 18px 0', marginRight: 28, borderRight: i < 1 ? '1px solid #0a2020' : 'none', paddingRight: 28 }}>
            <p style={{ fontSize: 8, color: '#3a6060', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6, fontFamily: 'IBM Plex Mono' }}>{item.label}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <img src={item.icon} alt={item.name} style={item.iconStyle} />
              <p style={{ fontSize: 15, fontWeight: 600, color: '#c8e8e8', letterSpacing: '-0.01em' }}>{item.name}</p>
            </div>
            <p style={{ fontSize: 10, color: '#4a7878', fontFamily: 'IBM Plex Mono' }}>{item.sub}</p>
          </div>
        ))}
      </div>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(3,11,11,0.90)', backdropFilter: 'blur(7px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onClick={e => { if (e.target === e.currentTarget) closeModal() }}>
          <div className="modal-card" style={{ background: 'linear-gradient(160deg, #0e2e2e, #0a2424)', border: '1px solid #1e4040', borderRadius: 22, boxShadow: `0 0 80px ${accent}12, 0 32px 80px #00000095`, width: '100%', maxWidth: 420, overflow: 'hidden' }}>

            {/* Accent top bar */}
            <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

            <div style={{ padding: '22px 26px 0' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: modal.asset.color + '18', border: `1px solid ${modal.asset.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={modal.asset.icon} alt={modal.asset.symbol} style={{ width: 24, height: 24, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{modal.asset.symbol}</p>
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: accent, background: accent + '15', border: `1px solid ${accent}30`, borderRadius: 5, padding: '2px 7px' }}>{modal.type}</span>
                  </div>
                </div>
                <button onClick={closeModal} style={{ background: 'transparent', border: '1px solid #1e4040', color: '#4a7878', cursor: 'pointer', width: 30, height: 30, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='#2a5a5a'; e.currentTarget.style.color='#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='#1e4040'; e.currentTarget.style.color='#4a7878' }}>×</button>
              </div>

              {/* Step pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                {['Amount', 'Review'].map((label, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: modalStep > i ? accent : modalStep === i+1 ? accent+'20' : '#0d2828', border: `1px solid ${modalStep >= i+1 ? accent : '#1a3838'}`, color: modalStep > i ? '#071e1e' : modalStep === i+1 ? accent : '#2a5050' }}>
                      {i+1}
                    </div>
                    <span style={{ fontSize: 10, color: modalStep === i+1 ? '#7ababa' : '#2a5050' }}>{label}</span>
                    {i === 0 && <div style={{ width: 18, height: 1, background: '#1a3838' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 1 — Amount */}
            {modalStep === 1 && (() => {
              const avail = getAvailable(modal.type, modal.asset)
              const curAmt = parseFloat(modalAmount) || 0
              const sliderPct = avail > 0 ? Math.round(Math.min(curAmt / avail, 1) * 100) : 0
              const isOverMax = avail > 0 && curAmt > avail
              const isEmpty = curAmt <= 0
              const canReview = !isEmpty && !isOverMax

              const btnBg = isOverMax
                ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)'
                : canReview
                  ? `linear-gradient(135deg, ${accent} 0%, ${isBorrowSide ? '#d97706' : '#0d9488'} 100%)`
                  : 'transparent'
              const btnBorder = isEmpty ? `1px solid #1e4040` : 'none'
              const btnColor = isOverMax || canReview ? '#071e1e' : '#4a7878'
              const btnLabel = isEmpty
                ? 'Enter an amount'
                : isOverMax
                  ? modal.type === 'repay' ? 'Cannot repay more than you owe' : modal.type === 'borrow' ? 'Exceeds borrow limit' : 'Exceeds available balance'
                  : 'Review Transaction →'

              // HF preview vars
              const hfToBarPct = (hf) => hf === null ? 1 : Math.min(Math.log1p(hf) / Math.log1p(75), 1)
              const displayHF    = curAmt > 0 ? previewHF : healthFactor
              const displayColor = displayHF === null ? '#14b8a6' : displayHF >= 50 ? '#14b8a6' : displayHF >= 10 ? '#34d399' : displayHF >= 3 ? '#a3e635' : displayHF >= 1.5 ? '#f59e0b' : '#ef4444'
              const displayLabel = displayHF === null ? 'Safe' : displayHF >= 50 ? 'Very Safe' : displayHF >= 10 ? 'Very Safe' : displayHF >= 3 ? 'Safe' : displayHF >= 1.5 ? 'Monitor' : 'At Risk'
              const barPct       = hfToBarPct(displayHF)
              const beforeHF     = healthFactor
              const beforeColor  = beforeHF === null ? '#14b8a6' : beforeHF >= 50 ? '#14b8a6' : beforeHF >= 10 ? '#34d399' : beforeHF >= 3 ? '#a3e635' : beforeHF >= 1.5 ? '#f59e0b' : '#ef4444'
              const beforePct    = hfToBarPct(beforeHF)
              const showBefore   = curAmt > 0 && beforeHF !== displayHF

              return (
                <div style={{ padding: '0 26px 26px' }}>
                  {/* Stats row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#071818', border: '1px solid #0d2424', borderRadius: 10, padding: '12px 15px', marginBottom: 14 }}>
                    <div>
                      <p style={{ fontSize: 8, color: '#5a8888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{modal.type === 'supply' || modal.type === 'withdraw' ? 'Supply APY' : 'Borrow Rate'}</p>
                      <p style={{ fontSize: 16, fontWeight: 700, color: accent, fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{modal.type === 'supply' || modal.type === 'withdraw' ? fmtPct(modal.asset.supplyApy) : fmtPct(modal.asset.borrowRate)}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 8, color: '#5a8888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>Available</p>
                      <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtToken(avail, 4)}</p>
                      <p style={{ fontSize: 8, color: '#5a8888', marginTop: 2 }}>{modal.asset.symbol}</p>
                    </div>
                  </div>

                  {/* Slider — above input */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 9, color: '#4a7878' }}>0%</span>
                      <span style={{ fontSize: 9, fontWeight: 600, color: accent, fontFamily: 'IBM Plex Mono' }}>{sliderPct}%</span>
                      <span onClick={() => setModalAmount(String(avail.toFixed(6)))}
                        style={{ fontSize: 9, fontWeight: 600, color: accent, cursor: 'pointer', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: 2 }}>Max</span>
                    </div>
                    <div className="modal-slider-wrap">
                      <div className="modal-slider-track" />
                      <div className="modal-slider-fill" style={{ width: `${sliderPct}%` }} />
                      <input type="range" min="0" max="100" step="1" value={sliderPct}
                        onChange={e => { const pct = parseInt(e.target.value); setModalAmount(pct === 100 ? String(avail.toFixed(6)) : String((avail * pct / 100).toFixed(6))) }}
                        className="modal-slider" />
                    </div>
                  </div>

                  {/* Input */}
                  <div style={{ position: 'relative', marginBottom: 8 }}>
                    <input type="number" placeholder="0.00" value={modalAmount} onChange={e => setModalAmount(e.target.value)} autoFocus
                      style={{ width: '100%', background: '#071a1a', border: `1px solid ${isOverMax ? '#ef444460' : '#163030'}`, borderRadius: 12, padding: '15px 80px 15px 15px', fontSize: 22, color: '#fff', outline: 'none', fontFamily: 'IBM Plex Mono, monospace', boxSizing: 'border-box' }}
                      onFocus={e => e.target.style.borderColor = isOverMax ? '#ef444480' : '#1e5050'}
                      onBlur={e => e.target.style.borderColor = isOverMax ? '#ef444460' : '#163030'} />
                    <div style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 16, height: 16, borderRadius: 4, background: modal.asset.color+'20', border: `1px solid ${modal.asset.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src={modal.asset.icon} alt={modal.asset.symbol} style={{ width: 11, height: 11, objectFit: 'contain' }} />
                      </div>
                      <span style={{ fontSize: 11, color: '#5a8e8e', fontWeight: 600 }}>{modal.asset.symbol}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 10, color: '#5a8888', fontFamily: 'IBM Plex Mono', marginBottom: isOverMax ? 6 : 12 }}>≈ {fmtUSD(curAmt * modal.asset.price)}</p>

                  {/* Over-max warning */}
                  {isOverMax && (
                    <div style={{ background: '#ef444412', border: '1px solid #ef444430', borderRadius: 8, padding: '8px 12px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ fontSize: 13, lineHeight: 1 }}>⚠</span>
                      <p style={{ fontSize: 10, color: '#f87171', lineHeight: 1.5 }}>
                        {modal.type === 'borrow'
                          ? `Amount exceeds your borrow limit of ${fmtToken(avail, 4)} ${modal.asset.symbol}`
                          : modal.type === 'repay'
                            ? `You only owe ${fmtToken(avail, 4)} ${modal.asset.symbol} — you can't repay more than your outstanding debt`
                            : `Amount exceeds available balance of ${fmtToken(avail, 4)} ${modal.asset.symbol}`}
                      </p>
                    </div>
                  )}

                  {/* HF preview */}
                  <div style={{ background: '#071818', border: `1px solid ${displayColor}28`, borderRadius: 10, padding: '14px 16px', marginBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span style={{ fontSize: 10, color: '#5a8888', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Health Factor</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        {showBefore && <span style={{ fontSize: 12, fontFamily: 'IBM Plex Mono', color: beforeColor, opacity: 0.45 }}>{beforeHF === null ? '∞' : beforeHF.toFixed(2)}</span>}
                        {showBefore && <span style={{ fontSize: 9, color: '#3a5a5a' }}>→</span>}
                        <span style={{ fontSize: 17, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: displayColor }}>{displayHF === null ? '∞' : displayHF.toFixed(2)}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, color: displayColor, background: displayColor+'18', border: `1px solid ${displayColor}35`, borderRadius: 5, padding: '2px 7px' }}>{displayLabel}</span>
                      </div>
                    </div>
                    <div style={{ position: 'relative', height: 7, background: '#0a1e1e', borderRadius: 4 }}>
                      {showBefore && <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', borderRadius: 4, width: `${beforePct*100}%`, background: beforeColor+'30', transition: 'width 0.4s' }} />}
                      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', borderRadius: 4, width: `${barPct*100}%`, background: `linear-gradient(90deg, ${displayColor}70, ${displayColor})`, boxShadow: `0 0 8px ${displayColor}55`, transition: 'width 0.4s, background 0.4s' }} />
                      <div style={{ position: 'absolute', top: -3, bottom: -3, left: `${Math.log1p(1) / Math.log1p(75) * 100}%`, width: 1.5, background: '#ef444460' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 7 }}>
                      <span style={{ fontSize: 8, color: '#ef444470' }}>← Liquidation at 1.0</span>
                      <span style={{ fontSize: 8, color: '#14b8a650' }}>Safe ≥ 2.0 →</span>
                    </div>
                  </div>

                  <button onClick={() => canReview && setModalStep(2)}
                    style={{ width: '100%', padding: '14px', borderRadius: 12, fontSize: 13, fontWeight: 700, background: btnBg, border: btnBorder, color: btnColor, cursor: canReview ? 'pointer' : 'default', transition: 'all 0.2s', letterSpacing: '-0.01em' }}>
                    {btnLabel}
                  </button>
                </div>
              )
            })()}

            {/* STEP 2 — Review */}
            {modalStep === 2 && (
              <div style={{ padding: '0 26px 26px' }}>
                <div style={{ background: '#071818', border: '1px solid #0d2424', borderRadius: 12, padding: '15px 17px', marginBottom: 14 }}>
                  <p style={{ fontSize: 10, color: '#3a6060', marginBottom: 5, textTransform: 'capitalize' }}>{modal.type}ing</p>
                  <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', fontFamily: 'IBM Plex Mono', lineHeight: 1 }}>{fmtToken(parseFloat(modalAmount), 6)} {modal.asset.symbol}</p>
                  <p style={{ fontSize: 11, color: '#5a8888', marginTop: 4, fontFamily: 'IBM Plex Mono' }}>≈ {fmtUSD(parseFloat(modalAmount) * modal.asset.price)}</p>
                </div>

                <div style={{ border: '1px solid #0d2424', borderRadius: 12, overflow: 'hidden', marginBottom: 14 }}>
                  {[
                    { label: modal.type === 'supply' || modal.type === 'withdraw' ? 'Supply APY' : 'Borrow Rate', value: modal.type === 'supply' || modal.type === 'withdraw' ? fmtPct(modal.asset.supplyApy) : fmtPct(modal.asset.borrowRate), color: accent },
                    { label: 'Max LTV',        value: `${modal.asset.ltv}%`,    color: '#8ecece' },
                    { label: 'Network',        value: 'Canton Network',          color: '#8ecece' },
                    { label: 'Settlement',     value: 'T+0',                     color: '#8ecece' },
                    { label: 'MEV Protection', value: 'Enabled',                 color: '#14b8a6' },
                    { label: 'Execution',      value: 'Confidential',            color: '#14b8a6' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 15px', borderTop: i > 0 ? '1px solid #071818' : 'none', background: i%2===0 ? 'transparent' : '#071818' }}>
                      <span style={{ fontSize: 10, color: '#3a6060' }}>{row.label}</span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: row.color, fontFamily: 'IBM Plex Mono' }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Privacy attestation */}
                <div style={{ background: '#14b8a608', border: '1px solid #14b8a622', borderRadius: 12, padding: '13px 15px', marginBottom: 18, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, marginTop: 1 }}><IconShield size={15} color="#14b8a6" /></div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: '#14b8a6', marginBottom: 4 }}>Encrypted on Canton Network</p>
                    <p style={{ fontSize: 10, color: '#3a6060', lineHeight: 1.55 }}>Your position is processed with confidential smart contracts and is not visible to other market participants.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => setModalStep(1)} style={{ padding: '13px 16px', borderRadius: 12, fontSize: 12, fontWeight: 600, background: 'transparent', border: '1px solid #1e4040', color: '#4a7878', cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='#2a5a5a'; e.currentTarget.style.color='#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='#1e4040'; e.currentTarget.style.color='#4a7878' }}>← Back</button>
                  <button onClick={handleConfirm} style={{ flex: 1, padding: '13px', borderRadius: 12, fontSize: 13, fontWeight: 700, background: `linear-gradient(135deg, ${accent} 0%, ${isBorrowSide ? '#d97706' : '#0d9488'} 100%)`, border: 'none', color: '#071e1e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, transition: 'opacity 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity='0.88'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                    {modal.type === 'supply' ? `Confirm Supply ${modal.asset.symbol}` : modal.type === 'borrow' ? `Confirm Borrow ${modal.asset.symbol}` : modal.type === 'repay' ? `Confirm Repay ${modal.asset.symbol}` : `Confirm Withdraw ${modal.asset.symbol}`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STATE CONTEXT (passed via props through router)
// ─────────────────────────────────────────────────────────────────────────────

const GLOBAL_STYLES = `
  @keyframes a-spin       { to { transform: rotate(360deg); } }
  @keyframes a-pulse      { 0%,100% { opacity:1; } 50% { opacity:0.35; } }
  @keyframes a-bounce     { 0%,80%,100% { transform:translateY(0); } 40% { transform:translateY(-6px); } }
  @keyframes a-modal-in   { from { opacity:0; transform:scale(0.95) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
  @keyframes a-fade-up    { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .modal-card { animation: a-modal-in 0.28s cubic-bezier(0.33,1,0.68,1) both; }
  .fade-up    { animation: a-fade-up  0.35s cubic-bezier(0.33,1,0.68,1) both; }
  input::placeholder { color: #233838; }
  input:focus { outline: none; }
`

// ─────────────────────────────────────────────────────────────────────────────
// LEGAL PAGES — Terms of Use & Privacy Policy
// ─────────────────────────────────────────────────────────────────────────────

function LegalLayout({ title, children }) {
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#071e1e', color: '#fff' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 md:px-14" style={{ height: 64, borderBottom: '1px solid #0d2a2a', flexShrink: 0 }}>
        <a href="https://alpend.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
          <AlpendLogo className="h-[22px] w-auto" />
        </a>
        <button onClick={() => nav(-1)}
          style={{ background: 'transparent', border: '1px solid #1e4040', color: '#6b9e9e', cursor: 'pointer', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#2a5a5a'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#1e4040'; e.currentTarget.style.color='#6b9e9e' }}
          aria-label="Go back">
          ✕
        </button>
      </header>

      {/* Scrollable content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: 'clamp(24px, 5vw, 60px) clamp(16px, 8vw, 120px)' }}>
        <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 32, color: '#fff' }}>
          {title}
        </h1>
        <div className="legal-body">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

function TermsScreen() {
  useEffect(() => { document.title = 'Alpend — Terms of Use' }, [])
  return (
    <LegalLayout title="Terms of Use">
      <p>These Alpend Terms and Conditions ("Terms of Use", "Terms") are entered into between Moonshot Investment Corp (#1, Advanced Tower, Panama City, Panama) (referred to as "Company", "we", "our" and "us") and you or the company or other legal entity that you represent ("you" or "your").</p>
      <p>Please read these Terms of Use carefully, as they govern your use of Alpend (referred to as the "Platform"), as well as any other services provided by us ("Services"). By accessing or using the Platform or any of its Services, you agree to comply with these Terms of Use. If you do not agree to these Terms, you must not access or use the Platform.</p>
      <p>Due to the nature of the Platform, access to and use of the Platform is not intended for individuals or entities located in, or accessing from, certain restricted jurisdictions, including but not limited to Crimea, Donetsk and Luhansk, Cuba, Democratic People's Republic of Korea, Democratic Republic of the Congo, Islamic Republic of Iran, Libya, People's Republic of China, Republic of Belarus, Russian Federation, Somalia, South Sudan, Sudan, Syria, United States of America, as well as any other territories subject to comprehensive sanctions.</p>
      <p>We reserve the right to modify these Terms at any time. Such modifications will be effective immediately upon posting the updated Terms on our website.</p>

      <h2>1. The Alpend Platform</h2>
      <p>The Platform provides a web-based or mobile-accessible interface enabling interaction with a decentralised protocol operating on the Canton Network, facilitating confidential money market operations including supply and borrow of compatible digital assets.</p>
      <p>Access to the Platform requires the use of non-custodial wallet software that enables interaction with the Canton Network. The Platform does not exercise custody, control, or authority over the contents of your wallet.</p>

      <h2>2. User Eligibility</h2>
      <p>To use the Platform, you must be at least 18 years old and reside in a jurisdiction where the use of the Platform is legal.</p>
      <p>You must provide all required information and documents during the account opening process and keep this information updated. We reserve the right to refuse service, terminate accounts, or limit access to the Platform at our sole discretion.</p>

      <h2>3. User Obligations</h2>
      <p>You are solely responsible for your use of the Platform, including the supply, borrow, or interaction with digital assets. You agree to use the Platform in compliance with all applicable laws, regulations, and these Terms.</p>
      <p>You are responsible for the security and management of your wallet, private keys, key shares, seed phrases, passwords, or any other credentials linked to your blockchain addresses. The Platform bears no liability for any unauthorised access, loss, or misuse of your wallet or blockchain addresses.</p>

      <h2>4. Fees and Charges</h2>
      <p>The use of the Platform may involve certain fees, including but not limited to transaction fees, service fees, gas fees, and currency conversion fees if applicable.</p>
      <p>Each blockchain may require the payment of a transaction fee (a "Gas Fee") for every transaction that occurs on such blockchain. Gas Fees may vary based on market conditions on the applicable blockchain.</p>
      <p>All fees paid to the Platform are non-refundable, except as required by applicable law. We reserve the right to modify, update, or introduce new fees at our sole discretion.</p>

      <h2>5. Risks Associated with Cryptocurrencies</h2>
      <p>Before using any of our Services, it's important to be aware of potential risks. We recommend that you seek professional financial advice before using our Services. By using our Services, you acknowledge and accept the risks set out in Annexure A.</p>

      <h2>6. Prohibited Uses</h2>
      <p>You are prohibited from using the Platform or its content:</p>
      <ul>
        <li>for any unlawful purpose;</li>
        <li>to solicit others to perform or participate in any unlawful acts;</li>
        <li>to violate any international, federal, provincial or State regulations, rules, laws, or local ordinances;</li>
        <li>to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
        <li>to upload or transmit viruses or any other type of malicious code;</li>
        <li>to collect or track the personal information of others;</li>
        <li>to manipulate trading markets through tactics such as "rug pulls," wash trading, spoofing, or other fraudulent schemes; or</li>
        <li>to interfere with or circumvent the security features of the Platform or any related website.</li>
      </ul>

      <h2>7. Optional Tools</h2>
      <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. Any use by you of optional tools offered through the Platform is entirely at your own risk and discretion.</p>

      <h2>8. Third-Party Services</h2>
      <p>Our Platform may incorporate or provide links to resources and services operated by third parties. These Third-Party Services are offered for your convenience, and their presence on our Platform does not imply endorsement or recommendation. We assume no responsibility or liability for any issues arising from your use of Third-Party Services.</p>

      <h2>9. No Investment Advice</h2>
      <p>The information provided through the Platform is for general informational purposes only and should not be construed as investment advice. You should consult with a qualified financial advisor before making any investment decisions.</p>

      <h2>10. No Securities or Brokerage Services</h2>
      <p>We are not registered with the United States Securities and Exchange Commission (SEC) as a national securities exchange or in any other capacity. We do not act as a broker or intermediary for the submission or execution of trading orders on your behalf.</p>

      <h2>11. Accuracy, Completeness and Timeliness of Information</h2>
      <p>We are not responsible if information made available on the Platform is not accurate, complete or current. The material on the Platform is provided for general information only and should not be relied upon as the sole basis for making decisions.</p>

      <h2>12. User Comments, Feedback and Other Submissions</h2>
      <p>If you send creative ideas, suggestions, proposals, plans, or other materials, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.</p>

      <h2>13. Intellectual Property Rights</h2>
      <p>We are the creators and rightful owners of the Platform. All logos, trademarks, designs, text, photos, videos, software, computer programs, code, and other content associated with the Platform are owned, controlled, or licensed by us and are protected under copyright, patent, and trademark laws.</p>

      <h2>14. Disclaimer of Warranties and Limitation of Liability</h2>
      <p>We do not guarantee, represent or warrant that your use of our Platform will be uninterrupted, timely, secure or error-free.</p>
      <p>IN NO EVENT WILL ALPEND, INCLUDING OUR AFFILIATES, SUBSIDIARIES, PARENTS, SUCCESSORS, AND ASSIGNS, AND EACH OF OUR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS, BE LIABLE TO YOU FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL, OR INDIRECT DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE ALPEND PLATFORM, SERVICES, OR THIS AGREEMENT.</p>

      <h2>15. Dispute Resolution and Arbitration</h2>
      <p>At our sole discretion, any dispute arising under these Terms may be required to be submitted to final and binding arbitration under the Rules of Arbitration of the Panama Arbitration Centre, applying the laws of Panama. The seat of arbitration shall be Zurich. The proceedings shall be conducted in English.</p>

      <h2>16. Indemnification</h2>
      <p>To the full extent permitted by law, you agree to indemnify us, defend and hold us harmless, and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand made by any third-party due to or arising out of your breach of these Terms of Use.</p>

      <h2>17. Governing Law</h2>
      <p>All matters relating to the Platform, Services and these Terms shall be governed by and construed in accordance with the laws of Panama without giving effect to any choice or conflict of law provision or rule.</p>

      <h2>18. Suspension and Termination</h2>
      <p>We reserve the right to suspend or limit your access to the Platform at any time, without notice, for any reason, including but not limited to compliance with legal requirements, suspicion of fraudulent activities, or breaches of these Terms of Use.</p>

      <h2>Annexure A — Risks</h2>
      <p>By using our Platform and Services, you acknowledge and accept the following risks.</p>

      <h3>General Risks of Digital Assets</h3>
      <p>The subjective and highly volatile nature of Digital Assets can lead to significant fluctuations at any moment, potentially resulting in them becoming worthless. Digital Assets are not legal tender and may lack backing by physical assets or guarantees from governments or centralised authorities.</p>

      <h3>Risks Related to Transactions and Usage</h3>
      <p>Blockchain transactions are irreversible once confirmed. You are responsible for ensuring the accuracy of transaction details, including wallet addresses, amounts, and network selections. Any errors may result in permanent loss.</p>

      <h3>Risks Related to Technology, Security, and Regulation</h3>
      <p>The regulatory landscape for Blockchain technologies and Digital Assets is subject to change and lacks clarity. No technology is entirely immune to security vulnerabilities. Our Services rely on third-party smart contracts and public Blockchains which we do not own, control, or guarantee.</p>

      <h3>Market Risks</h3>
      <p>The markets for Digital Assets are nascent and highly volatile due to factors such as adoption, speculation, technological risks, security vulnerabilities, and regulatory uncertainty.</p>

      <h3>Additional Risks</h3>
      <p>Using Internet and Blockchain-based products carries inherent risks, including but not limited to hardware, software, and Internet connection issues, as well as the potential for malicious software and unauthorised access to your wallet address.</p>
    </LegalLayout>
  )
}

function PrivacyScreen() {
  useEffect(() => { document.title = 'Alpend — Privacy Policy' }, [])
  return (
    <LegalLayout title="Privacy Policy">
      <p>This Privacy Policy describes the policies and procedures of Alpend ("we," "our," or "us") pertaining to the collection, use, and disclosure of your information on https://alpend.com/ and related applications and products we offer (the "Services" or "Alpend").</p>

      <h2>Overview</h2>
      <p>Your right to privacy and the protection of your personal data is important to us. The following sections provide further details as to how we process your personal information through Alpend. We don't share your information with third parties except to deliver you our Services and products, comply with the law, make Alpend better, protect our rights, or effectuate a business transfer. If you have any questions or concerns about this policy, please reach out to us at contact@alpend.com. Unless indicated otherwise, this Privacy Policy does not apply to third party products or services or the practices of companies that we do not own or control, including other companies you might interact with on or through our services. Alpend operates as a non-custodial platform that enables users to participate in decentralized financial products, including money market supply and borrow services on the Canton Network. Alpend does not store, manage, or control private keys, wallet balances, or user funds. Any transactions conducted using Alpend are recorded on Canton Network, which operates independently of us. Your privacy and security while interacting with these networks are determined by their protocols, and Alpend has no control over how blockchain data is processed or stored.</p>

      <h2>How do you accept this policy</h2>
      <p>By using Alpend, including downloading one of our applications or visiting our website, you agree to the use, disclosure, and procedures outlined in this Privacy Policy.</p>

      <h2>What information is covered under this policy</h2>
      <p>This Privacy Policy covers your personal information. Personal information is information or an opinion, whether true or not, and whether recorded in a material form or not, about an identified individual, or an individual who is reasonably identifiable. All personal information received in connection with our business is subject to strict rules of confidentiality.</p>
      <p>Common examples may include your name, username, password, IP address, unique device identifiers, gender, signature, address, telephone number, email, date of birth, bank account and digital wallet details, billing and credit or debit card details, photos and videos of you, other identification credentials and biographical details, and commentary or opinions about you.</p>

      <h2>Personal information that we may collect from you</h2>
      <p>We may collect some or all of the following types of personal information:</p>
      <ul>
        <li>information that you give us through your dealings with us;</li>
        <li>information that we may collect from you; and</li>
        <li>information that we may receive from you or from other third party sources.</li>
      </ul>
      <p>By agreeing to this Privacy Policy, you consent to the fact that you are aware that we are collecting your personal information and disclosing it as required by us and in accordance with applicable privacy laws and principles.</p>

      <h2>How personal information is collected</h2>
      <p>"Personal information" is data that identifies, relates to, describes, can be used to contact, or could reasonably be linked directly or indirectly to you. For the purposes of this Privacy Policy, there is no meaningful distinction between the terms "personal information" and "personal data".</p>
      <p>You may choose not to provide some of the personal information described above. Please note, however, that some of our services require some personal information to operate, so if you choose not to provide the personal information necessary to operate and provide you with a particular service or feature of that service, you may not be able to use that Service or feature.</p>

      <h2>Information that you give us</h2>
      <p>We may collect your personal information directly from our contact with you. This may include by you completing forms or parts of our website, Social Media, and/or other software and/or mobile applications, by you providing us with consent to access personal information such as photographs, videos or photo albums, by you providing us with consent to access the microphone and/or camera on your device, or by you contacting us via email, telephone, through Social Media and other similar functions either directly through our website or through third party host websites, in person, through various marketing channels or competitions either directly through our website or through third party host websites, and surveys.</p>
      <p>You understand that any personal information that you provide to us must be accurate and up to date. We will assume this to be the case.</p>

      <h2>Information that we collect about you</h2>
      <p>In this Privacy Policy, "Social Media" means social media networking sites of any kind or nature including but not limited to web or internet based or mobile telephonic devices or medium such as Facebook, Twitter, Instagram and LinkedIn, which enable the creation and exchange of user generated content.</p>
      <p>Our website, Social Media, and/or other software and/or mobile applications may automatically collect the following information about you each time you visit or otherwise use our website, Social Media, and/or other software and/or mobile applications:</p>
      <ul>
        <li>technical information including but not limited to the Internet Protocol Address used to connect your device to the internet, the internet browser and version that you are using when accessing our website, Social Media, or other software and/or mobile applications, any additional plug-ins that you are using, and your device's operating system and platform;</li>
        <li>information about the time and date you accessed our website, Social Media, or other software and/or mobile applications, and what you accessed on our website, Social Media, or other software and/or mobile application;</li>
        <li>details about the computer, device, hardware, or software used to access our services, such as IP address, device identifiers, internet service provider, plugins, device make and model, operating system, browser type, and other system specifications; and</li>
        <li>general location of your device is derived from your IP address.</li>
      </ul>
      <p>We use technologies like cookies, log files, and web beacons to collect this information.</p>

      <h2>Sensitive information</h2>
      <p>Throughout the course of collecting your personal information, we may collect sensitive information about you. Sensitive information includes:</p>
      <ul>
        <li>information or an opinion about your racial or ethnic origin; or political opinions; or membership of a political association; or religious beliefs or affiliations; or philosophical beliefs; or membership of a professional or trade association; or membership of a trade union; or sexual orientation or practices; or criminal record that is also personal information; or</li>
        <li>health information about an individual; or genetic information about an individual that is not otherwise health information; or biometric information that is to be used for the purpose of automated biometric verification or biometric identification; or biometric template.</li>
      </ul>
      <p>If we do collect any of your sensitive information, we will only collect this information with your consent and for reasons that are reasonably necessary or otherwise related to the provision of our services in accordance with applicable privacy laws and principles.</p>

      <h2>How we use the information we gather</h2>
      <p>You consent to the disclosure of your personal information to any of our related entities. This may include:</p>
      <ul>
        <li>contact you when necessary;</li>
        <li>respond to your comments, questions, or issues related to bugs or errors with Alpend;</li>
        <li>provide you with additional information;</li>
        <li>send you information and marketing materials about services and products available through Alpend;</li>
        <li>train our team members;</li>
        <li>providing our Services;</li>
        <li>investigating and/or preventing suspected fraud or other criminal activities or misuse of our services;</li>
        <li>notifying you about any changes to our products, website, and/or other software and/or mobile applications, brand or services offered; and</li>
        <li>managing our relationships with you and our other customers.</li>
      </ul>

      <h2>How do we share your personal data with third parties</h2>
      <p>Information about our users is an important part of our business and we are not in the business of selling our users' personal information to others. We may transfer personal data to our service providers or third parties in connection with Alpend's operation of its business, as certain features on Alpend rely on various third-party products and services.</p>

      <h2>Legal obligations to disclose</h2>
      <p>We may be required to disclose your personal information for the purposes for which it was collected and also subject to our legal obligations:</p>
      <ul>
        <li>as required by law;</li>
        <li>to any person where necessary or desirable in connection with our provision of services; and</li>
        <li>on a confidential basis to our external service providers and advisors.</li>
      </ul>

      <h2>Your rights with respect to the processing of personal data</h2>
      <p>We recognise the below rights which you enjoy under the applicable data protection law with respect to your personal data:</p>
      <ul>
        <li>Right to be informed about the collection and use of your personal data.</li>
        <li>Right of access to whether we have stored your personal data.</li>
        <li>Right to rectification if your personal data stored by us is inaccurate or incomplete.</li>
        <li>Right to erasure if the data is no longer needed for the purposes for which it was collected.</li>
        <li>Right to restriction of processing.</li>
        <li>Right to data portability.</li>
        <li>Right to object to processing.</li>
        <li>Right to lodge a complaint with a data protection supervisory authority.</li>
      </ul>

      <h2>Data retention</h2>
      <p>We will only keep your information for as long as reasonably necessary to fulfill the purposes for which your personal information was originally collected. We will delete your information after a reasonable time.</p>

      <h2>Data security</h2>
      <p>We are committed to ensuring that your personal information is protected in accordance with applicable laws and our data privacy policies. We use a combination of physical, electronic, and procedural safeguards to protect your information during transmission and storage.</p>

      <h2>Children's Privacy</h2>
      <p>Our Services are not targeted towards children, and our users must be at least eighteen (18) years old to use our services. We don't knowingly collect information from children under the age of 13. If you have questions, please email us at contact@alpend.com.</p>

      <h2>Conditions of use, notices, changes and updates to privacy notice</h2>
      <p>We reserve the right to update and revise this Privacy Policy at any time. Please review this Privacy Policy regularly to ensure that you are aware of its terms. Any use of Alpend after an amendment to our Privacy Policy constitutes your acceptance to the revised or amended terms.</p>

      <h2>Questions</h2>
      <p>We'd be happy to answer any questions. Contact us at contact@alpend.com</p>
    </LegalLayout>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

function AppRoutes() {
  const nav = useNavigate()
  const location = useLocation()

  const DEMO_PARTY_ID = 'cac91f063bf74945c0aa9fc948cc14d4::12208cc6df7419a62dd1a4297567b56c7eeb259eca11416bb33189c649bd0f2990bc'
  const DEMO_BALANCE  = { cbtc: '0.84', usdcx: '12400', cc: '5000' }
  const [partyId, setPartyId]       = useState(() => localStorage.getItem('alpend_partyId') || DEMO_PARTY_ID)
  const [balance, setBalance]       = useState(() => { try { const b = JSON.parse(localStorage.getItem('alpend_balance')); return b || DEMO_BALANCE } catch { return DEMO_BALANCE } })
  const [email, setEmail]           = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [steps, setSteps]           = useState({ email: false, twitter: false, telegram: false, partyId: !!localStorage.getItem('alpend_partyId') })

  const handleJoin = () => {
    nav('/connect')
    setTimeout(() => {
      setPartyId(DEMO_PARTY_ID)
      setBalance(DEMO_BALANCE)
      localStorage.setItem('alpend_partyId', DEMO_PARTY_ID)
      localStorage.setItem('alpend_balance', JSON.stringify(DEMO_BALANCE))
      setSteps(s => ({ ...s, partyId: true }))
      nav('/waitlist')
    }, 2400)
  }

  const handleEmail    = val => { setEmail(val); setSteps(s => ({ ...s, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) })) }
  const handleTwitter  = () => { window.open('https://x.com/AlpendMarket',  '_blank', 'noopener,noreferrer'); setSteps(s => ({ ...s, twitter:  true })) }
  const handleTelegram = () => { window.open('https://t.me/AlpendDesk',     '_blank', 'noopener,noreferrer'); setSteps(s => ({ ...s, telegram: true })) }
  const allComplete    = steps.email && steps.twitter && steps.telegram && steps.partyId

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => { nav('/waitlisted'); setSubmitting(false) }, 1800)
  }

  const handleLogout = () => {
    setPartyId(DEMO_PARTY_ID); setEmail(''); setBalance(DEMO_BALANCE)
    setSteps({ email: false, twitter: false, telegram: false, partyId: false })
    localStorage.removeItem('alpend_partyId')
    localStorage.removeItem('alpend_balance')
    nav('/')
  }

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      {location.pathname === '/' ? <BgWmCenter /> : null}
      <Routes>
        <Route path="/"          element={<LandingScreen onJoin={handleJoin} />} />
        <Route path="/connect"   element={<ConnectingScreen />} />
        <Route path="/waitlist" element={
          <WhitelistScreen
            partyId={partyId} email={email} steps={steps}
            submitting={submitting} allComplete={allComplete}
            onEmail={handleEmail} onTwitter={handleTwitter}
            onTelegram={handleTelegram} onSubmit={handleSubmit}
            onLogout={handleLogout}
          />
        } />
        <Route path="/waitlisted" element={<SubmittedScreen email={email} partyId={partyId} onLogout={handleLogout} onEnterMarkets={() => nav('/markets')} />} />
        <Route path="/markets"   element={<MarketsScreen partyId={partyId} balance={balance} onLogout={handleLogout} connected={true} />} />
        <Route path="/app"       element={<MarketsScreen partyId={null} balance={null} onLogout={null} connected={false} onConnect={() => nav('/')} />} />
        <Route path="/terms"     element={<TermsScreen />} />
        <Route path="/privacy"   element={<PrivacyScreen />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

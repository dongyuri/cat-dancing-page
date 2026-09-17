const SPEED_LABEL = {
  slow: '느리게',
  normal: '보통',
  fast: '빠르게',
}

function AnimationControls({ isPlaying, onToggle, speed, onCycleSpeed }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        type="button"
        className={`control-button primary${isPlaying ? ' is-active' : ''}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤추기'}
      </button>
      <button
        type="button"
        className="control-button"
        onClick={onCycleSpeed}
      >
        속도: {SPEED_LABEL[speed]}
      </button>
    </div>
  )
}

export default AnimationControls

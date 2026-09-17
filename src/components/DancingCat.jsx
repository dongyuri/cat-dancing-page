import catImage from '../assets/images/cat.svg'

const SPEED_DURATIONS = {
  slow: '2s',
  normal: '1.2s',
  fast: '0.6s',
}

function DancingCat({ isPlaying, speed }) {
  const duration = SPEED_DURATIONS[speed] ?? SPEED_DURATIONS.normal

  return (
    <div className="cat-stage" style={{ '--dance-duration': duration }}>
      <img
        src={catImage}
        alt="춤추는 고양이"
        className={`cat-image is-spinning${isPlaying ? ' is-playing' : ''}`}
        draggable={false}
      />
      <div className={`cat-shadow${isPlaying ? ' is-playing' : ''}`} />
    </div>
  )
}

export default DancingCat

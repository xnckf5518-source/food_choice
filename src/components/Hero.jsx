import './Hero.css';

export function Hero({ candidatesCount, confidence, isSpinning, rerolls, spinningName }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">서버 없이 혼자 쓰는 메뉴 결정소</p>
        <h1>메뉴판결</h1>
        <p className="subtitle">배고픈데 아무거나는 싫을 때, 조건만 고르면 오늘 먹을 메뉴를 단호하게 정해줍니다.</p>
      </div>
      <div className="verdict-panel" aria-live="polite">
        <span className="panel-label">오늘의 판결</span>
        <strong className={isSpinning ? 'spinning' : ''}>{spinningName}</strong>
        <div className="verdict-meta">
          <span>{candidatesCount}개 후보</span>
          <span>{confidence}% 확신</span>
          <span>{3 - Math.min(rerolls, 3)}회 번복 가능</span>
        </div>
      </div>
    </section>
  );
}

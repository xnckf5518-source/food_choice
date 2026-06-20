import { menus } from '../data/menus.js';
import './DecisionPanel.css';

export function DecisionPanel({
  candidates,
  confidence,
  isSpinning,
  picked,
  rerolls,
  spinningName,
  onDecide,
  onExcludePicked
}) {
  const railItems = candidates.length ? [...candidates, ...candidates].slice(0, 14) : menus.slice(0, 10);
  const buttonText = rerolls === 0 ? '판결 시작' : rerolls < 3 ? '다시 판결' : '이제 이걸로 가자';

  return (
    <section className="decision">
      <div className="ticker" aria-hidden="true">
        <div className={isSpinning ? 'ticker-track fast' : 'ticker-track'}>
          {railItems.map((menu, index) => (
            <span key={`${menu.name}-${index}`}>{menu.name}</span>
          ))}
        </div>
      </div>

      <div className="stage">
        <div className={isSpinning ? 'plate active' : 'plate'}>
          <span>{picked ? picked.category : 'MENU'}</span>
          <strong>{picked ? picked.name : spinningName}</strong>
        </div>

        {picked ? (
          <div className="result">
            <div className="result-score">
              <span>판결 확신도</span>
              <strong>{confidence}%</strong>
              <div><i style={{ width: `${confidence}%` }} /></div>
            </div>
            <p>{picked.note}</p>
            <div className="result-tags">
              <span>{picked.category}</span>
              <span>{picked.method.join(' · ')}</span>
              <span>{'₩'.repeat(picked.price)}</span>
            </div>
          </div>
        ) : (
          <p className="empty-text">조건을 고른 뒤 버튼을 누르면 후보들이 빠르게 지나가고 하나가 남습니다.</p>
        )}
      </div>

      <div className="actions">
        <button className="primary" type="button" onClick={onDecide} disabled={!candidates.length || isSpinning}>
          {isSpinning ? '판결 중...' : buttonText}
        </button>
        <button type="button" onClick={onExcludePicked} disabled={!picked}>이 메뉴 제외</button>
      </div>
    </section>
  );
}

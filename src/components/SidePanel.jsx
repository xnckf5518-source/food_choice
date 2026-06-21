import { Panel } from './Panel.jsx';
import './SidePanel.css';

export function SidePanel({ candidates, excluded, history, onPick, onRemoveExcluded }) {
  return (
    <aside className="side">
      <Panel title="후보 메뉴">
        <p className="candidate-count">{candidates.length}개 메뉴</p>
        <div className="candidate-list">
          {candidates.map((menu) => (
            <button key={menu.name} type="button" onClick={() => onPick(menu)}>
              <span>{menu.name}</span>
              <small>{menu.category}</small>
            </button>
          ))}
          {!candidates.length && <p className="muted">조건이 너무 엄격해요. 하나만 풀어볼까요?</p>}
        </div>
      </Panel>

      <Panel title="최근 판결">
        <div className="history-list">
          {history.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
              <small>{item.date}</small>
            </div>
          ))}
          {!history.length && <p className="muted">아직 판결 기록이 없습니다.</p>}
        </div>
      </Panel>

      <Panel title="제외한 메뉴">
        <div className="excluded-list">
          {excluded.map((name) => (
            <button key={name} type="button" onClick={() => onRemoveExcluded(name)}>
              {name} 해제
            </button>
          ))}
          {!excluded.length && <p className="muted">싫은 메뉴를 결과에서 제외할 수 있어요.</p>}
        </div>
      </Panel>
    </aside>
  );
}

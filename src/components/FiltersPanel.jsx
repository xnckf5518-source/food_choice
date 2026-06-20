import { categories, methods, moods, presets, prices } from '../data/menus.js';
import { FilterGroup } from './FilterGroup.jsx';
import './FiltersPanel.css';

export function FiltersPanel({
  category,
  method,
  mood,
  price,
  soloOnly,
  onApplyPreset,
  onCategoryChange,
  onMethodChange,
  onMoodChange,
  onPriceChange,
  onReset,
  onSoloOnlyChange
}) {
  return (
    <aside className="filters">
      <div className="section-title">
        <h2>조건</h2>
        <button type="button" onClick={onReset}>초기화</button>
      </div>

      <div className="preset-grid">
        {presets.map((preset) => (
          <button key={preset.name} type="button" onClick={() => onApplyPreset(preset)}>
            {preset.name}
          </button>
        ))}
      </div>

      <FilterGroup title="음식 종류" options={categories} value={category} onChange={onCategoryChange} />
      <FilterGroup title="먹는 방식" options={methods} value={method} onChange={onMethodChange} />
      <FilterGroup title="지금 기분" options={moods} value={mood} onChange={onMoodChange} />
      <FilterGroup title="가격대" options={prices} value={price} onChange={onPriceChange} />

      <label className="toggle">
        <input type="checkbox" checked={soloOnly} onChange={(event) => onSoloOnlyChange(event.target.checked)} />
        <span>혼밥하기 좋은 메뉴만 보기</span>
      </label>
    </aside>
  );
}

export function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      <div>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={value === option ? 'selected' : ''}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

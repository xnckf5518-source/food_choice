import { useEffect, useMemo, useState } from 'react';
import { DecisionPanel } from './components/DecisionPanel.jsx';
import { FiltersPanel } from './components/FiltersPanel.jsx';
import { Hero } from './components/Hero.jsx';
import { InfoSections } from './components/InfoSections.jsx';
import { SidePanel } from './components/SidePanel.jsx';
import { menus } from './data/menus.js';
import { readStorage } from './utils/storage.js';
import './App.css';

function App() {
  const [category, setCategory] = useState('전체');
  const [method, setMethod] = useState('상관없음');
  const [mood, setMood] = useState('상관없음');
  const [price, setPrice] = useState('상관없음');
  const [soloOnly, setSoloOnly] = useState(false);
  const [excluded, setExcluded] = useState(() => readStorage('menuVerdictExcluded', []));
  const [history, setHistory] = useState(() => readStorage('menuVerdictHistory', []));
  const [picked, setPicked] = useState(null);
  const [spinningName, setSpinningName] = useState('오늘의 판결 대기 중');
  const [isSpinning, setIsSpinning] = useState(false);
  const [rerolls, setRerolls] = useState(0);

  useEffect(() => {
    localStorage.setItem('menuVerdictExcluded', JSON.stringify(excluded));
  }, [excluded]);

  useEffect(() => {
    localStorage.setItem('menuVerdictHistory', JSON.stringify(history));
  }, [history]);

  const candidates = useMemo(() => {
    return menus.filter((menu) => {
      const priceMatch =
        price === '상관없음' ||
        (price === '저렴하게' && menu.price === 1) ||
        (price === '보통' && menu.price <= 2) ||
        (price === '오늘은 플렉스' && menu.price >= 2);

      return (
        !excluded.includes(menu.name) &&
        (category === '전체' || menu.category === category) &&
        (method === '상관없음' || menu.method.includes(method)) &&
        (mood === '상관없음' || menu.mood.includes(mood)) &&
        priceMatch &&
        (!soloOnly || menu.solo)
      );
    });
  }, [category, method, mood, price, soloOnly, excluded]);

  const decideMenu = () => {
    if (!candidates.length || isSpinning) return;

    setIsSpinning(true);
    setPicked(null);
    setRerolls((value) => Math.min(value + 1, 3));

    let tick = 0;
    const interval = window.setInterval(() => {
      const preview = candidates[Math.floor(Math.random() * candidates.length)];
      setSpinningName(preview.name);
      tick += 1;

      if (tick > 20) {
        window.clearInterval(interval);
        const winner = candidates[Math.floor(Math.random() * candidates.length)];
        setPicked(winner);
        setSpinningName(winner.name);
        setIsSpinning(false);
        setHistory((items) => [
          { name: winner.name, category: winner.category, date: new Date().toLocaleString('ko-KR') },
          ...items.filter((item) => item.name !== winner.name)
        ].slice(0, 6));
      }
    }, 80);
  };

  const resetFilters = () => {
    setCategory('전체');
    setMethod('상관없음');
    setMood('상관없음');
    setPrice('상관없음');
    setSoloOnly(false);
    setPicked(null);
    setSpinningName('오늘의 판결 대기 중');
    setRerolls(0);
  };

  const excludePicked = () => {
    if (!picked) return;
    setExcluded((items) => [...new Set([...items, picked.name])]);
    setPicked(null);
    setSpinningName('다른 후보로 다시 판결');
  };

  const applyPreset = (preset) => {
    setCategory(preset.category);
    setMethod(preset.method);
    setMood(preset.mood);
    setPrice(preset.price);
    setSoloOnly(preset.soloOnly);
    setPicked(null);
    setSpinningName(`${preset.name} 판결 준비`);
  };

  const confidence = picked ? Math.min(96, 68 + candidates.length * 3 - rerolls * 4) : Math.min(92, 52 + candidates.length * 2);

  return (
    <main className="app">
      <Hero
        candidatesCount={candidates.length}
        confidence={confidence}
        isSpinning={isSpinning}
        rerolls={rerolls}
        spinningName={spinningName}
      />

      <section className="workspace">
        <FiltersPanel
          category={category}
          method={method}
          mood={mood}
          price={price}
          soloOnly={soloOnly}
          onApplyPreset={applyPreset}
          onCategoryChange={setCategory}
          onMethodChange={setMethod}
          onMoodChange={setMood}
          onPriceChange={setPrice}
          onReset={resetFilters}
          onSoloOnlyChange={setSoloOnly}
        />

        <DecisionPanel
          candidates={candidates}
          confidence={confidence}
          isSpinning={isSpinning}
          picked={picked}
          rerolls={rerolls}
          spinningName={spinningName}
          onDecide={decideMenu}
          onExcludePicked={excludePicked}
        />

        <SidePanel
          candidates={candidates}
          excluded={excluded}
          history={history}
          onPick={setPicked}
          onRemoveExcluded={(name) => setExcluded((items) => items.filter((item) => item !== name))}
        />
      </section>

      <InfoSections />
    </main>
  );
}

export default App;

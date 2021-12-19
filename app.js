import "./style.css";

const Calc = () => {
  return (
    <div class="flexBoxContainer">
      <div class="calculator">
        <input />
        <div class="keys">C</div>
        <div class="keys">()</div>
        <div class="keys">%</div>
        <div class="keys">/</div>
        <div class="keys">7</div>
        <div class="keys">8</div>
        <div class="keys">9</div>
        <div class="keys">x</div>
        <div class="keys">4</div>
        <div class="keys">5</div>
        <div class="keys">6</div>
        <div class="keys">-</div>
        <div class="keys">1</div>
        <div class="keys">2</div>
        <div class="keys">3</div>
        <div class="keys long">+</div>
        <div class="keys big">=</div>
        <div class="keys">0</div>
      </div>
    </div>
  );
};

export default Calc;

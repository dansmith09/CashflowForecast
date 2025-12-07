import React, { useState, useEffect, useMemo } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2,
  TrendingUp, 
  TrendingDown, 
  Building, 
  PieChart, 
  DollarSign, 
  RefreshCw, 
  Calendar,
  X,
  Info,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  Calculator,
  BarChart2,
  ChevronRight,
  Wallet,
  Percent
} from 'lucide-react';

// --- Theme Constants ---
const THEMES = {
  dark: {
    name: 'dark',
    bg: "bg-[#0d111c]",
    textMain: "text-white",
    textMuted: "text-[#98a1c0]",
    textMutedInverse: "text-[#98a1c0]",
    card: "bg-[#131a2a] border border-[#293249]",
    cardBg: "bg-[#131a2a]",
    cardBorder: "border-[#293249]",
    input: "bg-[#0d111c] border border-[#293249] text-white placeholder-[#5d6785]",
    inputLabel: "text-[#98a1c0]",
    selectBg: "bg-[#131a2a]",
    optionText: "text-white",
    btnPrimary: "bg-[#4c82fb] hover:bg-[#3b6dcc] text-white shadow-lg shadow-blue-900/20",
    btnSecondary: "bg-[#293249] hover:bg-[#404a67] text-white",
    btnDanger: "text-[#ff4343] hover:bg-[#ff4343]/10",
    btnIcon: "text-[#98a1c0] hover:text-[#4c82fb] hover:bg-[#293249]",
    btnIconDanger: "text-[#98a1c0] hover:text-[#ff4343] hover:bg-[#ff4343]/10",
    headerBg: "bg-[#0d111c]/80 border-b border-[#293249]",
    pillBg: "bg-[#1d2433]",
    divider: "divide-[#293249]",
    borderTop: "border-t border-[#293249]",
    borderNormal: "border-[#293249]",
    rowHover: "hover:bg-[#293249]/50",
    tableHeader: "bg-[#0d111c] border-b border-[#293249]",
    tableRowBorder: "border-[#293249]/30",
    tableCellClosing: "bg-[#0d111c]/30",
    actionBorder: "border-[#293249]",
    netPos: "border-[#27ae60]/30 bg-gradient-to-br from-[#131a2a] to-[#052e16]",
    netNeg: "border-[#ff4343]/30 bg-gradient-to-br from-[#131a2a] to-[#2e0505]",
    netBorderPos: "border-[#27ae60]/20",
    netBorderNeg: "border-[#ff4343]/20",
    modalBg: "bg-[#0d111c] border border-[#293249]",
    modalOverlay: "bg-black/60",
    iconMain: "text-white",
    iconAccent: "text-[#4c82fb]",
    subCard: "bg-[#1d2433] border border-[#293249]",
    calcBtn: "bg-[#293249] text-[#98a1c0] hover:text-white hover:bg-[#404a67]",
    shadow: "shadow-xl",
    addButton: "border-[#293249] text-[#27ae60] hover:bg-[#27ae60]/10",
    addButtonOutflow: "border-[#293249] text-[#ff4343] hover:bg-[#ff4343]/10",
    toggleActive: "bg-[#4c82fb] text-white",
    toggleInactive: "bg-transparent text-[#98a1c0] hover:text-white"
  },
  light: {
    name: 'light',
    bg: "bg-[#F5F6FC]",
    textMain: "text-[#0D111C]",
    textMuted: "text-[#7780A0]",
    textMutedInverse: "text-[#7D85A2]",
    card: "bg-white border border-[#D9D9D9]",
    cardBg: "bg-white",
    cardBorder: "border-[#D9D9D9]",
    input: "bg-[#F5F6FC] border border-[#D9D9D9] text-[#0D111C] placeholder-[#98a1c0]",
    inputLabel: "text-[#7780A0]",
    selectBg: "bg-white",
    optionText: "text-[#0D111C]",
    btnPrimary: "bg-[#4c82fb] hover:bg-[#3b6dcc] text-white shadow-lg shadow-blue-500/20",
    btnSecondary: "bg-[#EDEEF2] hover:bg-[#D2D9EE] text-[#0D111C]",
    btnDanger: "text-[#ff4343] hover:bg-[#ff4343]/10",
    btnIcon: "text-[#7780A0] hover:text-[#4c82fb] hover:bg-[#EDEEF2]",
    btnIconDanger: "text-[#7780A0] hover:text-[#ff4343] hover:bg-[#ff4343]/10",
    headerBg: "bg-[#F5F6FC]/80 border-b border-[#D9D9D9]",
    pillBg: "bg-[#EDEEF2]",
    divider: "divide-[#EDEEF2]",
    borderTop: "border-t border-[#D9D9D9]",
    borderNormal: "border-[#D9D9D9]",
    rowHover: "hover:bg-[#EDEEF2]",
    tableHeader: "bg-[#F5F6FC] border-b border-[#D9D9D9]",
    tableRowBorder: "border-[#D9D9D9]/50",
    tableCellClosing: "bg-[#EDEEF2]/50",
    actionBorder: "border-[#D9D9D9]",
    netPos: "border-[#27ae60]/30 bg-gradient-to-br from-white to-[#E6F4EA]",
    netNeg: "border-[#ff4343]/30 bg-gradient-to-br from-white to-[#FCE8E8]",
    netBorderPos: "border-[#27ae60]/20",
    netBorderNeg: "border-[#ff4343]/20",
    modalBg: "bg-[#FFFFFF] border border-[#D9D9D9]",
    modalOverlay: "bg-black/20",
    iconMain: "text-[#0D111C]",
    iconAccent: "text-[#4c82fb]",
    subCard: "bg-[#F5F6FC] border border-[#D9D9D9]",
    calcBtn: "bg-[#EDEEF2] text-[#7780A0] hover:text-[#4c82fb] hover:bg-[#D2D9EE]",
    shadow: "shadow-lg shadow-gray-200/50",
    addButton: "border-[#D9D9D9] text-[#27ae60] hover:bg-[#27ae60]/10",
    addButtonOutflow: "border-[#D9D9D9] text-[#ff4343] hover:bg-[#ff4343]/10",
    toggleActive: "bg-[#4c82fb] text-white shadow-md",
    toggleInactive: "bg-transparent text-[#7780A0] hover:text-[#0D111C]"
  }
};

// --- Helper Functions ---

const formatMoney = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const parseMoney = (val) => {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  return parseFloat(val.replace(/[^0-9.-]+/g, "")) || 0;
};

// --- Top Level Components ---

const Card = ({ children, className = "", onClick, theme }) => (
  <div 
    onClick={onClick}
    className={`${theme.card} rounded-3xl p-6 ${theme.shadow} ${className}`}
  >
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = "", type="button", theme }) => {
  const baseStyle = "px-6 py-3 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-[16px]";
  
  const variants = {
    primary: `${theme.btnPrimary}`,
    secondary: `${theme.btnSecondary}`, 
    purple: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg",
    outline: `border ${theme.borderNormal} hover:${theme.bg} ${theme.textMuted}`,
    danger: "text-[#ff4343] hover:bg-[#ff4343]/10 p-2 rounded-xl"
  };
  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ label, value, onChange, type = "text", placeholder, prefix, readOnly, action, theme }) => (
  <div className={`flex flex-col gap-2 w-full ${theme.cardBg} ${theme.cardBorder} border rounded-2xl p-4 focus-within:border-[#4c82fb] transition-colors`}>
    <div className="flex justify-between items-center">
      {label && <label className={`text-sm font-medium ${theme.textMuted}`}>{label}</label>}
      {action && <div className="shrink-0">{action}</div>}
    </div>
    <div className="relative flex items-center">
      {prefix && (
        <span className={`text-2xl font-medium ${theme.textMuted} mr-2 self-center pt-1`}>
          {prefix}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`w-full bg-transparent text-3xl font-medium ${theme.textMain} placeholder-[#5d6785] outline-none ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
      />
    </div>
  </div>
);

const Select = ({ label, value, onChange, options, theme }) => (
  <div className={`flex flex-col gap-2 w-full ${theme.cardBg} ${theme.cardBorder} border rounded-2xl p-4 focus-within:border-[#4c82fb] transition-colors`}>
    {label && <label className={`text-sm font-medium ${theme.textMuted}`}>{label}</label>}
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent text-xl font-medium ${theme.textMain} outline-none appearance-none cursor-pointer pr-8`}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className={`${theme.selectBg} ${theme.optionText}`}>{opt.label}</option>
        ))}
      </select>
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 ${theme.textMuted} pointer-events-none`}>
        <ChevronDown size={20} />
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children, theme }) => {
  if (!isOpen) return null;
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme.modalOverlay} backdrop-blur-md animate-in fade-in duration-200`}>
      <div className={`${theme.modalBg} w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]`}>
        <div className={`flex items-center justify-between p-6 border-b ${theme.borderNormal}`}>
          <h2 className={`text-2xl font-semibold ${theme.textMain} flex items-center gap-2`}>
            {title}
          </h2>
          <button onClick={onClose} className={`${theme.textMuted} hover:${theme.textMain} transition-colors p-1 rounded-full hover:${theme.bg}`}>
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

const ItemRow = ({ item, onDelete, onEdit, theme }) => (
  <div className={`group flex items-center justify-between p-4 mb-2 ${theme.rowHover} rounded-2xl transition-colors cursor-default`}>
    <div className="flex flex-col">
      <span className={`font-semibold ${theme.textMain} text-lg`}>{item.name}</span>
      <div className="flex items-center gap-2 mt-1">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${item.category === 'ongoing' ? 'bg-[#4c82fb]/20 text-[#4c82fb]' : 'bg-[#a855f7]/20 text-[#a855f7]'}`}>
          {item.category}
        </span>
        <span className={`text-sm ${theme.textMuted} capitalize`}>
          {item.category === 'one-off' ? `Month ${item.month}` : item.frequency}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <span className={`font-medium ${theme.textMain} text-lg tabular-nums`}>{formatMoney(item.amount)}</span>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(item); }}
          className={`p-2 rounded-xl transition-all ${theme.btnIcon}`}
        >
          <Edit2 size={18} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}
          className={`p-2 rounded-xl transition-all ${theme.btnIconDanger}`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  </div>
);

// --- Modals ---

const LoanCalcModal = ({ isOpen, onClose, propertyValue, onApply, theme }) => {
  const [lvr, setLvr] = useState(80);
  const [depositPercent, setDepositPercent] = useState(20);
  const [calcLoan, setCalcLoan] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setLvr(80);
      setDepositPercent(20);
    }
  }, [isOpen]);

  useEffect(() => {
    const val = parseMoney(propertyValue);
    setCalcLoan(val * (lvr / 100));
  }, [lvr, propertyValue]);

  const handleLvrChange = (e) => {
    const newLvr = parseFloat(e.target.value) || 0;
    setLvr(newLvr);
    setDepositPercent(100 - newLvr);
  };

  const handleDepositChange = (e) => {
    const newDep = parseFloat(e.target.value) || 0;
    setDepositPercent(newDep);
    setLvr(100 - newDep);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Loan Calculator" theme={theme}>
      <div className="space-y-6">
        <div className={`${theme.subCard} p-6 rounded-2xl`}>
           <div className={`text-xs font-bold ${theme.textMuted} uppercase mb-1`}>Property Value</div>
           <div className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(parseMoney(propertyValue))}</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div>
             <Input label="LVR %" value={lvr} onChange={handleLvrChange} placeholder="80" theme={theme} />
           </div>
           <div>
             <Input label="Deposit %" value={depositPercent} onChange={handleDepositChange} placeholder="20" theme={theme} />
           </div>
        </div>

        <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-6 flex justify-between items-center">
           <span className="text-sm font-bold text-[#4c82fb] uppercase">Calculated Loan</span>
           <span className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(calcLoan)}</span>
        </div>

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button onClick={() => { onApply(calcLoan); onClose(); }} className="flex-1" theme={theme}>Apply Loan Amount</Button>
        </div>
      </div>
    </Modal>
  );
};

const RepaymentCalcModal = ({ isOpen, onClose, loanAmount, onApply, theme }) => {
  const [rate, setRate] = useState(6.0);
  const [term, setTerm] = useState(30);
  const [repayment, setRepayment] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setRate(6.0);
      setTerm(30);
    }
  }, [isOpen]);

  useEffect(() => {
    const P = parseMoney(loanAmount);
    const r = (rate / 100) / 12;
    const n = term * 12;

    if (P > 0 && r > 0 && n > 0) {
      const m = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setRepayment(m);
    } else {
      setRepayment(0);
    }
  }, [loanAmount, rate, term]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Repayment Calculator" theme={theme}>
      <div className="space-y-6">
        <div className={`${theme.subCard} p-6 rounded-2xl`}>
           <div className={`text-xs font-bold ${theme.textMuted} uppercase mb-1`}>Loan Amount</div>
           <div className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(parseMoney(loanAmount))}</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div className="relative">
             <Input label="Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="6.00" theme={theme} />
             <span className={`absolute right-4 top-10 ${theme.textMuted} text-xl`}>%</span>
           </div>
           <div className="relative">
             <Input label="Loan Term" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="30" theme={theme} />
             <span className={`absolute right-4 top-10 ${theme.textMuted} text-xl`}>Yrs</span>
           </div>
        </div>

        <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-6 flex justify-between items-center">
           <span className="text-sm font-bold text-[#4c82fb] uppercase">Monthly Repayment</span>
           <span className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(repayment)}</span>
        </div>

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button onClick={() => { onApply(repayment); onClose(); }} className="flex-1" theme={theme}>Apply Repayment</Button>
        </div>
      </div>
    </Modal>
  );
};

const StampDutyCalcModal = ({ isOpen, onClose, purchasePrice, onApply, theme }) => {
  const [state, setState] = useState('NSW');
  const [duty, setDuty] = useState(0);

  useEffect(() => {
    const val = parseMoney(purchasePrice);
    let d = 0;

    switch (state) {
      case 'NSW':
        if (val <= 15000) d = 0.0125 * val;
        else if (val <= 32000) d = 187 + 0.015 * (val - 15000);
        else if (val <= 87000) d = 442 + 0.0175 * (val - 32000);
        else if (val <= 327000) d = 1405 + 0.035 * (val - 87000);
        else if (val <= 1089000) d = 9805 + 0.045 * (val - 327000);
        else d = 44095 + 0.055 * (val - 1089000);
        break;
      case 'VIC':
        if (val <= 25000) d = 0.014 * val;
        else if (val <= 130000) d = 350 + 0.024 * (val - 25000);
        else if (val <= 960000) d = 2870 + 0.06 * (val - 130000);
        else if (val <= 2000000) d = 0.055 * val;
        else d = 0.065 * val;
        break;
      case 'QLD': // Investor
        if (val <= 5000) d = 0;
        else if (val <= 75000) d = 0.015 * (val - 5000);
        else if (val <= 540000) d = 1050 + 0.035 * (val - 75000);
        else if (val <= 1000000) d = 17325 + 0.045 * (val - 540000);
        else d = 37525 + 0.0575 * (val - 1000000);
        break;
      case 'WA':
        if (val <= 120000) d = 0.019 * val;
        else if (val <= 150000) d = 2280 + 0.0285 * (val - 120000);
        else if (val <= 360000) d = 3135 + 0.038 * (val - 150000);
        else if (val <= 725000) d = 11115 + 0.0475 * (val - 360000);
        else d = 28453 + 0.0515 * (val - 725000);
        break;
      case 'SA':
        if (val <= 12000) d = 0.01 * val;
        else if (val <= 30000) d = 120 + 0.02 * (val - 12000);
        else if (val <= 50000) d = 480 + 0.03 * (val - 30000);
        else if (val <= 100000) d = 1080 + 0.035 * (val - 50000);
        else if (val <= 200000) d = 2830 + 0.04 * (val - 100000);
        else if (val <= 250000) d = 6830 + 0.0425 * (val - 200000);
        else if (val <= 300000) d = 8955 + 0.0475 * (val - 250000);
        else d = 11330 + 0.05 * (val - 300000);
        break;
      case 'TAS':
        if (val <= 3000) d = 50;
        else if (val <= 25000) d = 50 + 0.02 * (val - 3000);
        else if (val <= 75000) d = 490 + 0.0275 * (val - 25000);
        else if (val <= 200000) d = 1865 + 0.03 * (val - 75000);
        else d = 5615 + 0.04 * (val - 200000);
        break;
      case 'ACT':
        if (val <= 200000) d = 0.017 * val; // Interpreted based on subsequent brackets
        else if (val <= 300000) d = 3400 + 0.034 * (val - 200000);
        else if (val <= 500000) d = 6800 + 0.04 * (val - 300000);
        else if (val <= 750000) d = 14800 + 0.046 * (val - 500000);
        else if (val <= 1000000) d = 26300 + 0.053 * (val - 750000);
        else d = 39550 + 0.06 * (val - 1000000);
        break;
      case 'NT':
        // Formula: (0.06571441 * V) + 15 * ln(V) - 0.000287 * V * ln(V) - 1500
        const lnV = Math.log(val);
        d = (0.06571441 * val) + (15 * lnV) - (0.000287 * val * lnV) - 1500;
        if (d < 0) d = 0;
        break;
      default:
        d = 0;
    }
    
    setDuty(Math.max(0, Math.floor(d))); // Stamp duty usually rounded to integer
  }, [state, purchasePrice]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Stamp Duty Calculator" theme={theme}>
      <div className="space-y-6">
        <div className={`${theme.subCard} p-6 rounded-2xl`}>
           <div className={`text-xs font-bold ${theme.textMuted} uppercase mb-1`}>Property Value</div>
           <div className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(parseMoney(purchasePrice))}</div>
        </div>

        <div className="grid grid-cols-1 gap-4">
           <Select 
             label="State / Territory" 
             value={state} 
             onChange={(e) => setState(e.target.value)} 
             options={[
               {value: 'NSW', label: 'NSW - New South Wales'},
               {value: 'VIC', label: 'VIC - Victoria'},
               {value: 'QLD', label: 'QLD - Queensland (Investor)'},
               {value: 'WA', label: 'WA - Western Australia'},
               {value: 'SA', label: 'SA - South Australia'},
               {value: 'TAS', label: 'TAS - Tasmania'},
               {value: 'ACT', label: 'ACT - Australian Capital Territory'},
               {value: 'NT', label: 'NT - Northern Territory'},
             ]}
             theme={theme}
           />
        </div>

        <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-6 flex justify-between items-center">
           <span className="text-sm font-bold text-[#4c82fb] uppercase">Estimated Duty</span>
           <span className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(duty)}</span>
        </div>

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button onClick={() => { onApply(duty); onClose(); }} className="flex-1" theme={theme}>Apply Stamp Duty</Button>
        </div>
      </div>
    </Modal>
  );
};

const FrequencyCalcModal = ({ isOpen, onClose, onApply, title, theme }) => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setAmount('');
      setFrequency('weekly');
      setMonthlyAmount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const val = parseMoney(amount);
    let monthly = 0;
    // Logic: Convert to annual then divide by 12
    switch (frequency) {
      case 'weekly': monthly = (val * 52) / 12; break;
      case 'fortnightly': monthly = (val * 26) / 12; break;
      case 'quarterly': monthly = (val * 4) / 12; break;
      case 'annually': monthly = val / 12; break;
      default: monthly = val; // monthly
    }
    setMonthlyAmount(monthly);
  }, [amount, frequency]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} theme={theme}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
           <Input 
             label="Amount" 
             prefix="$" 
             value={amount} 
             onChange={(e) => setAmount(e.target.value)} 
             placeholder="0.00" 
             theme={theme} 
           />
           <Select 
             label="Frequency" 
             value={frequency} 
             onChange={(e) => setFrequency(e.target.value)} 
             options={[
               {value: 'weekly', label: 'Weekly'},
               {value: 'fortnightly', label: 'Fortnightly'},
               {value: 'quarterly', label: 'Quarterly'},
               {value: 'annually', label: 'Annually'}
             ]}
             theme={theme}
           />
        </div>

        <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-6 flex justify-between items-center">
           <span className="text-sm font-bold text-[#4c82fb] uppercase">Monthly Equivalent</span>
           <span className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(monthlyAmount)}</span>
        </div>

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button onClick={() => { onApply(monthlyAmount); onClose(); }} className="flex-1" theme={theme}>Apply Monthly Amount</Button>
        </div>
      </div>
    </Modal>
  );
};

const ExpenseRatioCalcModal = ({ isOpen, onClose, portfolioValue, onApply, theme }) => {
  const [percent, setPercent] = useState('');
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setPercent('');
      setMonthlyExpense(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const val = parseMoney(portfolioValue);
    const p = parseFloat(percent) || 0;
    // (Value * % / 100) / 12
    const monthly = (val * (p / 100)) / 12;
    setMonthlyExpense(monthly);
  }, [percent, portfolioValue]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Expense Ratio Calculator" theme={theme}>
      <div className="space-y-6">
        <div className={`${theme.subCard} p-6 rounded-2xl`}>
           <div className={`text-xs font-bold ${theme.textMuted} uppercase mb-1`}>Portfolio Value</div>
           <div className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(parseMoney(portfolioValue))}</div>
        </div>

        <div className="grid grid-cols-1 gap-4">
           <div className="relative">
             <Input label="Expense Ratio (p.a)" value={percent} onChange={(e) => setPercent(e.target.value)} placeholder="e.g. 1.5" theme={theme} />
             <span className={`absolute right-4 top-10 ${theme.textMuted} text-xl`}>%</span>
           </div>
        </div>

        <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-6 flex justify-between items-center">
           <span className="text-sm font-bold text-[#4c82fb] uppercase">Monthly Expense</span>
           <span className={`text-3xl font-medium ${theme.textMain}`}>{formatMoney(monthlyExpense)}</span>
        </div>

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button onClick={() => { onApply(monthlyExpense); onClose(); }} className="flex-1" theme={theme}>Apply Expense</Button>
        </div>
      </div>
    </Modal>
  );
};

const ItemModal = ({ isOpen, onClose, type, category, initialData, onSave, theme }) => {
  // ... existing implementation
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState(1);
  const [rawAmount, setRawAmount] = useState('');
  const [amountFreq, setAmountFreq] = useState('annually');
  const [paymentFreq, setPaymentFreq] = useState('monthly');
  const [finalPaymentAmount, setFinalPaymentAmount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setName(initialData.name);
        if (category === 'one-off') {
          setAmount(initialData.amount);
          setMonth(initialData.month);
        } else {
          setRawAmount(initialData.amount);
          setAmountFreq(initialData.frequency); 
          setPaymentFreq(initialData.frequency);
        }
      } else {
        setName('');
        setAmount('');
        setMonth(1);
        setRawAmount('');
        setAmountFreq('annually');
        setPaymentFreq('monthly');
        setFinalPaymentAmount(0);
      }
    }
  }, [isOpen, initialData, category]);

  useEffect(() => {
    if (category === 'ongoing') {
      const base = parseMoney(rawAmount);
      let annualAmount = 0;
      if (amountFreq === 'weekly') annualAmount = base * 52;
      else if (amountFreq === 'fortnightly') annualAmount = base * 26;
      else if (amountFreq === 'monthly') annualAmount = base * 12;
      else if (amountFreq === 'quarterly') annualAmount = base * 4;
      else annualAmount = base; 

      let final = 0;
      if (paymentFreq === 'weekly') final = annualAmount / 52;
      else if (paymentFreq === 'fortnightly') final = annualAmount / 26;
      else if (paymentFreq === 'monthly') final = annualAmount / 12;
      else if (paymentFreq === 'quarterly') final = annualAmount / 4;
      else final = annualAmount;

      setFinalPaymentAmount(final);
    }
  }, [rawAmount, amountFreq, paymentFreq, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === 'one-off') {
      onSave({ name: name || 'Untitled Item', amount: parseMoney(amount), type, category, month: parseInt(month) });
    } else {
      onSave({ name: name || 'Untitled Item', amount: finalPaymentAmount, type, category, frequency: paymentFreq });
    }
  };

  const titleType = type === 'inflow' ? 'Inflow' : 'Outflow';
  const titleCat = category === 'ongoing' ? 'Ongoing' : 'One-off';
  const mode = initialData ? 'Edit' : 'Add';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${mode} ${titleCat} ${titleType}`} theme={theme}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input 
          label="Name / Description" 
          placeholder={`e.g. ${type === 'inflow' ? 'Salary, Bonus' : 'Car Purchase, Groceries'}`} 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          theme={theme}
        />

        {category === 'one-off' ? (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in">
             <Input label="Amount" prefix="$" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" theme={theme} />
             <Select 
               label="Month Occurring"
               value={month}
               onChange={(e) => setMonth(e.target.value)}
               options={Array.from({length: 12}, (_, i) => ({ value: i+1, label: `Month ${i+1}` }))}
               theme={theme}
             />
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in">
             <div className={`${theme.subCard} p-6 rounded-2xl space-y-4`}>
               <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Input Amount" 
                    prefix="$" 
                    value={rawAmount} 
                    onChange={(e) => setRawAmount(e.target.value)} 
                    placeholder="100,000" 
                    theme={theme}
                  />
                  <Select 
                    label="Amount Frequency"
                    value={amountFreq}
                    onChange={(e) => setAmountFreq(e.target.value)}
                    options={[
                      {value: 'annually', label: 'Per Year'},
                      {value: 'quarterly', label: 'Per Quarter'},
                      {value: 'monthly', label: 'Per Month'},
                      {value: 'fortnightly', label: 'Per Fortnight'},
                      {value: 'weekly', label: 'Per Week'},
                    ]}
                    theme={theme}
                  />
               </div>
               
               <div className="flex justify-center text-[#4c82fb]">
                  <TrendingDown size={24} />
               </div>

               <Select 
                  label="Actual Payment Frequency"
                  value={paymentFreq}
                  onChange={(e) => setPaymentFreq(e.target.value)}
                  options={[
                    {value: 'weekly', label: 'Weekly (52x / yr)'},
                    {value: 'fortnightly', label: 'Fortnightly (26x / yr)'},
                    {value: 'monthly', label: 'Monthly (12x / yr)'},
                    {value: 'quarterly', label: 'Quarterly (4x / yr)'},
                    {value: 'annually', label: 'Annually (1x / yr)'},
                  ]}
                  theme={theme}
               />
             </div>

             <div className="bg-[#4c82fb]/10 border border-[#4c82fb]/30 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-sm font-bold text-[#4c82fb] uppercase">Calculated Per Payment</span>
                <span className={`text-2xl font-medium ${theme.textMain} tabular-nums`}>{formatMoney(finalPaymentAmount)}</span>
             </div>
          </div>
        )}

        <div className={`flex gap-3 pt-4 ${theme.borderTop}`}>
           <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
           <Button type="submit" className="flex-1" theme={theme}>{mode} {titleType}</Button>
        </div>
      </form>
    </Modal>
  )
};

const PropertyModal = ({ isOpen, onClose, onAdd, theme }) => {
  // ... existing implementation
  const [formData, setFormData] = useState({
    name: '', isNewPurchase: true, value: '', stampDuty: '', legal: '', 
    ongoingExpenses: '', expenseFreq: 'monthly', rentalIncome: '', 
    hasLoan: false, loanAmount: '', loanRepayments: ''
  });
  const [isLoanCalcOpen, setIsLoanCalcOpen] = useState(false);
  const [isRepaymentCalcOpen, setIsRepaymentCalcOpen] = useState(false);
  const [isStampDutyCalcOpen, setIsStampDutyCalcOpen] = useState(false);
  const [isIncomeCalcOpen, setIsIncomeCalcOpen] = useState(false);
  const [isExpenseCalcOpen, setIsExpenseCalcOpen] = useState(false);

  const handleChange = (f) => (e) => setFormData(p => ({ ...p, [f]: e.target.value }));

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
       setFormData({
        name: '', isNewPurchase: true, value: '', stampDuty: '', legal: '', 
        ongoingExpenses: '', expenseFreq: 'monthly', rentalIncome: '', 
        hasLoan: false, loanAmount: '', loanRepayments: ''
       });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  const handleApplyLoan = (amount) => setFormData(p => ({ ...p, loanAmount: amount.toFixed(0) }));
  const handleApplyRepayment = (amount) => setFormData(p => ({ ...p, loanRepayments: amount.toFixed(0) }));
  const handleApplyStampDuty = (amount) => setFormData(p => ({ ...p, stampDuty: amount.toFixed(0) }));
  const handleApplyMonthlyExpense = (amount) => setFormData(p => ({ ...p, ongoingExpenses: amount.toFixed(0), expenseFreq: 'monthly' }));
  const handleApplyMonthlyIncome = (amount) => setFormData(p => ({ ...p, rentalIncome: amount.toFixed(0) }));

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Add Property" theme={theme}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Property Name / Title" placeholder="e.g. Sydney Apartment" value={formData.name} onChange={handleChange('name')} theme={theme} />
          
          <div className={`grid grid-cols-2 gap-2 ${theme.subCard} p-1.5 rounded-2xl`}>
            <button 
              type="button" 
              onClick={() => setFormData(p => ({...p, isNewPurchase: true}))}
              className={`py-3 rounded-xl text-sm font-bold transition-all ${formData.isNewPurchase ? 'bg-[#4c82fb] text-white shadow-lg' : `${theme.textMuted} hover:${theme.textMain}`}`}
              >
                New Purchase
            </button>
            <button 
              type="button" 
              onClick={() => setFormData(p => ({...p, isNewPurchase: false}))}
              className={`py-3 rounded-xl text-sm font-bold transition-all ${!formData.isNewPurchase ? 'bg-[#4c82fb] text-white shadow-lg' : `${theme.textMuted} hover:${theme.textMain}`}`}
              >
                Current Asset
            </button>
          </div>

          {formData.isNewPurchase && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              <Input label="Purchase Price" prefix="$" value={formData.value} onChange={handleChange('value')} placeholder="0" theme={theme} />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Stamp Duty" 
                  prefix="$" 
                  value={formData.stampDuty} 
                  onChange={handleChange('stampDuty')} 
                  placeholder="0" 
                  theme={theme}
                  action={
                    parseMoney(formData.value) > 0 && (
                      <button 
                        type="button"
                        onClick={() => setIsStampDutyCalcOpen(true)}
                        className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                        title="Calculate Stamp Duty"
                      >
                        <Calculator size={20} />
                      </button>
                    )
                  }
                />
                <Input label="Legal / Settlement" prefix="$" value={formData.legal} onChange={handleChange('legal')} placeholder="0" theme={theme} />
              </div>
            </div>
          )}

          <div className={`${theme.borderTop} pt-4 space-y-4`}>
            <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Ongoing Expenses" 
                  prefix="$" 
                  value={formData.ongoingExpenses} 
                  onChange={handleChange('ongoingExpenses')} 
                  placeholder="0.00" 
                  theme={theme}
                  action={
                    <button 
                      type="button"
                      onClick={() => setIsExpenseCalcOpen(true)}
                      className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                      title="Calculate Monthly Expense"
                    >
                      <Calculator size={20} />
                    </button>
                  }
                />
                <Select 
                  label="Expense Frequency" 
                  value={formData.expenseFreq} 
                  onChange={handleChange('expenseFreq')}
                  options={[{value: 'monthly', label: 'Monthly'}, {value: 'quarterly', label: 'Quarterly'}, {value: 'annually', label: 'Annually'}]}
                  theme={theme}
                />
            </div>
            <Input 
              label="Monthly Rental Income" 
              prefix="$" 
              value={formData.rentalIncome} 
              onChange={handleChange('rentalIncome')} 
              placeholder="0.00" 
              theme={theme} 
              action={
                <button 
                  type="button"
                  onClick={() => setIsIncomeCalcOpen(true)}
                  className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                  title="Calculate Monthly Rent"
                >
                  <Calculator size={20} />
                </button>
              }
            />
          </div>

          <div className={`${theme.borderTop} pt-4`}>
            <label className="flex items-center gap-3 cursor-pointer mb-4">
              <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${formData.hasLoan ? 'bg-[#4c82fb] border-[#4c82fb]' : 'border-[#5d6785]'}`}>
                {formData.hasLoan && <TrendingUp size={16} className="text-white" />}
              </div>
              <input type="checkbox" className="hidden" checked={formData.hasLoan} onChange={(e) => setFormData(p => ({...p, hasLoan: e.target.checked}))} />
              <span className={`font-bold ${theme.textMain} text-lg`}>Purchased with Loan?</span>
            </label>
            
            {formData.hasLoan && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in">
                  <Input 
                    label="Loan Amount" 
                    prefix="$" 
                    value={formData.loanAmount} 
                    onChange={handleChange('loanAmount')}
                    theme={theme}
                    action={
                      parseMoney(formData.value) > 0 && (
                        <button 
                          type="button"
                          onClick={() => setIsLoanCalcOpen(true)}
                          className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                          title="Calculate Loan from LVR"
                        >
                          <Calculator size={20} />
                        </button>
                      )
                    }
                  />
                  <Input 
                    label="Monthly Repayments" 
                    prefix="$" 
                    value={formData.loanRepayments} 
                    onChange={handleChange('loanRepayments')} 
                    theme={theme}
                    action={
                      parseMoney(formData.loanAmount) > 0 && (
                        <button 
                          type="button"
                          onClick={() => setIsRepaymentCalcOpen(true)}
                          className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                          title="Calculate Repayments"
                        >
                          <Calculator size={20} />
                        </button>
                      )
                    }
                  />
              </div>
            )}
          </div>

          <div className={`flex gap-3 mt-6 pt-4 ${theme.borderTop}`}>
            <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
            <Button type="submit" className="flex-1" theme={theme}>Add Property</Button>
          </div>
        </form>
      </Modal>

      <LoanCalcModal isOpen={isLoanCalcOpen} onClose={() => setIsLoanCalcOpen(false)} propertyValue={formData.value} onApply={handleApplyLoan} theme={theme} />
      <RepaymentCalcModal isOpen={isRepaymentCalcOpen} onClose={() => setIsRepaymentCalcOpen(false)} loanAmount={formData.loanAmount} onApply={handleApplyRepayment} theme={theme} />
      <StampDutyCalcModal isOpen={isStampDutyCalcOpen} onClose={() => setIsStampDutyCalcOpen(false)} purchasePrice={formData.value} onApply={handleApplyStampDuty} theme={theme} />
      <FrequencyCalcModal isOpen={isExpenseCalcOpen} onClose={() => setIsExpenseCalcOpen(false)} onApply={handleApplyMonthlyExpense} title="Expense to Monthly Converter" theme={theme} />
      <FrequencyCalcModal isOpen={isIncomeCalcOpen} onClose={() => setIsIncomeCalcOpen(false)} onApply={handleApplyMonthlyIncome} title="Rent to Monthly Converter" theme={theme} />
    </>
  );
};

const PortfolioModal = ({ isOpen, onClose, onAdd, theme }) => {
  const [formData, setFormData] = useState({
    name: '', isNewInvestment: true, value: '', costs: '', 
    yieldPercent: '', paymentFreq: 'quarterly', ongoingExpenses: '', expenseFreq: 'monthly',
    fixedIncomeAmount: '', incomeType: 'percentage'
  });
  const [isExpenseRatioCalcOpen, setIsExpenseRatioCalcOpen] = useState(false);

  const handleChange = (f) => (e) => setFormData(p => ({ ...p, [f]: e.target.value }));

  useEffect(() => {
    if (isOpen) {
       setFormData({
        name: '', isNewInvestment: true, value: '', costs: '', 
        yieldPercent: '', paymentFreq: 'quarterly', ongoingExpenses: '', expenseFreq: 'monthly',
        fixedIncomeAmount: '', incomeType: 'percentage'
       });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  const handleApplyExpenseRatio = (amount) => {
    setFormData(p => ({ ...p, ongoingExpenses: amount.toFixed(0), expenseFreq: 'monthly' }));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Add Portfolio" theme={theme}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Portfolio Name / Title" placeholder="e.g. Blue Chip Shares" value={formData.name} onChange={handleChange('name')} theme={theme} />
          
          <div className={`grid grid-cols-2 gap-2 ${theme.subCard} p-1.5 rounded-2xl`}>
            <button 
              type="button" 
              onClick={() => setFormData(p => ({...p, isNewInvestment: true}))}
              className={`py-3 rounded-xl text-sm font-bold transition-all ${formData.isNewInvestment ? 'bg-[#4c82fb] text-white shadow-lg' : `${theme.textMuted} hover:${theme.textMain}`}`}
              >
                New Investment
            </button>
            <button 
              type="button" 
              onClick={() => setFormData(p => ({...p, isNewInvestment: false}))}
              className={`py-3 rounded-xl text-sm font-bold transition-all ${!formData.isNewInvestment ? 'bg-[#4c82fb] text-white shadow-lg' : `${theme.textMuted} hover:${theme.textMain}`}`}
              >
                Current Portfolio
            </button>
          </div>

          <Input label="Portfolio Value" prefix="$" value={formData.value} onChange={handleChange('value')} theme={theme} placeholder="0" />
          
          {formData.isNewInvestment && (
            <Input label="Establishment / Brokerage Costs" prefix="$" value={formData.costs} onChange={handleChange('costs')} theme={theme} placeholder="0" />
          )}

          <div className="space-y-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFormData(p => ({ ...p, incomeType: 'percentage' }))}
                className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${formData.incomeType === 'percentage' ? theme.toggleActive : theme.toggleInactive}`}
              >
                % Yield
              </button>
              <button
                type="button"
                onClick={() => setFormData(p => ({ ...p, incomeType: 'fixed' }))}
                className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${formData.incomeType === 'fixed' ? theme.toggleActive : theme.toggleInactive}`}
              >
                Fixed Amount
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    {formData.incomeType === 'percentage' ? (
                      <>
                          <Input label="Expected Yield (p.a)" value={formData.yieldPercent} onChange={handleChange('yieldPercent')} theme={theme} placeholder="0" />
                          <span className={`absolute right-4 top-10 ${theme.textMuted} text-xl`}>%</span>
                      </>
                    ) : (
                      <Input label="Income Amount" prefix="$" value={formData.fixedIncomeAmount} onChange={handleChange('fixedIncomeAmount')} theme={theme} placeholder="0" />
                    )}
                </div>
                <Select 
                    label="Payment Frequency" 
                    value={formData.paymentFreq} 
                    onChange={handleChange('paymentFreq')}
                    options={[{value: 'monthly', label: 'Monthly'}, {value: 'quarterly', label: 'Quarterly'}, {value: 'annually', label: 'Annually'}, {value: 'fortnightly', label: 'Fortnightly'}, {value: 'weekly', label: 'Weekly'}]}
                    theme={theme}
                  />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Ongoing Expenses" 
                  prefix="$" 
                  value={formData.ongoingExpenses} 
                  onChange={handleChange('ongoingExpenses')} 
                  placeholder="0.00" 
                  theme={theme}
                  action={
                    parseMoney(formData.value) > 0 && (
                      <button 
                        type="button"
                        onClick={() => setIsExpenseRatioCalcOpen(true)}
                        className={`p-3 rounded-xl transition-all ${theme.calcBtn}`}
                        title="Calculate from Expense Ratio"
                      >
                        <Calculator size={20} />
                      </button>
                    )
                  }
                />
                <Select 
                  label="Expense Frequency" 
                  value={formData.expenseFreq} 
                  onChange={handleChange('expenseFreq')}
                  options={[{value: 'monthly', label: 'Monthly'}, {value: 'quarterly', label: 'Quarterly'}, {value: 'annually', label: 'Annually'}]}
                  theme={theme}
                />
            </div>

          <div className={`flex gap-3 mt-6 pt-4 ${theme.borderTop}`}>
            <Button variant="secondary" onClick={onClose} className="flex-1" theme={theme}>Cancel</Button>
            <Button variant="primary" type="submit" className="flex-1" theme={theme}>Add Portfolio</Button>
          </div>
        </form>
      </Modal>

      <ExpenseRatioCalcModal isOpen={isExpenseRatioCalcOpen} onClose={() => setIsExpenseRatioCalcOpen(false)} portfolioValue={formData.value} onApply={handleApplyExpenseRatio} theme={theme} />
    </>
  );
};

// --- Main Application ---

export default function CashflowForecast() {
  // ... existing implementation
  const [openingBalance, setOpeningBalance] = useState(0);
  const [items, setItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Theme derivation
  const theme = isDarkMode ? THEMES.dark : THEMES.light;

  // UI State
  const [collapsed, setCollapsed] = useState({
    inflows: false,
    outflows: false,
    forecast: false
  });
  
  // Modals
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [itemModalConfig, setItemModalConfig] = useState({ isOpen: false, type: 'inflow', category: 'ongoing', editingItem: null });

  // --- Calculations ---

  const monthlyData = useMemo(() => {
    let balance = parseFloat(openingBalance) || 0;
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    return months.map(month => {
      const opening = balance;
      let oneOffIn = 0;
      let ongoingIn = 0;
      let oneOffOut = 0;
      let ongoingOut = 0;

      const breakdowns = [];

      items.forEach(item => {
        let amount = parseFloat(item.amount) || 0;
        let applies = false;
        let multiplier = 1;

        if (item.category === 'one-off') {
          if (parseInt(item.month) === month) applies = true;
        } else {
          // Ongoing
          if (item.frequency === 'monthly') applies = true;
          if (item.frequency === 'quarterly' && month % 3 === 0) applies = true;
          if (item.frequency === 'annually' && month === 12) applies = true;
          
          if (item.frequency === 'weekly') { applies = true; multiplier = 52 / 12; }
          if (item.frequency === 'fortnightly') { applies = true; multiplier = 26 / 12; }
        }

        if (applies) {
          const finalAmount = amount * multiplier;
          if (item.type === 'inflow') {
            if (item.category === 'one-off') oneOffIn += finalAmount;
            else ongoingIn += finalAmount;
          } else {
            if (item.category === 'one-off') oneOffOut += finalAmount;
            else ongoingOut += finalAmount;
          }
          breakdowns.push({ ...item, amount: finalAmount });
        }
      });

      const netFlow = (oneOffIn + ongoingIn) - (oneOffOut + ongoingOut);
      balance += netFlow;

      return {
        month,
        opening,
        oneOffIn,
        ongoingIn,
        oneOffOut,
        ongoingOut,
        netFlow,
        closing: balance,
        breakdowns: breakdowns.sort((a, b) => b.amount - a.amount) 
      };
    });
  }, [items, openingBalance]);

  const totals = useMemo(() => {
    const lastMonth = monthlyData[11];
    
    const ongoingInItems = items.filter(i => i.category === 'ongoing' && i.type === 'inflow');
    const ongoingOutItems = items.filter(i => i.category === 'ongoing' && i.type === 'outflow');
    
    const calcAnnual = (list) => list.reduce((acc, item) => {
      let mult = 1;
      switch(item.frequency) {
        case 'weekly': mult = 52; break;
        case 'fortnightly': mult = 26; break;
        case 'monthly': mult = 12; break;
        case 'quarterly': mult = 4; break;
        case 'annually': mult = 1; break;
        default: mult = 1;
      }
      return acc + (item.amount * mult);
    }, 0);

    const totalOngoingIn = calcAnnual(ongoingInItems);
    const totalOngoingOut = calcAnnual(ongoingOutItems);

    const totalOneOffIn = items.filter(i => i.category === 'one-off' && i.type === 'inflow').reduce((acc, i) => acc + i.amount, 0);
    const totalOneOffOut = items.filter(i => i.category === 'one-off' && i.type === 'outflow').reduce((acc, i) => acc + i.amount, 0);

    return {
      ongoingIn: totalOngoingIn,
      ongoingOut: totalOngoingOut,
      netOngoing: totalOngoingIn - totalOngoingOut,
      oneOffIn: totalOneOffIn,
      oneOffOut: totalOneOffOut,
      netOneOff: totalOneOffIn - totalOneOffOut,
      closingBalance: lastMonth ? lastMonth.closing : (parseFloat(openingBalance) || 0)
    };
  }, [items, monthlyData, openingBalance]);

  // --- Actions ---

  const handleSaveItem = (itemData) => {
    if (itemModalConfig.editingItem) {
      setItems(prev => prev.map(item => 
        item.id === itemModalConfig.editingItem.id ? { ...itemData, id: item.id } : item
      ));
    } else {
      setItems(prev => [...prev, { ...itemData, id: Math.random().toString(36).substr(2, 9) }]);
    }
    setItemModalConfig(prev => ({ ...prev, isOpen: false, editingItem: null }));
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const openAddItemModal = (type, category) => {
    setItemModalConfig({ isOpen: true, type, category, editingItem: null });
  };

  const openEditItemModal = (item) => {
    setItemModalConfig({ 
      isOpen: true, 
      type: item.type, 
      category: item.category, 
      editingItem: item 
    });
  };

  const toggleSection = (section) => {
    setCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const addProperty = (data) => {
    const newItems = [];
    const prefix = data.name;

    // 1. One-off Acquisition Costs
    if (data.isNewPurchase) {
      newItems.push({ name: `${prefix} Purchase`, amount: parseMoney(data.value), type: 'outflow', category: 'one-off', month: 1 });
      if (data.stampDuty > 0) newItems.push({ name: `${prefix} Stamp Duty`, amount: parseMoney(data.stampDuty), type: 'outflow', category: 'one-off', month: 1 });
      if (data.legal > 0) newItems.push({ name: `${prefix} Settlement`, amount: parseMoney(data.legal), type: 'outflow', category: 'one-off', month: 1 });
      if (data.hasLoan && data.loanAmount > 0) newItems.push({ name: `${prefix} Loan`, amount: parseMoney(data.loanAmount), type: 'inflow', category: 'one-off', month: 1 });
    }

    // 2. Ongoing Items
    if (data.rentalIncome > 0) newItems.push({ name: `${prefix} Income`, amount: parseMoney(data.rentalIncome), type: 'inflow', category: 'ongoing', frequency: 'monthly' });
    if (data.ongoingExpenses > 0) newItems.push({ name: `${prefix} Expenses`, amount: parseMoney(data.ongoingExpenses), type: 'outflow', category: 'ongoing', frequency: data.expenseFreq || 'monthly' });
    if (data.hasLoan && data.loanRepayments > 0) newItems.push({ name: `${prefix} Loan Repayments`, amount: parseMoney(data.loanRepayments), type: 'outflow', category: 'ongoing', frequency: 'monthly' });

    newItems.forEach(i => setItems(prev => [...prev, { ...i, id: Math.random().toString(36).substr(2, 9) }]));
    setIsPropertyModalOpen(false);
  };

  const addPortfolio = (data) => {
    const newItems = [];
    const prefix = data.name;
    const value = parseMoney(data.value);

    if (data.isNewInvestment) {
      newItems.push({ name: `${prefix} Investment`, amount: value, type: 'outflow', category: 'one-off', month: 1 });
      if (data.costs > 0) newItems.push({ name: `${prefix} Costs`, amount: parseMoney(data.costs), type: 'outflow', category: 'one-off', month: 1 });
    }

    let yieldAmount = 0;
    // Calculate Yield based on type
    if (data.incomeType === 'fixed') {
        yieldAmount = parseMoney(data.fixedIncomeAmount);
    } else if (data.yieldPercent > 0) {
        const annualYield = value * (parseFloat(data.yieldPercent) / 100);
        if (data.paymentFreq === 'monthly') yieldAmount = annualYield / 12;
        else if (data.paymentFreq === 'quarterly') yieldAmount = annualYield / 4;
        else if (data.paymentFreq === 'annually') yieldAmount = annualYield;
        else if (data.paymentFreq === 'fortnightly') yieldAmount = annualYield / 26;
        else if (data.paymentFreq === 'weekly') yieldAmount = annualYield / 52;
        else yieldAmount = annualYield; 
    }

    if (yieldAmount > 0) {
      newItems.push({ name: `${prefix} Yield`, amount: yieldAmount, type: 'inflow', category: 'ongoing', frequency: data.paymentFreq });
    }

    if (data.ongoingExpenses > 0) {
      newItems.push({ name: `${prefix} Fees`, amount: parseMoney(data.ongoingExpenses), type: 'outflow', category: 'ongoing', frequency: data.expenseFreq });
    }

    newItems.forEach(i => setItems(prev => [...prev, { ...i, id: Math.random().toString(36).substr(2, 9) }]));
    setIsPortfolioModalOpen(false);
  };

  // Dynamic Class for Net Cash Flow Tile
  const netFlowIsPositive = totals.netOngoing >= 0;
  const netFlowCardClass = netFlowIsPositive ? theme.netPos : theme.netNeg;
  const netFlowBorderClass = netFlowIsPositive ? theme.netBorderPos : theme.netBorderNeg;
  const netFlowTextClass = netFlowIsPositive ? "text-[#27ae60]" : "text-[#ff4343]";

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans selection:bg-[#4c82fb]/30 pb-20 transition-colors duration-300`}>
      
      {/* Header */}
      <header className={`sticky top-0 z-20 backdrop-blur-md ${theme.headerBg} mb-8 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-[#4c82fb] rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20`}>
              <TrendingUp className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Cashflow<span className="text-[#4c82fb]">Forecast</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className={`p-2.5 ${theme.pillBg} rounded-xl ${theme.borderNormal} border ${theme.textMuted} hover:${theme.textMain} hover:border-[#4c82fb] transition-all`}
             >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-6">
        
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Ongoing In */}
          <Card theme={theme} className="flex flex-col justify-between relative overflow-hidden group min-h-[180px]">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
               <TrendingUp size={100} className="text-[#27ae60]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-sm font-semibold ${theme.textMuted} uppercase tracking-wider`}>Ongoing Inflows</span>
              </div>
              <div className={`text-4xl font-semibold ${theme.textMain} tracking-tight`}>{formatMoney(totals.ongoingIn)}</div>
              <div className={`text-sm ${theme.textMuted} mt-2 mb-4 font-medium`}>Per Annum</div>
              
              <div className={`mt-4 pt-4 ${theme.borderTop}`}>
                 <div>
                    <span className={`text-xs font-bold ${theme.textMuted} uppercase tracking-wider block mb-1`}>One-off Inflows</span>
                    <div className={`text-2xl font-medium ${theme.textMain}`}>{formatMoney(totals.oneOffIn)}</div>
                 </div>
              </div>
            </div>
          </Card>

          {/* Ongoing Out */}
          <Card theme={theme} className="flex flex-col justify-between relative overflow-hidden group min-h-[180px]">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
               <TrendingDown size={100} className="text-[#ff4343]" />
            </div>
             <div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-sm font-semibold ${theme.textMuted} uppercase tracking-wider`}>Ongoing Outflows</span>
              </div>
              <div className={`text-4xl font-semibold ${theme.textMain} tracking-tight`}>{formatMoney(totals.ongoingOut)}</div>
              <div className={`text-sm ${theme.textMuted} mt-2 mb-4 font-medium`}>Per Annum</div>

              <div className={`mt-4 pt-4 ${theme.borderTop}`}>
                 <div>
                    <span className={`text-xs font-bold ${theme.textMuted} uppercase tracking-wider block mb-1`}>One-off Outflows</span>
                    <div className={`text-2xl font-medium ${theme.textMain}`}>{formatMoney(totals.oneOffOut)}</div>
                 </div>
              </div>
            </div>
          </Card>

          {/* Net Position Card */}
          <div className={`${theme.card} ${netFlowCardClass} rounded-3xl p-6 ${theme.shadow} flex flex-col justify-between relative overflow-hidden min-h-[180px]`}>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className={`text-sm font-bold uppercase tracking-wider block mb-2 ${netFlowTextClass}`}>Net Ongoing Cash Flow</span>
                <div className={`text-5xl font-semibold tracking-tight ${theme.textMain}`}>{formatMoney(totals.netOngoing)}</div>
                <div className={`text-sm mt-2 font-medium opacity-80 ${netFlowTextClass}`}>Per Annum Surplus/Deficit</div>
              </div>
              <div className={`mt-4 pt-4 border-t flex justify-between items-end ${netFlowBorderClass}`}>
                <div>
                   <span className={`text-xs font-bold ${theme.textMutedInverse} uppercase tracking-wider block mb-1`}>Closing Balance</span>
                   <div className={`text-2xl font-medium ${theme.textMain}`}>{formatMoney(totals.closingBalance)}</div>
                </div>
                {netFlowIsPositive ? (
                  <BarChart2 size={32} className="text-[#27ae60]" />
                ) : (
                  <BarChart2 size={32} className="text-[#ff4343]" style={{ transform: 'scaleX(-1)' }} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Input & Actions Bar */}
        <div className={`flex flex-col md:flex-row gap-4 items-end ${theme.cardBg} p-2 rounded-[24px] border ${theme.cardBorder}`}>
           <div className="flex-1 w-full p-2">
              <Input 
                label="Opening Cash Balance" 
                prefix="$" 
                value={openingBalance} 
                onChange={(e) => setOpeningBalance(parseMoney(e.target.value))}
                placeholder="0.00"
                theme={theme}
              />
           </div>
           <div className="flex gap-3 w-full md:w-auto p-2">
             <Button className="flex-1 md:flex-none" variant="secondary" onClick={() => setIsPropertyModalOpen(true)} theme={theme}>
                <Building size={20} />
                Property
             </Button>
             <Button className="flex-1 md:flex-none" variant="secondary" onClick={() => setIsPortfolioModalOpen(true)} theme={theme}>
                <PieChart size={20} />
                Portfolio
             </Button>
           </div>
        </div>

        {/* List Management Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inflows Column */}
          <Card theme={theme} className="transition-all duration-300">
            <div 
              className="flex items-center justify-between cursor-pointer select-none group py-2"
              onClick={() => toggleSection('inflows')}
            >
              <div className="flex items-center gap-3">
                {collapsed.inflows ? <ChevronRight size={24} className={theme.textMuted} /> : <ChevronDown size={24} className={theme.textMuted} />}
                <h3 className="text-xl font-bold text-[#27ae60] flex items-center gap-2">
                  <TrendingUp size={24} /> Inflows
                </h3>
              </div>
              <span className={`text-sm font-medium ${theme.textMuted} ${theme.pillBg} px-3 py-1 rounded-full`}>{formatMoney(totals.ongoingIn + totals.oneOffIn)} / yr</span>
            </div>
            
            {!collapsed.inflows && (
              <div className="space-y-6 mt-6 animate-in fade-in slide-in-from-top-1">
                <div>
                  <div className={`text-xs font-bold ${theme.textMuted} mb-3 uppercase tracking-wider px-2`}>Ongoing Inflows</div>
                  {items.filter(i => i.type === 'inflow' && i.category === 'ongoing').map(item => (
                    <ItemRow key={item.id} item={item} onDelete={deleteItem} onEdit={openEditItemModal} theme={theme} />
                  ))}
                  <button 
                    onClick={() => openAddItemModal('inflow', 'ongoing')}
                    className={`w-full py-3 rounded-2xl border border-dashed flex items-center justify-center gap-2 font-medium mt-2 transition-all ${theme.addButton || 'border-[#293249] text-[#27ae60] hover:bg-[#27ae60]/10'}`}
                  >
                    <Plus size={18} /> Add Ongoing Inflow
                  </button>
                </div>

                <div className={`pt-6 ${theme.borderTop}`}>
                  <div className={`text-xs font-bold ${theme.textMuted} mb-3 uppercase tracking-wider px-2`}>One-off Inflows</div>
                  {items.filter(i => i.type === 'inflow' && i.category === 'one-off').map(item => (
                    <ItemRow key={item.id} item={item} onDelete={deleteItem} onEdit={openEditItemModal} theme={theme} />
                  ))}
                  <button 
                     onClick={() => openAddItemModal('inflow', 'one-off')}
                     className={`w-full py-3 rounded-2xl border border-dashed flex items-center justify-center gap-2 font-medium mt-2 transition-all ${theme.addButton || 'border-[#293249] text-[#27ae60] hover:bg-[#27ae60]/10'}`}
                  >
                    <Plus size={18} /> Add One-off Inflow
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Outflows Column */}
          <Card theme={theme} className="transition-all duration-300">
            <div 
              className="flex items-center justify-between cursor-pointer select-none group py-2"
              onClick={() => toggleSection('outflows')}
            >
              <div className="flex items-center gap-3">
                {collapsed.outflows ? <ChevronRight size={24} className={theme.textMuted} /> : <ChevronDown size={24} className={theme.textMuted} />}
                <h3 className="text-xl font-bold text-[#ff4343] flex items-center gap-2">
                  <TrendingDown size={24} /> Outflows
                </h3>
              </div>
              <span className={`text-sm font-medium ${theme.textMuted} ${theme.pillBg} px-3 py-1 rounded-full`}>{formatMoney(totals.ongoingOut + totals.oneOffOut)} / yr</span>
            </div>
            
            {!collapsed.outflows && (
              <div className="space-y-6 mt-6 animate-in fade-in slide-in-from-top-1">
                <div>
                  <div className={`text-xs font-bold ${theme.textMuted} mb-3 uppercase tracking-wider px-2`}>Ongoing Outflows</div>
                  {items.filter(i => i.type === 'outflow' && i.category === 'ongoing').map(item => (
                    <ItemRow key={item.id} item={item} onDelete={deleteItem} onEdit={openEditItemModal} theme={theme} />
                  ))}
                  <button 
                    onClick={() => openAddItemModal('outflow', 'ongoing')}
                    className={`w-full py-3 rounded-2xl border border-dashed flex items-center justify-center gap-2 font-medium mt-2 transition-all ${theme.addButtonOutflow || 'border-[#293249] text-[#ff4343] hover:bg-[#ff4343]/10'}`}
                  >
                    <Plus size={18} /> Add Ongoing Expense
                  </button>
                </div>

                <div className={`pt-6 ${theme.borderTop}`}>
                  <div className={`text-xs font-bold ${theme.textMuted} mb-3 uppercase tracking-wider px-2`}>One-off Outflows</div>
                  {items.filter(i => i.type === 'outflow' && i.category === 'one-off').map(item => (
                     <ItemRow key={item.id} item={item} onDelete={deleteItem} onEdit={openEditItemModal} theme={theme} />
                  ))}
                  <button 
                    onClick={() => openAddItemModal('outflow', 'one-off')}
                    className={`w-full py-3 rounded-2xl border border-dashed flex items-center justify-center gap-2 font-medium mt-2 transition-all ${theme.addButtonOutflow || 'border-[#293249] text-[#ff4343] hover:bg-[#ff4343]/10'}`}
                  >
                    <Plus size={18} /> Add One-off Expense
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Forecast Table */}
        <div className={`rounded-3xl border ${theme.cardBorder} p-6 shadow-xl ${theme.cardBg}`}>
          <div 
             className="flex items-center justify-between mb-4 cursor-pointer select-none transition-colors"
             onClick={() => toggleSection('forecast')}
          >
             <div className="flex items-center gap-3">
               {collapsed.forecast ? <ChevronRight size={24} className={theme.textMuted} /> : <ChevronDown size={24} className={theme.textMuted} />}
               <h3 className={`text-xl font-bold ${theme.textMain} flex items-center gap-2`}>
                 <Calendar size={24} className="text-[#4c82fb]" />
                 12-Month Forecast Breakdown
               </h3>
             </div>
          </div>
          
          {!collapsed.forecast && (
            <div className={`overflow-x-auto rounded-3xl border ${theme.cardBorder} shadow-2xl ${theme.cardBg} animate-in fade-in slide-in-from-top-2`}>
              <table className="w-full text-sm text-left">
                <thead className={`text-xs ${theme.textMuted} uppercase ${theme.tableHeader}`}>
                  <tr>
                    <th className="px-6 py-5">Month</th>
                    <th className="px-6 py-5 text-right">Opening</th>
                    <th className="px-6 py-5 text-right text-[#27ae60]">One-off In</th>
                    <th className="px-6 py-5 text-right text-[#27ae60]">Ongoing In</th>
                    <th className="px-6 py-5 text-right text-[#ff4343]">One-off Out</th>
                    <th className="px-6 py-5 text-right text-[#ff4343]">Ongoing Out</th>
                    <th className="px-6 py-5 text-right">Net Flow</th>
                    <th className="px-6 py-5 text-right">Closing</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${theme.divider}`}>
                  {monthlyData.map((row, index) => {
                    const isTopRow = index < 2; // Check if first 2 rows
                    return (
                      <tr key={row.month} className={`${theme.rowHover} transition-colors group relative hover:z-20`}>
                        <td className={`px-6 py-4 font-semibold ${theme.textMain}`}>
                          Month {row.month}
                          {/* Hover Breakdown Tooltip - Sorted */}
                          {row.breakdowns.length > 0 && (
                            <div className={`absolute left-1/2 -translate-x-1/2 ${isTopRow ? 'top-full mt-3' : 'bottom-full mb-3'} hidden group-hover:block z-50 pointer-events-none`}>
                              <div className={`${theme.cardBg} ${theme.textMain} text-xs rounded-2xl p-4 shadow-2xl border ${theme.cardBorder} min-w-[280px]`}>
                                <div className={`font-bold border-b ${theme.tableRowBorder} pb-2 mb-2 ${theme.textMuted} uppercase tracking-wider`}>Breakdown - Month {row.month}</div>
                                {row.breakdowns.map((b, i) => (
                                   <div key={i} className={`flex justify-between py-1.5 border-b ${theme.tableRowBorder} last:border-0`}>
                                     <span className="truncate max-w-[160px] font-medium">{b.name}</span>
                                     <span className={b.type === 'inflow' ? 'text-[#27ae60] font-mono' : 'text-[#ff4343] font-mono'}>
                                       {b.type === 'inflow' ? '+' : '-'}{formatMoney(b.amount)}
                                     </span>
                                   </div>
                                ))}
                              </div>
                              {/* Arrow */}
                              <div className={`w-4 h-4 ${theme.cardBg} border-r border-b ${theme.cardBorder} rotate-45 absolute left-1/2 -translate-x-1/2 ${isTopRow ? '-top-2 border-t border-l border-r-0 border-b-0' : '-bottom-2'}`}></div>
                            </div>
                          )}
                        </td>
                        <td className={`px-6 py-4 text-right ${theme.textMuted} font-mono font-medium`}>{formatMoney(row.opening)}</td>
                        <td className="px-6 py-4 text-right text-[#27ae60]/90 font-mono font-medium">{row.oneOffIn > 0 ? `+${formatMoney(row.oneOffIn)}` : '-'}</td>
                        <td className="px-6 py-4 text-right text-[#27ae60]/90 font-mono font-medium">{row.ongoingIn > 0 ? `+${formatMoney(row.ongoingIn)}` : '-'}</td>
                        <td className="px-6 py-4 text-right text-[#ff4343]/90 font-mono font-medium">{row.oneOffOut > 0 ? `-${formatMoney(row.oneOffOut)}` : '-'}</td>
                        <td className="px-6 py-4 text-right text-[#ff4343]/90 font-mono font-medium">{row.ongoingOut > 0 ? `-${formatMoney(row.ongoingOut)}` : '-'}</td>
                        <td className={`px-6 py-4 text-right font-mono font-bold ${row.netFlow >= 0 ? 'text-[#27ae60]' : 'text-[#ff4343]'}`}>
                          {formatMoney(row.netFlow)}
                        </td>
                        <td className={`px-6 py-4 text-right font-mono font-bold ${theme.textMain} ${theme.tableCellClosing}`}>
                          {formatMoney(row.closing)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>

      {/* --- Modals --- */}
      <ItemModal
        isOpen={itemModalConfig.isOpen}
        onClose={() => setItemModalConfig(p => ({...p, isOpen: false, editingItem: null}))}
        type={itemModalConfig.type}
        category={itemModalConfig.category}
        initialData={itemModalConfig.editingItem}
        onSave={handleSaveItem}
        theme={theme}
      />
      <PropertyModal isOpen={isPropertyModalOpen} onClose={() => setIsPropertyModalOpen(false)} onAdd={addProperty} theme={theme} />
      <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} onAdd={addPortfolio} theme={theme} />
    </div>
  );
}

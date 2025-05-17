interface RangeInputProps {
  min: number
  max: number
  label: string
  value: number
  onChange: (value: number) => void
}

export const RangeInput: React.FC<RangeInputProps> = ({
  min,
  max,
  label,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

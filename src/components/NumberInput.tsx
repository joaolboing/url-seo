interface NumberInput {
  value: number
  onChange: (value: number) => void
  label: string
}
export const NumberInput: React.FC<NumberInput> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

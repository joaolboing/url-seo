interface RangeInputProps {
  min: number
  max: number
  label: string
  value: number
  onChange: (value: number) => void
}

export const RangeInput: React.FC<RangeInputProps> = (
  props: RangeInputProps,
) => {
  return (
    <div>
      <label className="block text-sm font-medium">{props.label}</label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={(e) => props.onChange(Number(e.target.value))}
        />
        <input
          type="number"
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={(e) => props.onChange(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

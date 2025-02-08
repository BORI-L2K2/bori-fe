import React, { useState } from 'react'
import EmptyCheckbox from '@/public/icon/checkbox-empty.svg'
import CheckedCheckbox from '@/public/icon/checkbox-checked.svg'

interface CheckboxProps {
  id?: string
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const Checkbox = ({ id, label, checked: controlledChecked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(controlledChecked ?? false)

  const handleChange = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    console.log('🧡💛💙 영우의 로그 => newChecked', newChecked)
    onChange?.(newChecked)
  }

  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={controlledChecked ?? isChecked}
        onChange={handleChange}
        className="hidden"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer" onClick={handleChange}>
        {(controlledChecked ?? isChecked) ? <CheckedCheckbox /> : <EmptyCheckbox />}
        {label && <span className="ml-2">{label}</span>}
      </label>
    </div>
  )
}

export default Checkbox

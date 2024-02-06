import React from 'react'

type SelectProps = {
    selectedColorsPalette: string;
    handleChangeOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectComp({ selectedColorsPalette, handleChangeOptions }: SelectProps) {
    return (
        <label className="label-select">
        Pick a colors palette:
        <select
          value={selectedColorsPalette} 
          onChange={(e) => handleChangeOptions(e)}
          className="select"
        >
          <option value="yellowRed">Yellow-Red</option>
          <option value="cyanViolet">Cyan-Violet</option>
          <option value="pinkViolet">Pink-Violet</option>
          <option value="yellowCyan">Yellow-Cyan</option>
        </select>
      </label>
    )
}

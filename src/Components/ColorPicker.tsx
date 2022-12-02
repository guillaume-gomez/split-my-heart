// Code from Tile And Square https://github.com/guillaume-gomez/tile-and-square
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const COLORS = ['gray', 'red','yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
const VARIANTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

interface ColorPickerInterface {
  onChange: (value: string) => void;
}

function ColorPicker({onChange} : ColorPickerInterface) {
  const [currentColorClass, setCurrentColorClass] = useState<string>("red-800");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [iconColorClass, setIconColorClass] = useState<string>("text-white")

  function selectColor(color: string, variant: number) {
    setCurrentColorClass(color + '-' + variant);
    onChange(color + '-' + variant);
    if (variant < 500) {
      setIconColorClass("text-black");
    }
    else {
      setIconColorClass("text-white");
    }
  }

  function handleClickAway() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <div className="flex flex-row relative">
          <div onClick={()=> setIsOpen(!isOpen)} className={`cursor-pointer rounded-full ml-3 my-auto h-10 w-10 flex bg-${currentColorClass}`}>
            <svg xmlns="http://www.w3.org/2000/svg"className={`${iconColorClass} h-6 w-6 mx-auto my-auto`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          {isOpen ?
            <ClickAwayListener onClickAway={handleClickAway}>
            <div className="overflow-y-scroll h-36 border-2 border-gray-300 origin-top-right absolute right-0 top-full mt-2 rounded-md shadow-lg">
              <div className="rounded-md bg-base-200 shadow-xs p-2">
                <div className="flex">
                  {
                    COLORS.map(color => 
                      (
                        <div key={`${color}`}>
                        {
                          VARIANTS.map(variant => {
                              const colorClass = `bg-${color}-${variant}`
                              return (
                                <div
                                  onClick={()=> selectColor(color, variant)}
                                  key={colorClass}
                                  className={`cursor-pointer w-6 h-6 rounded-full mx-1 my-1 ${colorClass}`}>
                                </div>)
                            }
                          )
                        }
                        </div>
                      )
                    )
                  }
                </div>
              </div>
            </div>
            </ClickAwayListener>
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
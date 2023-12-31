import Tooltip from "../helpers/tooltip";

import stopPropagation from "../helpers/stopPropagation";

import { TOOLS_ICON } from "../constants";
import Image from "next/image";

const SIZES = {
  small: 36,
  medium: 44,
  large: 52,
};

const classes = {
  small: `w-[${SIZES.small}px] h-[${SIZES.small}px] p-2`,
  medium: `w-[${SIZES.medium}px] h-[${SIZES.medium}px] p-2`,
  large: `w-[${SIZES.large}px] h-[${SIZES.large}px] p-3`,
};

const Tool = ({ name, size }) => {
  return (
    <div className="mr-[11px] mb-1" onClick={stopPropagation}>
      <Tooltip content={name}>
        <div
          className={`${classes[size]} rounded-lg bg-gray-500 border border-purple-400 text-white hover:bg-gray-400 transition duration-300 ease-in-out`}>
          <Image
            src={`/images/${TOOLS_ICON[name]}`}
            alt={`${name} icon`}
            width={SIZES[size]}
            height={SIZES[size]}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default Tool;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ServiceTitle({ faIcon, content, faIconClass, icon }) {
  return (
    <div className="flex gap-3 md:items-center md:flex-row flex-col">
      {
        faIcon && <FontAwesomeIcon icon={faIcon} className={faIconClass} />
      }
      {icon && icon}
      <span className="text-neutral text-xl capitalize font-semibold">
        {content}
      </span>
    </div>
  );
}

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Toast from "@/components/Toast/Toast";

import "./ToastList.scss";

interface ToastData {
    id: number;
    message: string;
    type: string;
}

interface ToastListProps {
    data: ToastData[];
    position?: string | undefined;
    removeToast: (id: number) => void;
}

const ToastList: React.FC<ToastListProps> = ({ data, position, removeToast }) => {
const listRef = useRef(null);

const handleScrolling = (el: HTMLDivElement | null) => {
    const isTopPosition = ["top-left", "top-right"].includes(position || "");
    if (isTopPosition) {
        el?.scrollTo(0, el.scrollHeight);
    } else {
        el?.scrollTo(0, 0);
    }
};

useEffect(() => {
    handleScrolling(listRef.current);
}, [position, data]);

const sortedData = (position || "").includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
        ref={listRef}
      >
        {sortedData.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

ToastList.defaultProps = {
  position: "bottom-right",
};

ToastList.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  removeToast: PropTypes.func.isRequired,
};

export default ToastList;
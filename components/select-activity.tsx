'use client';
import { Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Activity {
  icon: JSX.Element;
  label: string;
}

const data: Activity[] = [
  {
    icon: <Trophy />,
    label: 'running'
  },
  {
    icon: <Trophy />,
    label: 'walking'
  },
  {
    icon: <Trophy />,
    label: 'archery'
  },
  {
    icon: <Trophy />,
    label: 'boxing'
  },
  {
    icon: <Trophy />,
    label: 'football'
  },
  {
    icon: <Trophy />,
    label: 'tennis'
  }
];

export function SelectActivity() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const handleClick = (label: string): void => {
    setSelectedLabels(prevSelectedLabels => {
      const index = prevSelectedLabels.indexOf(label);
      if (index === -1) {
        return [...prevSelectedLabels, label];
      } else {
        const newSelectedLabels = [...prevSelectedLabels];
        newSelectedLabels.splice(index, 1);
        return newSelectedLabels;
      }
    });
  };

  useEffect(() => {
    console.log(selectedLabels);
  }, [selectedLabels]);

  return (
    <div>
      <p>Select your activity</p>
      <ul className="text-black grid grid-cols-3 gap-4 mx-auto  max-w-screen-sm">
        {data.map((activity, i) => (
          <li
            onClick={() => handleClick(activity.label)}
            className={`text-black flex gap-2 p-4 cursor-pointer ${
              selectedLabels.includes(activity.label) ? 'bg-green-300' : ''
            }`}
            key={i}
          >
            {activity.icon}
            {activity.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

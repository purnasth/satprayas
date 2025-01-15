import React, { useState } from 'react';

const colors = [
  {
    label: 'Primary Color',
    classes: [
      'bg-orange-50',
      'bg-orange-100',
      'bg-orange-200',
      'bg-orange-300',
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
    ],
  },
  {
    label: 'Secondary Color',
    classes: [
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
    ],
  },
];

const fonts = [
  {
    label: 'Manding',
    class: 'font-title',
  },
  {
    label: 'Schibsted Grotesk',
    class: 'font-body',
  },
];

const tailwindColorToHexRgb = {
  'bg-orange-50': '#FFF7ED',
  'bg-orange-100': '#FFEDD5',
  'bg-orange-200': '#FED7AA',
  'bg-orange-300': '#FDBA74',
  'bg-orange-400': '#FB923C',
  'bg-orange-500': '#F97316',
  'bg-orange-600': '#EA580C',
  'bg-orange-700': '#C2410C',
  'bg-orange-800': '#9A3412',
  'bg-orange-900': '#7C2D12',
  'bg-green-50': '#F0FDF4',
  'bg-green-100': '#DCFCE7',
  'bg-green-200': '#BBF7D0',
  'bg-green-300': '#86EFAC',
  'bg-green-400': '#4ADE80',
  'bg-green-500': '#22C55E',
  'bg-green-600': '#16A34A',
  'bg-green-700': '#15803D',
  'bg-green-800': '#166534',
  'bg-green-900': '#14532D',
};

const hexToRgba = (hex, opacity) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const ColorPalette = () => {
  const [copiedText, setCopiedText] = useState('');
  const [bgColor, setBgColor] = useState('');

  const copyToClipboard = (text, colorClass) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(`Copied: ${text}`);
      setBgColor(colorClass);
      setTimeout(() => {
        setCopiedText('');
        setBgColor('');
      }, 3000); // Display for 3 seconds
    });
  };

  return (
    <>
      {copiedText && (
        <div
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-md px-4 py-2 ${bgColor}`}
        >
          <span className="text-white mix-blend-difference">{copiedText}</span>
        </div>
      )}
      <main className="container space-y-32">
        <div className="flex flex-wrap items-center gap-16">
          {colors.map((colorGroup, index) => (
            <div key={index} className="min-w-[150px]">
              <label className="mb-5 block text-center text-lg font-semibold">
                {colorGroup.label}
              </label>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {colorGroup.classes.map((colorClass, idx) => {
                  const hex = tailwindColorToHexRgb[colorClass];
                  const rgba = hexToRgba(hex, 1);
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <span
                        className={`size-32 ${colorClass} inline-block cursor-pointer border border-gray-200`}
                        onClick={() =>
                          copyToClipboard(colorClass.split('-')[1], colorClass)
                        } // Pass the color class for background color
                      ></span>
                      <span
                        className="mt-1 cursor-pointer text-xs"
                        onClick={() => copyToClipboard(hex, colorClass)}
                      >
                        {hex}
                      </span>
                      <span
                        className="cursor-pointer text-xs"
                        onClick={() => copyToClipboard(rgba, colorClass)}
                      >
                        {rgba}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div>
          {/* <h2 className="mb-8 text-7xl">Fonts</h2> */}
          <div className="flex flex-wrap items-start gap-16 text-left">
            {fonts.map((font, index) => (
              <div key={index}>
                <h3 className={`${font.class} text-5xl underline mb-8`}>{font.label}</h3>
                <p
                  className={`${font.class} text-5xl font-normal leading-snug tracking-widest`}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  1234567890
                  <br />
                  !@#$%^&*()
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ColorPalette;

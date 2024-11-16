import React from 'react';

const GridLayout = () => {
  return (
    <div
      className="grid gap-4 p-6 h-96 grid-cols-[100px_1fr_2fr] grid-rows-[50px_150px_auto]"
    >
      <div className="bg-red-500 text-white text-center p-4 rounded-lg">Item 1</div>
      <div className="bg-blue-500 text-white text-center p-4 rounded-lg row-span-3 justify-self-start">
        Item 2 (Spanning Column 2 and Rows 1 to 4)
      </div>
      <div className="bg-yellow-500 text-white text-center p-4 rounded-lg">Item 3</div>
      <div className="bg-orange-500 text-white text-center p-4 rounded-lg">Item 4</div>
      <div className="bg-green-500 text-white text-center p-4 rounded-lg self-end">Item 5</div>
      <div className="bg-purple-500 text-white text-center p-4 rounded-lg">Item 6</div>
    </div>
  );
};

export default GridLayout;

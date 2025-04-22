import React, { useState } from "react";

const initialItems = [
  { label: "Benefit Guide", value: "benefit_guide", points: 4 },
  { label: "Made for You Flyer", value: "made_for_you_flyer", points: 2 },
  { label: "Rate Sheet", value: "rate_sheet", points: 2 },
  { label: "Wallet Card", value: "wallet_card", points: 1 },
  { label: "Digital Display Ads", value: "digital_display_ads", points: 4 },
  { label: "Recurring Flyer", value: "recurring_flyer", points: 2 },
  { label: "OE Flyer", value: "oe_flyer", points: 2 },
  { label: "OE Postcard", value: "oe_postcard", points: 1 },
  { label: "OE Poster", value: "oe_poster", points: 2 },
  { label: "OE Roadmap", value: "oe_roadmap", points: 2 },
];

export default function DragAndDropBudget() {
  const [boxAItems, setBoxAItems] = useState(initialItems);
  const [boxBItems, setBoxBItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDragStart = (item) => {
    setDraggedItem(item);
    setErrorMessage(""); // Clear error on new drag
  };

  const handleDrop = (targetBox) => {
    if (!draggedItem) return;

    if (targetBox === "B") {
      if (boxBItems.find((item) => item.value === draggedItem.value)) return;

      const newTotal = totalPoints + draggedItem.points;
      if (newTotal > 12) {
        setErrorMessage("You don't have enough budget to add this item without first removing something else.");
        return;
      }

      setBoxBItems([...boxBItems, draggedItem]);
      setBoxAItems(boxAItems.filter((item) => item.value !== draggedItem.value));
      setTotalPoints(newTotal);
    } else if (targetBox === "A") {
      if (boxAItems.find((item) => item.value === draggedItem.value)) return;

      setBoxAItems([...boxAItems, draggedItem]);
      setBoxBItems(boxBItems.filter((item) => item.value !== draggedItem.value));
      setTotalPoints(totalPoints - draggedItem.points);
      setErrorMessage(""); // Clear error if user fixes budget
    }

    setDraggedItem(null);
  };

  const generateGrayColor = () => {
    const gray = Math.floor(Math.random() * 156) + 100;
    return `rgb(${gray}, ${gray}, ${gray})`;
  };

  const getTextContrast = (bgColor) => {
    const rgb = bgColor.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 128 ? "#000" : "#fff";
  };

  const renderItem = (item, isDisabled = false) => {
    const bgColor = generateGrayColor();
    const color = getTextContrast(bgColor);
    const borderColor = color;

    return (
      <div
        key={item.value}
        draggable={!isDisabled}
        onDragStart={() => handleDragStart(item)}
        className={`rounded p-3 mb-2 shadow-sm border text-sm cursor-move transition-opacity ${
          isDisabled ? "opacity-40 cursor-not-allowed" : "hover:scale-[1.02]"
        }`}
        style={{
          backgroundColor: bgColor,
          color,
          borderColor,
          borderWidth: "1px",
        }}
      >
        {item.label} ({item.points} pt{item.points > 1 ? "s" : ""})
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-semibold ${totalPoints >= 12 ? "text-red-600" : ""}`}>
          {totalPoints}/12 Points Used
        </h2>
        <button
          onClick={() => {
            setBoxAItems(initialItems);
            setBoxBItems([]);
            setTotalPoints(0);
            setErrorMessage("");
          }}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          Reset Budget
        </button>
      </div>

      {totalPoints === 12 && (
        <div className="text-red-600 text-sm mb-4">
          You've spent your allocated budget, please fill out the form to complete the process.
        </div>
      )}

      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Box A */}
        <div
          className="p-4 bg-gray-100 rounded min-h-[300px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("A")}
        >
          <h3 className="text-lg font-medium mb-2">Box A (Available Items)</h3>
          {boxAItems.map((item) =>
            renderItem(item, totalPoints === 12)
          )}
        </div>

        {/* Box B */}
        <div
          className="p-4 bg-gray-100 rounded min-h-[300px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("B")}
        >
          <h3 className="text-lg font-medium mb-2">Box B (Selected Items)</h3>
          {boxBItems.map((item) => renderItem(item))}
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function ProjectBucket() {
//     const allItems = [
//         "Benefit Guide",
//         "Made for You Flyer",
//         "Rate Sheet",
//         "Wallet Card",
//         "Digital Display Ads",
//         "Recurring Flyer",
//         "OE Flyer",
//         "OE Postcard",
//         "OE Poster",
//         "OE Roadmap",
//     ];

//     const [availableItems, setAvailableItems] = useState(allItems);
//     const [droppedItems, setDroppedItems] = useState([]);

//     const handleDragStart = (e, item, source) => {
//         e.dataTransfer.setData("item", item);
//         e.dataTransfer.setData("source", source);
//     };

//     const handleDrop = (e, target) => {
//         e.preventDefault();
//         const item = e.dataTransfer.getData("item");
//         const source = e.dataTransfer.getData("source");

//         if (source === target) return; // Prevent dropping into the same zone

//         if (target === "dropzone") {
//             // Add to drop zone if not already there
//             if (!droppedItems.some((i) => i.text === item)) {
//                 const gray = Math.floor(Math.random() * 256);
//                 const backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
//                 const textColor = gray < 128 ? "#fff" : "#000";
//                 const invertedGray = 255 - gray;
//                 const borderColor = `rgb(${invertedGray}, ${invertedGray}, ${invertedGray})`;

//                 const newItem = {
//                     text: item,
//                     backgroundColor,
//                     textColor,
//                     borderColor,
//                 };

//                 setDroppedItems((prev) => [...prev, newItem]);
//                 setAvailableItems((prev) => prev.filter((i) => i !== item));
//             }
//         } else if (target === "source") {
//             // Move back to source list
//             setAvailableItems((prev) => [...prev, item]);
//             setDroppedItems((prev) => prev.filter((i) => i.text !== item));
//         }
//     };

//     const allowDrop = (e) => e.preventDefault();

//     return (
//         <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
//             {/* Source List */}
//             <div
//                 className="container-options"
//                 onDrop={(e) => handleDrop(e, "source")}
//                 onDragOver={allowDrop}
//                 style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "10px",
//                     padding: "15px",
//                     border: "2px dashed #ccc",
//                     minHeight: "100px",
//                 }}
//             >
//                 {availableItems.map((item, index) => (
//                     <div
//                         key={index}
//                         draggable
//                         onDragStart={(e) => handleDragStart(e, item, "source")}
//                         style={{
//                             padding: "10px 15px",
//                             background: "#eee",
//                             borderRadius: "6px",
//                             cursor: "grab",
//                         }}
//                     >
//                         {item}
//                     </div>
//                 ))}
//             </div>

//             {/* Drop Zone */}
//             <div
//                 className="container-pen"
//                 onDrop={(e) => handleDrop(e, "dropzone")}
//                 onDragOver={allowDrop}
//                 style={{
//                     minHeight: "300px",
//                     border: "2px dashed #aaa",
//                     padding: "15px",
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "10px",
//                 }}
//             >
//                 {droppedItems.map((item, index) => (
//                     <div
//                         key={index}
//                         draggable
//                         onDragStart={(e) => handleDragStart(e, item.text, "dropzone")}
//                         style={{
//                             backgroundColor: item.backgroundColor,
//                             color: item.textColor,
//                             padding: "12px 18px",
//                             borderRadius: "8px",
//                             minWidth: "150px",
//                             textAlign: "center",
//                             fontWeight: "bold",
//                             boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                             border: `2px solid ${item.borderColor}`,
//                             cursor: "grab",
//                         }}
//                     >
//                         {item.text}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";

export default function ProjectBucket() {
    const allItems = [
        "Benefit Guide",
        "Made for You Flyer",
        "Rate Sheet",
        "Wallet Card",
        "Digital Display Ads",
        "Recurring Flyer",
        "OE Flyer",
        "OE Postcard",
        "OE Poster",
        "OE Roadmap",
    ];

    const [availableItems, setAvailableItems] = useState(allItems);
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDragStart = (e, item, source) => {
        e.dataTransfer.setData("item", item);
        e.dataTransfer.setData("source", source);
    };

    const handleDrop = (e, target) => {
        e.preventDefault();
        const item = e.dataTransfer.getData("item");
        const source = e.dataTransfer.getData("source");

        if (source === target) return; // Prevent dropping into the same zone

        if (target === "dropzone") {
            // Add to drop zone if not already there
            if (!droppedItems.some((i) => i.text === item)) {
                const gray = Math.floor(Math.random() * 256);
                const backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
                const textColor = gray < 128 ? "#fff" : "#000";
                const invertedGray = 255 - gray;
                const borderColor = `rgb(${invertedGray}, ${invertedGray}, ${invertedGray})`;

                const newItem = {
                    text: item,
                    backgroundColor,
                    textColor,
                    borderColor,
                };

                setDroppedItems((prev) => [...prev, newItem]);
                setAvailableItems((prev) => prev.filter((i) => i !== item));
            }
        } else if (target === "source") {
            // Move back to source list
            setAvailableItems((prev) => [...prev, item]);
            setDroppedItems((prev) => prev.filter((i) => i.text !== item));
        }
    };

    const allowDrop = (e) => e.preventDefault();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Source List */}
            <div
                className="container-options"
                onDrop={(e) => handleDrop(e, "source")}
                onDragOver={allowDrop}
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    padding: "15px",
                    border: "2px dashed #ccc",
                    minHeight: "100px",
                }}
            >
                {availableItems.map((item, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item, "source")}
                        style={{
                            padding: "10px 15px",
                            background: "#eee",
                            borderRadius: "6px",
                            cursor: "grab",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Drop Zone */}
            <div
                className="container-pen"
                onDrop={(e) => handleDrop(e, "dropzone")}
                onDragOver={allowDrop}
                style={{
                    minHeight: "300px",
                    border: "2px dashed #aaa",
                    padding: "15px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                {droppedItems.map((item, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.text, "dropzone")}
                        style={{
                            backgroundColor: item.backgroundColor,
                            color: item.textColor,
                            padding: "12px 18px",
                            borderRadius: "8px",
                            minWidth: "150px",
                            textAlign: "center",
                            fontWeight: "bold",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            border: `2px solid ${item.borderColor}`,
                            cursor: "grab",
                        }}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
}



// export default function ProjectBucket() {

//     return (
//         <>
//           <div className="contianer-options">
//             <div draggable="true">
//                 <p>Benefit Guide</p>
//             </div>
//             <div draggable="true">
//                 <p>Made for You Flyer</p>
//             </div>
//             <div draggable="true">
//                 <p>Rate Sheetr</p>
//             </div>
//             <div draggable="true">
//                 <p>Wallet Card</p>
//             </div>
//             <div draggable="true">
//                 <p>Digital Display Ads</p>
//             </div>
//             <div draggable="true">
//                 <p>Recurring Flyer</p>
//             </div>
//             <div draggable="true">
//                 <p>OE Flyer</p>
//             </div>
//             <div draggable="true">
//                 <p>OE Postcard</p>
//             </div>
//             <div draggable="true">
//                 <p>OE Poster</p>
//             </div>
//             <div draggable="true">
//                 <p>OE Roadmap</p>
//             </div>
//           </div>
          

//           <div className="container-pen"></div>
//         </>
//     )
// }
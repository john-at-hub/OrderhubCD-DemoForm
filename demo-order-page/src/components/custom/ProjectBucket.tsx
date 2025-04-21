import React, { useState } from "react";

export default function ProjectBucket() {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("text/plain", item);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Needed to allow a drop
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const item = e.dataTransfer.getData("text/plain");
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const options = [
        "Benefit Guide",
        "Made for You Flyer",
        "Rate Sheetr",
        "Wallet Card",
        "Digital Display Ads",
        "Recurring Flyer",
        "OE Flyer",
        "OE Postcard",
        "OE Poster",
        "OE Roadmap",
    ];

    return (
        <>
            <div className="container-options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, option)}
                    >
                        <p>{option}</p>
                    </div>
                ))}
            </div>

            <div
                className="container-pen"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{
                    minHeight: "200px",
                    border: "2px dashed #aaa",
                    marginTop: "20px",
                    padding: "10px"
                }}
            >
                {droppedItems.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </>
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
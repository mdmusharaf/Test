import { useEffect, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";

const CELL_HEIGHT = 30;
const CELL_WIDTH = 100;
const TOTAL_ROWS = 2000;
const TOTAL_COLUMNS = 2000;

const Cell = ({ columnIndex, rowIndex, style, data }) => {
  const { gridData, setGridData } = data;
  const key = `${rowIndex + 1},${columnIndex + 1}`;
  const value = gridData[key] || "";

  const handleChange = (e) => {
    const newValue = e.target.value;
    const updatedGridData = {
      ...gridData,
      [key]: newValue,
    };
    setGridData(updatedGridData);
  };

  return (
    <div
      style={{
        ...style,
        border: "1px solid #ddd",
      }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{
          height: "100%",
          width: "100%",
          border: "none",
          padding: "0 5px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

const App = () => {
  const [gridData, setGridData] = useState({});
  useEffect(() => {
    console.log(gridData);
  }, [gridData]);
  return (
    <div style={{ height: "auto", overflowY: "hidden" }}>
      <Grid
        columnCount={TOTAL_COLUMNS}
        columnWidth={CELL_WIDTH}
        height={window.innerHeight}
        rowCount={TOTAL_ROWS}
        rowHeight={CELL_HEIGHT}
        width={window.innerWidth}
        itemData={{ gridData, setGridData }}>
        {Cell}
      </Grid>
    </div>
  );
};

export default App;

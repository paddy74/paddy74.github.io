import Papa from "papaparse";
import { useEffect, useState } from "react";

/**
 * Reach component that parses CSV data provided as a string or fetch a CSV file from a provided path.
 *
 * - Using `csvText` (importing via Webpack) is static; the text is bundled at build time.
 * - Using `csvPath` (fetching at a URL) is dynamic; when the page loads, the client fetches the content from the URL.
 *
 * ## Usage
 *
 * ### With `csvText`
 *
 * Assuming a loader is configured so that the CSV file is imported as a String.
 *
 * ```javascript
 * import myRawCSV from "./myTable.csv";
 * import CSVTable from "@site/src/components/CSVTable";
 * <CSVTable csvText={myRawCSV} />
 * ```
 *
 * ### With `csvPath`
 *
 * ```javascript
 * import CSVTable from "@site/src/components/CSVTable";
 * <CSVTable csvPath="./myTable.csv" />
 * ```
 *
 * @param {string} csvText - Raw CSV string content
 * @param {string} csvPath - Relative or absolute path (URL) to a CSV file
 * @param {number[]} [excludeColumns=[]] - Array of zero-based column indices to exclude
 * @return {JSX.Element}
 */
export default function CSVTable({ csvText, csvPath, excludeColumns = [] }) {
  // tableData holds the parsed CSV rows as arrays of strings.
  // Example: [ ["Header1", "Header2"], ["Row1Col1", "Row1Col2"], ... ]
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // If csvText is provided, parse it directly from memory
    if (csvText) {
      // Papa Parse the plain text to an array
      const { data } = Papa.parse(csvText, { header: false });
      setTableData(filterExcludedColumns(data, excludeColumns));
    }
    // Else if csvPath is provided, fetch it during runtime
    else if (csvPath) {
      fetch(csvPath)
        // Convert the response to plain text
        .then((response) => response.text())
        .then((rawCSV) => {
          // Papa Parse the plain text to an array
          const { data } = Papa.parse(rawCSV, { header: false });
          // Update the component state with the parsed data
          setTableData(filterExcludedColumns(data, excludeColumns));
        })
        .catch((err) => {
          console.error(`Error fetching CSV at ${csvPath}:`, err);
        });
    }
  }, [csvText, csvPath]); // Re-run this effect if filePath changes

  // If no data has been loaded yet, display a loading indicator
  if (tableData.length === 0) {
    return <p>Loading CSV table...</p>;
  }

  // tableData[0] represents the first (header) row
  return (
    <table>
      <thead>
        <tr>
          {tableData[0].map((cell, idx) => (
            <th key={idx}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Removes columns from CSV rows based on a list of excluded column indices.
 *
 * @param {Array<string[]>} data - 2D array of CSV data (rows of columns).
 * @param {number[]} excludeColumns - Indices of columns to exclude.
 * @returns {Array<string[]>} - New 2D array with the specified columns removed.
 */
function filterExcludedColumns(data, excludeColumns) {
  if (!excludeColumns || excludeColumns.length === 0) {
    return data;
  }

  return data.map((row) =>
    row.filter((_, colIndex) => !excludeColumns.includes(colIndex)),
  );
}

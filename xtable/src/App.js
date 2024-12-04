import React, { useState } from "react";
import "./App.css";
const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];
function App() {
  const [tableData, setTableData] = useState(data);
  const sortByDate = ()=>{
    const sortedDate = [...tableData].sort((a,b)=>{
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if(dateB - dateA !== 0){
        return dateB - dateA;
      }

      return b.views - a.views
    })
    setTableData(sortedDate);
  }

  const sortByViews = ()=>{
    const sortedViews = [...tableData].sort((a,b)=>{
      if(b.views !== a.views){
        return b.views - a.views
      }
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB -dateA;
    })
    setTableData(sortedViews);
  }

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item,idx)=>(
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

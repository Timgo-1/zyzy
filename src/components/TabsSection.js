import React, { useState } from "react";
import { Tabs } from "antd";
import TabsContent from "./TabsContent";
import style from "../style/tabsContent.module.css";

export default function TabsSection() {
  const [data, setData] = useState([
    {
      tab: "Mountain Cabins",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Fresno", description: "California" },
            { title: "Garland", description: "Texas" },
            { title: "Arlington", description: "Virginia" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Newark", description: "New Jersey" },
            { title: "Kansas City", description: "Missouri" },
            { title: "Boise", description: "Idaho" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Mesa", description: "Arizona" },
            { title: "Modesto", description: "California" },
            { title: "Charlotte", description: "North Carolina" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Columbus", description: "Ohio" },
            { title: "Honolulu", description: "Hawaii" },
            { title: "Minneapolis", description: "Minnesota" },
          ],
        },
      ],
    },
    {
      tab: "Beach Destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Long Beach", description: "California" },
            { title: "Laredo", description: "Texas" },
            { title: "Raleigh", description: "North Carolina" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Atlanta", description: "Georgia" },
            { title: "Baltimore", description: "Maryland" },
            { title: "North Hempstead", description: "New York" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Newark", description: "New Jersey" },
            { title: "Montgomery", description: "Alabama" },
            { title: "Portland", description: "Oregon" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Norfolk", description: "Virginia" },
            { title: "Greensboro", description: "North Carolina" },
            { title: "Madison", description: "Wisconsin" },
          ],
        },
      ],
    },
    {
      tab: "Popular Destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Phoenix", description: "Arizona" },
            { title: "Wichita", description: "Kansas" },
            { title: "Bakersfield", description: "California" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Jacksonville", description: "Florida" },
            { title: "Corpus Christi", description: "Texas" },
            { title: "Rochester", description: "New York" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Chesapeake", description: "Virginia" },
            { title: "New York", description: "New York" },
            { title: "Milwaukee", description: "Wisconsin" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Tulsa", description: "Oklahoma" },
            { title: "Henderson", description: "Nevada" },
            { title: "Detroit", description: "Michigan" },
          ],
        },
      ],
    },
  ]);
  const { TabPane } = Tabs;
  return (
    <div className={style.TabsSection}>
      <h1>Inspiration for Future Getaways</h1>
      <Tabs defaultActiveKey="1">
        {data.map((item, i) => (
          <TabPane tab={item.tab} key={i + 1}>
            <TabsContent data={item.tabData} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

import { Tool } from "../api/dataType";

const initialTools: Tool[] = [

{name:"スコップ",
 img_path:"/images/tools/tool1.png",
 minLevel:5}
 ,
{name:"シャベル",
img_path:"/images/tools/tool2.png",
minLevel:10}
,
{name:"wheelbarrow",
img_path:"/images/tools/tool3.png",
minLevel:15}
,
{name:"bulldozer",
img_path:"/images/tools/tool4.png",
minLevel:20}
,
{name:"truck",
img_path:"/images/tools/tool5.png",
minLevel:25}
,
{name:"cargoship",
img_path:"/images/tools/tool6.png",
minLevel:30}
,
{name:"ufo",
img_path:"/images/tools/tool7.png",
minLevel:35}
,
{name:"GodLeft",
img_path:"/images/tools/tool1000.png",
minLevel:1000}
,
{name:"tool10000",
img_path:"/images/tools/tool10000.png",
minLevel:10000}

];

export default initialTools;
// interface Tool {
//     name: string,       // 名前
//     img_path: string,   // 画像のパス
//     minLevel: number,   // 最低レベル
// }

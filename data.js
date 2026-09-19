window.LEO_CIGAR_DATA = {
  meta: {
    title: "Leo Cigar Library",
    subtitle: "THE CIGAR ARCHIVE · 私人收藏 / 2026",
    verifiedAt: "2026-09-16",
    confirmedVarieties: 47,
    notes: "历史购买量不等于现存余量；当前余量未逐支盘点的款式统一标记为“待盘点”。"
  },
  preferences: {
    flavors: ["奶油","雪松","木质","甜感","蜂蜜感","坚果","咖啡","花香"],
    avoid: ["明显辛辣","明显苦味"],
    preferredSizes: ["Corona","Robusto","短时段小雪茄"],
    profile: "偏淡至中等，喜欢奶油、木质、雪松、甜感；补充偏好雪松更多、甜感更多、蜂蜜感、轻花香。"
  },
  inventorySummary: [
    {label:"确认收藏款式", value:"47 款", note:"旧站 v3 已核对"},
    {label:"Smokingpipes 历史", value:"16 单 / 25 SKU / 69 支", note:"2026-08-25 重新逐单核算"},
    {label:"意大利 Toscano/Toscanello", value:"14 盒", note:"榛子4、烈酒4、红原2、原味2、调甜2"},
    {label:"Drew Estate Sun Blessed", value:"10 支", note:"1盒10支，已纠正此前 CAO Solfyre 误识别"},
    {label:"舅舅赠送估值", value:"10 款", note:"旧站 v3 合计估值约 $595.60"},
    {label:"购买成本快照", value:"约 $456.56", note:"旧站 v3 口径；不含赠送估值"}
  ],
  italian: {
    goodsEUR: 96.80,
    proxyRMB: 100,
    boxes: 14,
    items: [
      {name:"Toscanello Hazelnut Raffinato", qty:4, unit:"盒"},
      {name:"Toscanello Aroma Grappa（烈酒味，暂定）", qty:4, unit:"盒"},
      {name:"Toscanello Rosso（红原，暂定）", qty:2, unit:"盒"},
      {name:"Toscano Originale（大盒，暂定）", qty:2, unit:"盒"},
      {name:"Toscano 自然甜感/调甜（大盒，系列待核）", qty:2, unit:"盒"}
    ]
  },
  rules: [
    "详情页保留购买时间、到货时间、养护时间；线上购买在没有实收日期时默认按购买/发货后约20天估算，但需明确标记“估算”。",
    "商品图优先顺序：Smokingpipes（SP）→ 70Cigars（70站）→ 品牌官网；系列图和待核型号必须单独标注，不能伪装成确认实物。",
    "每款雪茄保留全网综合评价，目标至少3个平台/来源；不能确认的数据标记“待迁移/待核实”，不编造评分。",
    "详情页底部提供相似风味雪茄，显示是否已购买/已入库；相似度按风味标签重合自动计算。",
    "保留可交互统计：产地、品牌、浓郁度、风味、来源/获得方式、尺寸/类型。",
    "购买价统一优先显示含分摊运费后的美元落地均价；赠送品使用市场估值，并明确标“赠送估值”。",
    "历史购买量与当前余量分开；现存余量只有盘点后才能作为“库存”显示。",
    "所有待确认型号、尺寸、图片和包装都必须保留“暂定/待确认”标签。"
  ],
  timeline: [
    {date:"2026-08-01", title:"第三单实购", detail:"Fireball Corona ×1；Brick House Double Connecticut Robusto ×1。"},
    {date:"2026-08-25", title:"SP 总账校正", detail:"Smokingpipes 累计16单、25个SKU、69支。"},
    {date:"2026-08-25", title:"意大利代购最终清单", detail:"Toscanello/Toscano 共14盒；货款 €96.80 + 代购费 ¥100。"},
    {date:"2026-09-06", title:"产品识别更正", detail:"原“CAO Solfyre”记录更正为 Drew Estate Isla del Sol Sun Blessed 10 Pack ×1盒（10支）。"},
    {date:"2026-09-08", title:"SP 到货", detail:"AF Exquisitos Maduro、AF Brevas Royal Maduro、Curivari BV F50 CT、Rojas Breakfast Tacos CT、Tatuaje Series P Honduras Short Robusto ×3。"},
    {date:"2026-09-09", title:"SP 两单确认", detail:"两单均记录为 2026-08-24 发货；含 AF Brevas Royale Natural、Baccarat Luchadores/Toro、AF Exquisitos Maduro、RP The Edge CT Robusto、Punch Clasico Maduro London Club、Tatuaje Reserva Petite Cazadores、Tatuaje Series P Honduras Short Robusto、Curivari BV F50 CT、Rojas Breakfast Tacos CT。"},
    {date:"2026-09-12", title:"70Cigars 包裹到货", detail:"旧站已纳入 White Heather、Hambones、Dominican Cream 等5个SKU；数量按订单/实物继续盘点。"},
    {date:"2026-09-12", title:"舅舅赠送新增", detail:"旧站 v3 已并入赠送系列并以市场估值显示；BHK 56 按用户确认“真品”记录。"},
    {date:"2026-09-16", title:"旧站 v3 核对", detail:"47款确认收藏；商品图优先SP/70；待核型号独立标注。"}
  ],
  cigars: [
    {id:1,brand:"Macanudo",name:"Court Café",origin:"多米尼加",flavors:["奶油","坚果","木质","甜感"],strength:"轻柔",price:"$5.86 / 支",stock:"待盘点"},
    {id:2,brand:"Foundation",name:"Charter Oak Connecticut Petite Corona",origin:"尼加拉瓜",flavors:["奶油","木质","香料"],strength:"中等",price:"$7.98 / 支",stock:"待盘点"},
    {id:3,brand:"Perdomo",name:"10th Anniversary Champagne Robusto",origin:"尼加拉瓜",flavors:["奶油","雪松","甜感","木质"],strength:"轻中等",price:"$11.77 / 支",stock:"待盘点"},
    {id:4,brand:"Arturo Fuente",name:"Brevas Royal Maduro",origin:"多米尼加",flavors:["木质","香料","可可","咖啡"],strength:"中等",price:"$4.55 / 支",stock:"待盘点"},
    {id:5,brand:"Fireball",name:"Corona",origin:"多米尼加",flavors:["香料","甜感","木质"],strength:"中等",price:"$6.64 / 支",stock:"待盘点",purchaseDate:"2026-08-01"},
    {id:6,brand:"Brick House",name:"Double Connecticut Robusto",origin:"尼加拉瓜",flavors:["雪松","奶油","甜感","香料"],strength:"轻中等",price:"$10.00 / 支",stock:"待盘点",purchaseDate:"2026-08-01"},
    {id:7,brand:"Zino",name:"Nicaragua Mini Cigarillos",origin:"多米尼加",flavors:["香料","木质","甜感"],strength:"中等",price:"$0.75 / 支",stock:"待盘点"},
    {id:8,brand:"Punch",name:"Elites EMS",origin:"洪都拉斯",flavors:["木质","坚果","香料","咖啡"],strength:"中浓郁",price:"$5.86 / 支",stock:"待盘点"},
    {id:9,brand:"Gran Habano",name:"Connecticut #1 Churchill",origin:"洪都拉斯",flavors:["奶油","坚果","雪松","甜感"],strength:"轻中等",price:"$10.54 / 支",stock:"待盘点",note:"旧站：系列图；订单确认 Churchill 规格"},
    {id:10,brand:"Oliva",name:"Connecticut Reserve Robusto",origin:"尼加拉瓜",flavors:["奶油","雪松","可可","甜感"],strength:"轻中等",price:"$9.20 / 支",stock:"待盘点"},
    {id:11,brand:"El Rey del Mundo",name:"Shade Grown Churchill",origin:"洪都拉斯",flavors:["坚果","木质","香料","奶油"],strength:"轻中等",price:"$7.83 / 支",stock:"待盘点"},
    {id:12,brand:"Arturo Fuente",name:"Exquisitos Maduro",origin:"多米尼加",flavors:["咖啡","可可","木质","甜感"],strength:"中等",price:"$4.18 / 支",stock:"待盘点"},
    {id:13,brand:"Baccarat",name:"Toro",origin:"洪都拉斯",flavors:["甜感","奶油","雪松","可可"],strength:"轻柔",price:"$6.58 / 支",stock:"待盘点"},
    {id:14,brand:"Perdomo",name:"20th Anniversary Connecticut Epicure E656",origin:"尼加拉瓜",flavors:["奶油","雪松","甜感","香料"],strength:"轻中等",price:"$12.89 / 支",stock:"待盘点"},
    {id:15,brand:"United Cigars",name:"Maduro Pencils",origin:"多米尼加",flavors:["咖啡","可可","木质","香料"],strength:"中等",price:"$4.13 / 支",stock:"待盘点"},
    {id:16,brand:"Arturo Fuente",name:"Brevas Royale Natural",origin:"多米尼加",flavors:["木质","香料","坚果"],strength:"中等",price:"$4.53 / 支",stock:"待盘点"},
    {id:17,brand:"Drew Estate",name:"Isla del Sol Sun Blessed · Breve",origin:"尼加拉瓜",flavors:["待核实"],strength:"待核实",price:"$1.93 / 支",stock:"待盘点",knownQty:"10支 / 1盒",note:"2026-09-06 更正：不是 CAO Solfyre"},
    {id:18,brand:"Tatuaje",name:"Series P Honduras Short Robusto",origin:"洪都拉斯",flavors:["待核实"],strength:"待核实",price:"$4.83 / 支",stock:"待盘点",knownQty:"至少3支记录",note:"2026-09-08 到货记录含×3"},
    {id:19,brand:"Punch",name:"Clasico Maduro London Club",origin:"洪都拉斯",flavors:["咖啡","木质","甜感","香料"],strength:"中浓郁",price:"$5.22 / 支",stock:"待盘点"},
    {id:20,brand:"Tatuaje",name:"Reserva Petite Cazadores",origin:"尼加拉瓜",flavors:["咖啡","可可","香料","木质"],strength:"中浓郁",price:"$5.37 / 支",stock:"待盘点"},
    {id:21,brand:"Curivari",name:"Buenaventura Favoritos 50 Connecticut",origin:"尼加拉瓜",flavors:["待核实"],strength:"中浓郁",price:"$6.02 / 支",stock:"待盘点"},
    {id:22,brand:"Baccarat",name:"Luchadores",origin:"洪都拉斯",flavors:["甜感","奶油","雪松","坚果"],strength:"轻柔",price:"$6.31 / 支",stock:"待盘点"},
    {id:23,brand:"Montesino",name:"Napoleon Grande Natural",origin:"多米尼加",flavors:["奶油","雪松","木质","坚果"],strength:"轻柔",price:"$5.74 / 支",stock:"待盘点",note:"70站 Natural 系列图；订单规格 7½×46"},
    {id:24,brand:"Alec Bradley",name:"Project 40 Toro · 06.52",origin:"尼加拉瓜",flavors:["坚果","木质","咖啡","甜感"],strength:"中等",price:"$7.27 / 支",stock:"待盘点"},
    {id:25,brand:"Rojas",name:"Breakfast Tacos Connecticut",origin:"尼加拉瓜",flavors:["奶油","坚果","咖啡","香料"],strength:"中等",price:"$7.07 / 支",stock:"待盘点"},
    {id:26,brand:"Joya de Nicaragua",name:"Joya Black Cigarillos · 10支装",origin:"尼加拉瓜",flavors:["可可","咖啡","木质","香料"],strength:"中浓郁",price:"$1.85 / 支",stock:"待盘点",knownQty:"10支装订单记录",purchaseDate:"2026-09-01",shipDate:"2026-09-02",note:"订单 No. 3934946；订单总额 $18.47"},
    {id:27,brand:"Joya de Nicaragua",name:"Joya Red Cigarillos · 10支装",origin:"尼加拉瓜",flavors:["雪松","坚果","香料","甜感"],strength:"中等",price:"$1.85 / 支",stock:"待盘点"},
    {id:28,brand:"White Heather",name:"Torpedo",origin:"尼加拉瓜",flavors:["奶油"],strength:"浓郁",price:"$4.31 / 支",stock:"待盘点",arrivalDate:"2026-09-12",note:"70Cigars 包裹"},
    {id:29,brand:"Hambones",name:"Habano Torpedo",origin:"洪都拉斯",flavors:["木质","香料","甜感"],strength:"中等",price:"$3.82 / 支",stock:"待盘点",arrivalDate:"2026-09-12",note:"70Cigars 包裹"},
    {id:30,brand:"Hambones",name:"Connecticut Toro",origin:"洪都拉斯",flavors:["奶油","雪松","坚果","甜感"],strength:"轻柔",price:"$3.82 / 支",stock:"待盘点",arrivalDate:"2026-09-12",note:"70Cigars 包裹"},
    {id:31,brand:"Dominican Cream",name:"Churchill",origin:"多米尼加",flavors:["奶油","雪松","甜感","香料"],strength:"轻柔",price:"$4.38 / 支",stock:"待盘点",arrivalDate:"2026-09-12",note:"70Cigars 包裹"},
    {id:32,brand:"Dominican Cream",name:"Robusto",origin:"多米尼加",flavors:["奶油","甜感","花香"],strength:"轻柔",price:"$4.08 / 支",stock:"待盘点",arrivalDate:"2026-09-12",note:"70Cigars 包裹"},
    {id:33,brand:"Plasencia",name:"Reserva Original Robusto",origin:"尼加拉瓜",flavors:["奶油","雪松","甜感","坚果"],strength:"中等",price:"赠送估值 $10.99 / 支",stock:"待盘点",source:"赠送"},
    {id:34,brand:"Rocky Patel",name:"Vintage 1990",origin:"洪都拉斯",flavors:["木质"],strength:"中等",price:"赠送估值 $12.00 / 支",stock:"待盘点",source:"赠送",note:"具体尺寸待核对"},
    {id:35,brand:"Gran Habano",name:"Corojo No.5",origin:"洪都拉斯",flavors:["木质","香料","咖啡","甜感"],strength:"浓郁",price:"赠送估值 $8.50 / 支",stock:"待盘点",source:"赠送",note:"尺寸待确认"},
    {id:36,brand:"Sancho Panza",name:"Double Maduro",origin:"洪都拉斯",flavors:["咖啡","可可","香料","甜感"],strength:"中浓郁",price:"赠送估值 $7.49 / 支",stock:"待盘点",source:"赠送",note:"尺寸待确认"},
    {id:37,brand:"José L. Piedra",name:"Cazadores",origin:"古巴",flavors:["木质","咖啡","甜感","香料"],strength:"中等",price:"赠送估值 $5.70 / 支",retailPrice:"£13.35 / 支",retailSource:"GQ Tobaccos",retailUrl:"https://gqtobaccos.com/cigars/jose-l-piedra-cazadores-single-cigar/",retailScreenshotDate:"2026-09-19",stock:"待盘点",source:"赠送"},
    {id:38,brand:"Perdomo",name:"Habano Bourbon Barrel-Aged（疑似）",origin:"尼加拉瓜",flavors:["咖啡","可可","甜感","香料"],strength:"中浓郁",price:"赠送估值 $10.42 / 支",stock:"待盘点",source:"赠送",note:"版本与尺寸待实物确认"},
    {id:39,brand:"E.P. Carrillo",name:"New Wave Connecticut（尺寸待确认）",origin:"多米尼加",flavors:["奶油","雪松","坚果","木质"],strength:"轻中等",price:"赠送估值 $8.00 / 支",stock:"待盘点",source:"赠送"},
    {id:40,brand:"Cohiba",name:"Behike BHK 56",origin:"古巴",flavors:["可可","咖啡","木质","香料"],strength:"中浓郁",price:"赠送估值 $500.00 / 支",stock:"待盘点",source:"赠送",note:"按用户确认记录为真品"},
    {id:41,brand:"H. Upmann",name:"Coronas Major A/T（暂定）",origin:"古巴",flavors:["雪松","坚果","奶油","木质"],strength:"轻中等",price:"赠送估值 $20.00 / 支",stock:"待盘点",source:"赠送",note:"按实物外观暂定；铝管参考"},
    {id:42,brand:"Alec Bradley",name:"Prensado（尺寸待确认）",origin:"洪都拉斯",flavors:["咖啡","可可","木质","香料"],strength:"中浓郁",price:"赠送估值 $12.50 / 支",stock:"待盘点",source:"赠送"},
    {id:43,brand:"Toscanello",name:"Hazelnut Raffinato · 小盒",origin:"意大利",flavors:["坚果","甜感","咖啡","木质"],strength:"轻中等",price:"$9.04 / 盒",stock:"4盒历史购买",knownQty:"4盒",note:"意大利包装待核"},
    {id:44,brand:"Toscanello",name:"Aroma Grappa · 小盒（暂定）",origin:"意大利",flavors:["甜感","木质","香料"],strength:"中等",price:"$9.04 / 盒",stock:"4盒历史购买",knownQty:"4盒",note:"最可能对应“烈酒味”，仍需包装确认"},
    {id:45,brand:"Toscanello",name:"Rosso · 小盒（暂定）",origin:"意大利",flavors:["咖啡","甜感","木质"],strength:"中等",price:"$9.05 / 盒",stock:"2盒历史购买",knownQty:"2盒",note:"“红原”仍需实物确认"},
    {id:46,brand:"Toscano",name:"Originale · 大盒（暂定）",origin:"意大利",flavors:["木质","咖啡","香料"],strength:"浓郁",price:"$9.05 / 盒",stock:"2盒历史购买",knownQty:"2盒",note:"具体包装待核"},
    {id:47,brand:"Toscano",name:"自然甜感 · 大盒（系列待核）",origin:"意大利",flavors:["甜感","木质","香料","咖啡"],strength:"中等",price:"$9.05 / 盒",stock:"2盒历史购买",knownQty:"2盒",note:"旧站使用 Garibaldi 甜润风格参考图，不代表确认型号"}
  ]
};

// Product images restored from public retailer/brand listings. Series references are explicitly labeled.
window.LEO_CIGAR_IMAGES = {
  "1": {
    "url": "https://mybevstore.com/cdn/shop/files/MyBev-Product-Images-Cigars-Macanudo-Court-Cafe.png?v=1701962738&width=1200",
    "source": "My Bev Store",
    "status": "型号图"
  },
  "2": {
    "url": "https://www.turmeaus.co.uk/images/CharterOakCTPetitCorona8%281%29.JPG",
    "source": "Turmeaus",
    "status": "型号图"
  },
  "3": {
    "url": "https://img.thompsoncigar.com/products/iris/bgwhite/wgb-pm-1007.png?v=214323",
    "source": "Thompson Cigar",
    "status": "型号图"
  },
  "4": {
    "url": "https://mikescigars.com/media/catalog/product/cache/06e4c451197453e67f718945f1975457/image/12056db91/arturo-fuente-breva-royal.jpg",
    "source": "Mike's Cigars",
    "status": "型号图"
  },
  "5": {
    "url": "https://whiskeycaviar.com/cdn/shop/files/fireballcigars.jpg?v=1708191692",
    "source": "Whiskey Caviar",
    "status": "型号图"
  },
  "6": {
    "url": "https://images.neptunecigar.com/prodimgl/220508_0.jpg?dummy=125419793",
    "source": "Neptune Cigar",
    "status": "型号图"
  },
  "7": {
    "url": "https://www.rauchr.de/bilder/detail/big2048/66_48652_108458.jpg",
    "source": "Rauchr",
    "status": "型号图"
  },
  "8": {
    "url": "https://cdn11.bigcommerce.com/s-o6xcpm5lql/images/stencil/1280x1280/products/3265/14031/punch-elite-cigars-25-ct-box__54286.1761000003.jpg?c=2",
    "source": "Buitrago Cigars",
    "status": "系列/规格参考图"
  },
  "9": {
    "url": "https://www.thompsoncigar.com/dw/image/v2/BKCV_PRD/on/demandware.static/-/Sites-stg-master-catalog/default/dw4e448c80/TC/GAJ-PM-1034_Open.png?sh=800&sw=800",
    "source": "Thompson Cigar",
    "status": "系列参考图"
  },
  "10": {
    "url": "https://online-cigars.com/media/catalog/product/cache/7420fd2433b126a67d332586266f4e0d/o/l/oliva_connecticut_reserve_robusto_cigar-box.jpg",
    "source": "Online Cigars",
    "status": "型号图"
  },
  "11": {
    "url": "https://images.famous-smoke.com/image/upload/c_lpad%2Cdpr_2.0%2Cf_auto%2Ch_565%2Cq_auto%2Cw_565/v1/skupics/ems/CI-EMS-CHUN-20-BOX.jpg?_i=AB",
    "source": "Famous Smoke",
    "status": "型号图"
  },
  "12": {
    "url": "https://d2j6dbq0eux0bg.cloudfront.net/images/26385243/3072752012.jpg",
    "source": "Community Cigar",
    "status": "型号图"
  },
  "13": {
    "url": "https://www.cigarsindia.in/cdn/shop/products/Baccarat_Toro_Box_of_25_Cigars_India_Cigars_Online_India_500x_crop_center.jpg?v=1527288191",
    "source": "Cigars India",
    "status": "型号图"
  },
  "14": {
    "url": "https://cdn11.bigcommerce.com/s-bxgh7p/images/stencil/1280x1280/products/5396/15394/Perdomo_20_Anniversario_Epicure_Connecticut__95538.1641582437.jpg?c=2",
    "source": "Cigars Crafters",
    "status": "型号图"
  },
  "15": {
    "url": "https://c647068.ssl.cf2.rackcdn.com/products/007-965-0019.5957.jpg",
    "source": "Smokingpipes CDN",
    "status": "型号图"
  },
  "16": {
    "url": "https://images.squarespace-cdn.com/content/v1/58095566bebafb6ff02a719c/1612924657660-3DQJSZQ5XSX7F4OKJ43F/fuente%2Bbrevas.png",
    "source": "Smoke Ring Cigars",
    "status": "型号图"
  },
  "17": {
    "url": "https://mikescigars.com/media/catalog/product/cache/06e4c451197453e67f718945f1975457/image/14647e4a7/isla-del-sol-robusto.jpg",
    "source": "Mike's Cigars",
    "status": "系列参考图"
  },
  "18": {
    "url": "https://img.cigarsinternational.com/product/iris/bgwhite/wd500/3sp-pm-1003_closed.png?format=jpg&quality=84&v=614744",
    "source": "Cigars International",
    "status": "型号/系列图"
  },
  "19": {
    "url": "https://c647068.ssl.cf2.rackcdn.com/products/007-023-0096.9995.jpg",
    "source": "Smokingpipes CDN",
    "status": "型号图"
  },
  "20": {
    "url": "https://cdn11.bigcommerce.com/s-2ooutu2zpl/products/37999/images/40905/Tatuaje-Brown-Petite-Cazadores-Reserva__26698.1509506828.500.750.jpg?c=2",
    "source": "Atlantic Cigar",
    "status": "型号图"
  },
  "21": {
    "url": "https://images.neptunecigar.com/prodimgo/394435_0.jpg?dummy=115932190",
    "source": "Neptune Cigar",
    "status": "型号图"
  },
  "22": {
    "url": "https://cdn11.bigcommerce.com/s-bxgh7p/images/stencil/1280x1280/products/6052/22530/Baccarat_The_Game_Luchadores_Open_Box__93914.1701994039.png?c=2",
    "source": "Cigars Crafters",
    "status": "型号图"
  },
  "23": {
    "url": "https://cdn11.bigcommerce.com/s-3962a/images/stencil/1280w/products/25620/22287/AF_Montesino_Natural__54229.1634183891.jpg?c=2",
    "source": "Cuenca Cigars",
    "status": "Natural 系列参考图"
  },
  "24": {
    "url": "https://cdn11.bigcommerce.com/s-2ooutu2zpl/images/stencil/2048x2048/products/42185/51030/ABC-01-1026E-BX__44888.1630422269.jpg?c=2",
    "source": "Atlantic Cigar",
    "status": "型号图"
  },
  "25": {
    "url": "https://www.noblego.de/media/catalog/product/cache/2/image/650x/2c358c4eafc8ea179ce42cd6999e815d/r/o/rojas_breakfast_tacos_connecticut_petit_salomon_05.jpg",
    "source": "Noblego",
    "status": "系列参考图"
  },
  "26": {
    "url": "https://www.thompsoncigar.com/dw/image/v2/BKCV_PRD/on/demandware.static/-/Sites-stg-master-catalog/default/dw677833c7/TC/j2i-pm-1012.png?sh=800&sw=800",
    "source": "Thompson Cigar",
    "status": "型号图"
  },
  "27": {
    "url": "https://www.dymka-doutniky.cz/fotky78146/facebook/doutniky-joya-de-nicaragua-red-cigarillos-10ks-dymka-doutniky-cz-.jpg",
    "source": "Dymka",
    "status": "型号图"
  },
  "28": {
    "url": "https://www.cigarsinternational.com/dw/image/v2/BKCV_PRD/on/demandware.static/-/Sites-stg-master-catalog/default/dwdd96c4e5/CI/JC1-PM-1001.png?sh=800&sw=800",
    "source": "Cigars International",
    "status": "型号图"
  },
  "29": {
    "url": "https://70cigars.com/cdn/shop/files/photo_2026-02-19_19-36-05.jpg?v=1771547782&width=1080",
    "source": "70Cigars",
    "status": "Habano 系列参考图"
  },
  "30": {
    "url": "https://70cigars.com/cdn/shop/files/photo_2026-02-19_19-37-19.jpg?v=1771547861&width=720",
    "source": "70Cigars",
    "status": "Connecticut 系列参考图"
  },
  "31": {
    "url": "https://70cigars.com/cdn/shop/files/Dominican_Cream_Churchill-110309_1.jpg?v=1761671271&width=1000",
    "source": "70Cigars",
    "status": "型号图"
  },
  "32": {
    "url": "https://70cigars.com/cdn/shop/files/Dominican_Cream_Robusto-110539.jpg?v=1761671717",
    "source": "70Cigars",
    "status": "型号图"
  },
  "33": {
    "url": "https://www.dalayzigarren.de/media/image/product/7519/lg/plasencia-reserva-original-robusto.jpg",
    "source": "Dalay Zigarren",
    "status": "型号图"
  },
  "34": {
    "url": "https://www.holts.com/media/categoryimage/r/o/rocky-patel-vintage-1990_2.png",
    "source": "Holt's",
    "status": "系列图"
  },
  "35": {
    "url": "https://www.cigar.com/dw/image/v2/BKCV_PRD/on/demandware.static/-/Sites-stg-master-catalog/default/dwb9170cb5/CCOM/CS-GAY.png?sh=800&sw=800",
    "source": "CIGAR.com",
    "status": "系列参考图"
  },
  "36": {
    "url": "https://www.thompsoncigar.com/dw/image/v2/BKCV_PRD/on/demandware.static/-/Sites-stg-master-catalog/default/dwca214f9c/TC/SH7-PM-1000.png?sh=800&sw=800",
    "source": "Thompson Cigar",
    "status": "系列图"
  },
  "37": {
    "url": "https://cdn11.bigcommerce.com/s-6ihhxuk/images/stencil/1280x1280/products/13948/67451/Jose_L_Piedra_Cazadores_2__02331__32715__08680.1728566924.JPG?c=2",
    "source": "GQ Tobaccos",
    "status": "型号图"
  },
  "38": {
    "url": "https://cdn11.bigcommerce.com/s-1a5b5/products/9312/images/13423/perdomo_habanobba_sg_gordo_wm_bx__11219.1446357584.600.600.jpg?c=2",
    "source": "Cigar King",
    "status": "系列参考图"
  },
  "39": {
    "url": "https://images.famous-smoke.com/image/upload/c_lpad%2Cdpr_2.0%2Cf_auto%2Cq_auto/v1/skupics/enw/ci-enw-brin.jpg?_i=AB",
    "source": "Famous Smoke",
    "status": "系列图"
  },
  "40": {
    "url": "https://cubancigaronline.com/wp-content/uploads/2017/08/2.jpg",
    "source": "Cuban Cigar Online",
    "status": "型号参考图"
  },
  "41": {
    "url": "https://lacasadelhabanocdmx.com/cdn/shop/files/h_upmann-coronas_major-anilla_1024x.jpg?v=1744083776",
    "source": "La Casa del Habano CDMX",
    "status": "型号参考图"
  },
  "42": {
    "url": "https://cdn.shopify.com/s/files/1/0726/6071/3769/articles/PRB-PM-1028.png?v=1679156912",
    "source": "CigarHaus",
    "status": "系列图"
  },
  "43": {
    "url": "https://italiansmokes.com/cdn/shop/files/ITAS305-08-Image-A_800x800_8468bf51-0c92-4fc9-9205-ce08ee4f2009.jpg?v=1731430090",
    "source": "ItalianSmokes",
    "status": "型号图"
  },
  "44": {
    "url": "https://leafaffair.com/cdn/shop/products/Aroma_Grappa_Box_grande.jpg?v=1532457651",
    "source": "The Leaf Affair",
    "status": "型号图"
  },
  "45": {
    "url": "https://tabak-sommer.de/media/3a/ce/8a/1722036590/toscanello-rosso.png?ts=1730201964",
    "source": "Tabak Sommer",
    "status": "型号图"
  },
  "46": {
    "url": "https://cdn11.bigcommerce.com/s-mdpjfu7lb2/images/stencil/original/products/10442/8977/TOSC_ORIGI_N_BX-open__66431.1742152965.png?c=1",
    "source": "Tobacconist of Greenwich",
    "status": "型号图"
  },
  "47": {
    "url": "https://cdn.awsli.com.br/2500x2500/2710/2710271/produto/399891375/cx-16-h8g95cg8n0.png",
    "source": "Mata Fina",
    "status": "Garibaldi 风格参考图"
  }
};
window.LEO_CIGAR_DATA.cigars.forEach(c=>Object.assign(c, window.LEO_CIGAR_IMAGES[c.id]||{}));


var location_array =[{ 
    name:"台北館前路店",
    img_src:"./img/館前店.jpg",
    content:` 地址：<br>台北市中正區館前路8號2樓
            <br>電話：02-2361-2638
            <br>平日 11:00-22:30 <br>
            假日 10:30-22:30`,
    map_link:"https://www.google.co.jp/maps/place/%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%BC%E5%AF%BF%E5%8F%B8%E9%83%8E+%E5%8F%B0%E6%B9%BE%E6%97%97%E8%89%A6%E5%BA%97+No.+8%E8%99%9F,+Guanqian+Road,+Zhongzheng+District,+Taipei+City,+%E5%8F%B0%E6%B9%BE+100/@25.0458136,121.5147159,16z/data=!4m2!3m1!1s0x3442a9284d5b69e1:0x67a6f99dd1a2f2b5"
},
{
    name:"台北中華路店",
    img_src:"./img/中華店.jpg",
    content:` 地址：<br>台北市中正區中華路一段41號1樓
            <br>電話：02-2361-2306
            <br>平日 11:00-22:15 <br>
            假日 10:30-22:15`,
    map_link:"https://www.google.co.jp/maps/place/%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%BC%E5%AF%BF%E5%8F%B8%E9%83%8E+%E5%8F%B0%E5%8C%97%E4%B8%AD%E8%8F%AF%E5%BA%97/@25.0448633,121.507204,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a953a4f82e67:0xf2855987b3da8a02!8m2!3d25.0448632!4d121.5093927"
},
{
    name:"台北民權建國店",
    img_src:"./img/民權建國.jpg",
    content:` 地址：<br>台北市中山區民權東路三段2號1樓
            <br>電話：02-2516-3386
            <br>平日 11:00~22:30 <br>
            假日 10:30~22:30 `,
    map_link:"https://www.google.com/maps/place/%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%BC%E5%A3%BD%E5%8F%B8%E9%83%8E+%E5%8F%B0%E5%8C%97%E6%B0%91%E6%AC%8A%E5%BB%BA%E5%9C%8B%E5%BA%97/@25.0622462,121.5363906,17z/data=!4m5!3m4!1s0x3442ab82886b55fb:0xb1d11b63f956766f!8m2!3d25.0621351!4d121.5375271?shorturl=1"
},
{
    name:"新北中和環球店",
    img_src:"./img/新北中和.jpg",
    content:`  地址：<br>新北市中和區中山路三段122號 地下2樓
            <br>電話：02-2221-2010
            <br>平日 11:00-22:00  <br>
            假日 10:30-22:00 `,
    map_link:"https://www.google.com/maps/place/%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%BC%E5%A3%BD%E5%8F%B8%E9%83%8E+%E6%96%B0%E5%8C%97%E4%B8%AD%E5%92%8C%E7%92%B0%E7%90%83%E5%BA%97/@25.0066732,121.4725898,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x8b9f5d69d50fa44b!8m2!3d25.0066732!4d121.4747785?shorturl=1"
},
{
    name:"台中黎明市政南店",
    img_src:"./img/台中黎民.jpg",
    content:`   地址：<br>台中市南屯區市政南一路158號
            <br>電話：04-2258-3007
            <br>平日 11:00~22:30  <br>
            假日 10:30~22:30 `,
    map_link:"https://www.google.com/maps/place/スシロー壽司郎+台中黎明市政南店/@24.1583943,120.5641428,12z/data=!4m5!3m4!1s0x34693d198e04fb0b:0xa8e92093982d8589!8m2!3d24.1584103!4d120.6341832?shorturl=1"
},
{
    name:"台中福科路店",
    img_src:"./img/福科.jpg",
    content:`   地址：<br>台中市西屯區福科路8號                    
            <br>電話：04-2706-9096
            <br>平日 11:00-22:30  <br>
            假日 10:30-22:30`,
    map_link:"https://www.google.com/maps/place/スシロー壽司郎+台中福科路店/@24.1792217,120.4972277,11z/data=!4m5!3m4!1s0x346917f5bd471fe1:0x2e050372dbae72cc!8m2!3d24.1792217!4d120.6373034?shorturl=1"
},
{
    name:"台南南紡店",
    img_src:"./img/南舫.jpg",
    content:` 地址：<br>台南市東區中華東路一段366號2樓
            <br>電話：06-209-0176<br>
            每日 11:00-22:00 `,
    map_link:"https://www.google.com/maps/place/%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%BC%E5%A3%BD%E5%8F%B8%E9%83%8E+%E5%8F%B0%E5%8D%97%E5%8D%97%E7%B4%A1%E5%BA%97/@22.7941277,120.1065315,11z/data=!4m5!3m4!1s0x0:0x2d560c3f0c3170d7!8m2!3d22.9914641!4d120.2329159?shorturl=1"
},
{
    name:"台南安平店",
    img_src:"./img/安平.jpg",
    content:` 地址：<br>台南市安平區中華西路二段317號
            <br>電話：06-298-0602
            <br>平日 11:00-22:00  <br>
            假日 10:30-22:00 `,
    map_link:"https://www.google.com/maps/place/スシロー壽司郎+台南安平店/@22.7941277,120.1065315,11z/data=!4m5!3m4!1s0x0:0x2f5c982f231b20a5!8m2!3d22.9928468!4d120.1866102?shorturl=1"
},
{
    name:"高雄夢時代店",
    img_src:"./img/夢時代.jpg",
    content:`地址：<br>高雄市前鎮區中華五路789號 藍鯨館6樓
            <br>電話：07-812-6755
            <br>平日 11:00-21:30 <br> 
            假日 10:30-21:30`,
    map_link:"http://www.sushiroglobalholdings.com/taiwan/storelist/ss001/"
}] 
location_array.forEach((location,index) =>{
    
    
    var name = location.name
    var img = location.img_src
    var content = location.content
    var map = location.map_link
    
    
   
    var location_cards = document.querySelector(".location_cards")
    
    location_cards.innerHTML += `<div class="lct_card">
    <img class="lct_card-image" src=${img} alt=${name}>
    <div class="lct_card-title">
        <a href="##" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
        </a>
        <h4>
            ${name}
        </h4>
    </div>
    <div class="lct_card-flap flap1">
        <div class="lct_card-description">
            ${content}
        </div>
        <div class="lct_card-flap flap2">
            <div class="lct_card-actions">
                <a href=${map}
                    class="btn" target="_blank">開啟地圖</a>
            </div>
        </div>
    </div>
</div>`

})


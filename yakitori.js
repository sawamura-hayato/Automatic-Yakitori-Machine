class Yakitori{
    constructor(id,part,onePhrase,url){
        this.id = id;
        this.part = part;
        this.onePhrase = onePhrase;
        this.url = url;
    }
}

const yakitoriList = [
    new Yakitori(0,"せせり","脂身が多くジューシー","images/83713C1B-388F-41EC-A017-2D35EDB5873B.png"),
    new Yakitori(1,"むね","鶏の翼の付け根から肩にかけての部位","images//EAA174C6-1B31-4572-B26A-D132577A89C0.png"),
    new Yakitori(2,"ささみ","パサパサ界のパサパサ","images/BFEEF53A-23AA-4F00-8FB7-1D24335AB2DD.png"),
    new Yakitori(3,"玉ひも","とりの卵管と卵巣の部位","images/D4484259-C04F-4743-AAA5-32B38C70AD8D.png"),
    new Yakitori(4,"肝","とりの肝臓","images/27588076-A6B5-48CC-9007-60013FA3AE9F.png"),
    new Yakitori(5,"ズリ(砂肝)","とりにしかない内臓（諸説あり）","images/08C54EFD-B2A7-4CD3-B7D6-2724B7BD5C47.png"),
    new Yakitori(6,"背肝","腎臓界の希少部位","images/2EFA174E-DC0C-424A-B6E9-EC9C6684D752.png"),
    new Yakitori(7,"ハート","別名 ハツ、ココロ","images/79BD77DA-3532-42D6-A94E-6AD1BA10A4A1.png"),
    new Yakitori(8,"はらみ","噛めば噛むほど旨味が出る","images/CC303505-4B0B-4334-9799-F6E4EDA140B8.png"),
    new Yakitori(9,"ソリレス","もも肉一枚に一粒のみ","images/86BB1F5F-A124-40F2-8B7B-BF258C942C23.png"),
    new Yakitori(10,"もも","焼き鳥界のTop of the head","images/7D7BFC8F-7215-43D8-B7C3-235E49452444.png"),
    new Yakitori(11,"ぼんじり","焼き鳥界のプリ王","images/9F2BE41C-373F-4514-8F46-14A3247CC845.png"),
    new Yakitori(12,"かわ","焼き鳥界のパリ王","images/22D1543F-D5B1-41AF-A2D9-8B18A87BD0D5.png"),
    new Yakitori(13,"つなぎ","別名 パイプ こころのこり ハシモト","images/99B0503C-A6D4-4991-ACF9-78B1889A471B.png"),
    new Yakitori(14,"手羽先","焼き鳥界のウマーバ","images/075A46E4-8CB4-437D-B33E-222DDCA34906.png"),
]

class Machine{
    static createHTML(){
        // HTMLへ
        let  target = document.getElementById("target");
        target.classList.add("d-flex" ,"bg-orenge","flex-column","align-items-center")
        
        // main
        let mainDiv = Machine.createMainHTML();
        target.append(mainDiv);
    }
    
    static createMainHTML(){
        let mainDiv = document.createElement("div");
        mainDiv.id = "Yakitori"
        mainDiv.classList.add("d-flex","justify-content-center","flex-wrap","m-5")
        
        // 大枠
        let box = document.createElement("div");
        box.classList.add("col-12","d-flex","flex-column","bg-white","border");
        mainDiv.append(box);

        // タイトル
        let titleDiv = Machine.createTitleHTML();
        box.append(titleDiv)

        // flex box
        let flexDiv = document.createElement("div");
        flexDiv.classList.add("d-flex")
        box.append(flexDiv)
         
        // 焼き鳥の部位(画像)
        let leftDiv = Machine.createLHTML();
        flexDiv.append(leftDiv);

        // 焼き鳥の説明と焼き鳥のスライド画像
        let rightDiv = Machine.createRHTML();
        flexDiv.append(rightDiv);
       
        return mainDiv;
    }

    // タイトル作成と操作説明
    static createTitleHTML(){
        let title = document.createElement("h2");
        title.classList.add("text-center","py-3","anek-font")
        title.innerHTML = "操作説明(click)"
        title.addEventListener("click",function(){
            alert("鶏の各部位に番号があります。番号は1~14です。\nキーボードの操作どうりに押していただくと各部位が出力されます。\n\nキーボード操作\n数字->番号を入力\nEnter->番号を出力\nBackspace->数字を消す")
        })
        return title;
    }

    // 鶏の部位(画像)
    static createLHTML(){
        let yakitoriImg = document.createElement("img");
        yakitoriImg.src = "images/FACD6797-171A-40B9-A030-62FB78DF7A19.png"
        yakitoriImg.classList.add("col-12","col-md-6","d-flex","justify-content-center","align-items-center")

        return yakitoriImg;
    
    }

    // 焼き鳥の説明と焼き鳥の部位(画像)
    static createRHTML(){
        let rightDiv = document.createElement("div");
        rightDiv.classList.add("col-12","col-md-6","d-flex","flex-column");
        
        // let explaDiv = document.createElement("div");
        // explaDiv.classList.add()
        // explaDiv.innerHTML = "サンプル"
        let explaDiv = Machine.createExplaHTML();
        rightDiv.append(explaDiv);

        // let sliderDiv = document.createElement("div");
        // sliderDiv.classList.add()
        // sliderDiv.innerHTML = "サンプル２";
        let sliderDiv = Machine.createSlider();
        rightDiv.append(sliderDiv);

        return rightDiv;
    }
     
    // 焼き鳥の説明
    static createExplaHTML(){
        let explaDiv = document.createElement("div");
        explaDiv.classList.add("border","bg-white","pt-3")
        explaDiv.innerHTML = 
        `
        <div class="d-flex">
            <p class="col-6 anek-font border-bottom">番号: </p>
            <input id="yakitoriId" class="col-6 bg-white none-border text-red" disabled="true">
        </div>
        <div class="d-flex">
            <p class="col-6 anek-font border-bottom">部位: </p>
            <p id="part" class="col-6 anek-font"></p>
        </div>
        <div class="d-flex">
            <p class="col-6 anek-font border-bottom">特徴: </p>
            <p id="onePhrase" class="col-6 anek-font"></p>
        </div>
        `
        return explaDiv
    }
    
    // 焼き鳥の部位(画像)
    static createSlider(){
        let sliderDiv = document.createElement("div");
        sliderDiv.id = "slider";
        sliderDiv.classList.add("d-flex","justify-content-center","align-items-center","mt-5")

        let main = document.createElement("div");
        main.classList.add("main","appearImg");
        main.setAttribute("data-index","undefined");
        let extra = document.createElement("div");
        extra.classList.add("extra","disappearImg");

        sliderDiv.append(main);
        sliderDiv.append(extra);

        return sliderDiv;
    }

   

    //ボタン式(キーボード式)
    static createKeydown(){
        let body = document.querySelectorAll("body")[0];
        body.addEventListener("keydown",function(event){
            let key = event.key;
            console.log(key)
            let keyN = parseInt(key);
            let yakitoriId = document.getElementById("yakitoriId");

            if(0 <= keyN && keyN <= 9){
                
                yakitoriId.value += keyN.toString();
            }
            if(key == "Enter"){
                if(yakitoriId.value >= yakitoriList.length){
                    alert("please enter Yakitori number from 0 to 15.");
                }
                else{
                    Machine.newestInfo(yakitoriId.value);
                    Machine.newestSlider(yakitoriId.value);
                }
            }
            if(key == "c"){
                yakitoriId.value = "";
            }
            if(key == "Backspace"){
                let idString = yakitoriId.value;
                yakitoriId.value = idString.substring(0,idString.length-1);
            }

        })
    }

    //説明更新
    static newestInfo(id){
        let currentInfo = yakitoriList[id];

        document.getElementById("yakitoriId").value = id;
        document.querySelector("#part").innerHTML = `${currentInfo.part}`;
        document.getElementById("onePhrase").innerHTML = currentInfo.onePhrase;
    }

    //画像更新
    static newestSlider(id){
        let main = document.querySelector(".main");
        let extra = document.querySelector(".extra");
        // console.log(main.innerHTML);
        
        // main.setAttribute("data-index",undefined);
        let currentId =  (main.getAttribute("data-index") === "undefined") ? 0 : parseInt(main.getAttribute("data-index"));
        let next = yakitoriList[id];
        
        extra.innerHTML = `<img src="${yakitoriList[currentId].url}" class="img-fluid">`;
        main.innerHTML = "";
        main.innerHTML = 
        `
        <img src="${next.url}" class="img-fluid">
        `;
        main.setAttribute("data-index",`${id.toString()}`);

        let sliderDiv = document.getElementById("slider");
        if (id > currentId){
            sliderDiv.innerHTML = "";
            sliderDiv.append(extra);
            sliderDiv.append(main);
        }
        else{
            sliderDiv.innerHTML = "";
            sliderDiv.append(main);
            sliderDiv.append(extra);
        }
    }

}

//Yakitori Machineの作成
Machine.createHTML();
Machine.createKeydown();


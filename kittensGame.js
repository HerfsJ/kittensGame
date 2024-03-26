function isEn(id){
    let checkboxID = "checkbox"+id;
    return $("#"+checkboxID).is(":checked");
}

function aCO(element, id, label){
    let checkboxID = "checkbox"+id;
    let checkbox = $("<input id="+checkboxID+" type='checkbox'/>")
    let labelDiv = $("<label for='"+checkboxID+"'>"+label+"</label>");
    let div = $("<div></div>");
    $(div).append(checkbox);
    $(div).append(labelDiv);
    $(element).append(div);
}

function getResourceValues(name){
    let resourceValues = {};
    let container = $(".resource_"+name);
    resourceValues["amount"] = $("container").find(".resAmount").text();
    resourceValues["maxamount"] = $("container").find(".maxRes").text();
    return resourceValues();
}

function resourceIsFull(name){
    let container = $(".resource_"+name);
    if($(container).find(".resLimitNotice").length){
        return true;
    }
    return false;
}

function establishcCent(){
    let cCent = $("#cCent");
    if(!cCent.length){
        cCent = $("<div></div>");
        $("body").append(cCent);
        $(cCent).css({
            position:"fixed",
            bottom: "50px",
            right: "50px",
            "background-color":"white"
        });

        //Allgemeine Einstellungen
        aCO(cCent, "allowTabChange", "Tab wechsel erlauben");

        //Events
        aCO(cCent, "observeButtonClick", "Automaitsch Himmel beobachten");
        aCO(cCent, "huntClick", "Jäger entsenden");
        aCO(cCent, "sonnelobenClick", "Sonne loben");

        //Gebäudeproduktion
        aCO(cCent, "houseProduceClick", " Häuser b.");
        aCO(cCent, "villaProduceClick", " Villa b.");
        aCO(cCent, "scheuneProduceClick", " Scheune b.");
        aCO(cCent, "libraryProduceClick", " Bücherei b.");
        aCO(cCent, "akademieProduceClick", " Akademie b.");
        aCO(cCent, "lagerhausProduceClick", " Lagerhaus b.");
        aCO(cCent, "einhornweideProduceClick", " Einhornweide b.");
        aCO(cCent, "amphiProduceClick", " Amphitheater b.");
        aCO(cCent, "saegewerkProduceClick", " Sägewerk b.");
        aCO(cCent, "bergwerkProduceClick", " Bergwerk b.");
        aCO(cCent, "handelspostenProduceClick", " Handelsposten b.");
        aCO(cCent, "schmelzhuetteProduceClick", " Schmelzhütte b.");
        aCO(cCent, "werkstattProduceClick", " Werkstatt b.");

        //Ressourcenproduktion
        aCO(cCent, "balkenProduceClick", " Balken produzieren");
        aCO(cCent, "geruestProduceClick", " Gerüst produzieren");
        aCO(cCent, "plattenProduceClick", " Platten produzieren");
        aCO(cCent, "pergamentProduceClick", " Pergament produzieren");
        aCO(cCent, "manuskriptProduceClick", " Manuskript produzieren");
        aCO(cCent, "kompediumProduceClick", " Kompedium produzieren");
        aCO(cCent, "entwurfProduceClick", " Entwurf produzieren");
        aCO(cCent, "stahlProduceClick", " Stahl produzieren");
        aCO(cCent, "eisenplattenProduceClick", " Eisenplatten produzieren");
        aCO(cCent, "megalithProduceClick", " Megalith produzieren");
        aCO(cCent, "shipProduceClick", " Schiffe produzieren");

        aCO(cCent, "automaticTradeClick", " Handeln");
    }
}

function changeTab(name){
    if(isEn("allowTabChange")){
        let x = $(".tab."+name)[0];
        if(x){
            x.click();
        }
        return true;
    } 

    return false;
}

function bBu(possibleNames){
    if(changeTab("Bonfire")) {
        possibleNames.forEach(function(x){
            $(".tabInner.Bonfire .bldTopContainer .bldGroupContainer .btnTitle:contains('"+x+"')").each(function(a,b){
                $(b).click();
            });
        });
    }
}

function loopBuilding(){
    if(isEn("houseProduceClick")){ bBu(['Hütte', 'Blockhaus']);}
    if(isEn("villaProduceClick")){ bBu(['Villa']);}
    if(isEn("scheuneProduceClick")){ bBu(['Scheune']);}
    if(isEn("libraryProduceClick")){ bBu(['Bücherei']);}
    if(isEn("einhornweideProduceClick")){ bBu(['Einhornweide']);}
    if(isEn("lagerhausProduceClick")){ bBu(['Lagerhaus']);}
    if(isEn("akademieProduceClick")){ bBu(['Akademie']);}
    if(isEn("amphiProduceClick")){ bBu(['Amphitheater']);}
    if(isEn("saegewerkProduceClick")){ bBu(['Sägewerk']);}
    if(isEn("bergwerkProduceClick")){ bBu(['Bergwerk']);}
    if(isEn("handelspostenProduceClick")){ bBu(['Handelsposten']);}
    if(isEn("schmelzhuetteProduceClick")){ bBu(['Schmelzhütte']);}
    if(isEn("werkstattProduceClick")){ bBu(['Werkstatt']);}
    setTimeout(loopBuilding, 10000);
}

function loopFunction(){
    if(isEn("huntClick")){  
        if(resourceIsFull("manpower")){
            $('#fastHuntContainerCount').click();
        }
    }
    if(isEn("observeButtonClick")){  $('#observeBtn').click();}
    if(isEn("sonnelobenClick")){ $('#fastPraiseContainer a')[0].click();}


    if(isEn("balkenProduceClick")){      
        if(resourceIsFull("wood")){
            $('.resource_beam .craft-link.all').click();
        }  
    }
    if(isEn("geruestProduceClick")){$('.resource_scaffold .craft-link.all').click();}
    if(isEn("plattenProduceClick")){      
        if(resourceIsFull("minerals")){
            $('.resource_slab .craft-link.all').click();
        }
    }
    if(isEn("eisenplattenProduceClick")){  $('.resource_plate .craft-link.all').click();}
    if(isEn("pergamentProduceClick")){  $('.resource_parchment .craft-link.all').click();}
    if(isEn("manuskriptProduceClick")){  $('.resource_manuscript .craft-link.all').click();}
    if(isEn("kompediumProduceClick")){  $('.resource_compedium .craft-link.all').click();}
    if(isEn("stahlProduceClick")){  $('.resource_steel .craft-link.all').click();}
    if(isEn("megalithProduceClick")){  $('.resource_megalith .craft-link.all').click();}
    if(isEn("shipProduceClick")){  $('.resource_ship .craft-link.all').click();}
    if(isEn("entwurfProduceClick")){  $('.resource_blueprint .craft-link.all').click();}
    

    if(isEn("automaticTradeClick")){
        console.log($("#fastPraiseContainer").next().find("a:contains('Handel')"));
        try{
            $("#fastPraiseContainer").next().find("a:contains('Handel')")[0].click();
        }catch(e){}
    }


    setTimeout(loopFunction, 500);
}

establishcCent();
loopFunction();
loopBuilding();



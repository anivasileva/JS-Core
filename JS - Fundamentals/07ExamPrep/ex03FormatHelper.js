function format(inputArr) {
    let text = inputArr[0];
    text = text.replace(/[.,!?:;]\s*/g, (match) => match.trim() + ' ');// tuk mojem da slojim func replacer
    text = text.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    text=text.replace(/\.\s*\.\s*\.\s*!/g,(match) => match.trim());
    text=text.replace(/(\.\s+)(\d+)/g,(match,gr1,gr2)=>gr1.trim()+gr2);
    text=text.replace(/"(\s*[^"]+\s*)"/g,(match,gr1)=>`"${gr1.trim()}"`);

    console.log(text);
    /*  function replacer(match,gr1,gr2,indexOf,text) {
     moje da ni priema celiqm tatch, posle priema samite grypo grypa 1,2,3.., posle
     idva indeksa na matcha, nakraq ni idva celiqt tekst
     }*/

}

format(['Make,sure to give:proper spacing where is needed... ! Terribly formatted text.']);


function designerPdfViewer(h: number[], word: string): number {
    // let max = 0;
    // for (let i = 0; i < word.length; i++) {
    //     let index = word.charCodeAt(i) - 97;
    //     if (h[index] > max) max = h[index]
    // }
    // return max * word.length;
    return word.split('').reduce((acc, cur) => acc + h[cur.charCodeAt(0) - 97], 0) * word.length;
}

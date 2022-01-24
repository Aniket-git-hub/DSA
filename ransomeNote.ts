/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine:Array<string>, note:Array<string>):boolean {
    // Write your code here
    for(let i = 0; i < magazine.length; i++){
        if(magazine[i] == note[0]){
            note.shift()
            if(note.length == 0){
                return true
            }
            checkMagazine(magazine, note)
        }
    }
    return false
}

checkMagazine(["Give", "me", "one", "grand", "today", "night"], ["give", "one", "grand", "today"])

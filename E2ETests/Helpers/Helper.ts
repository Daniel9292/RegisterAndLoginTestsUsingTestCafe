export abstract class Helper {
    public static makeUniqueEmail(testPhrase1: string, testPhrase2: string, domain: string): string {
        let text = ''
        const possibleChars = '1234567890';

        for(let i = 0; i < 4; i++){
            text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
        }

        text = testPhrase1 + testPhrase2 + text + '@' + domain;

        return text;
    }
}
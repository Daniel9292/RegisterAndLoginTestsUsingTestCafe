import { Selector } from 'testcafe';

export abstract class SuccessPageInfo {
    static SuccessPage(){
        return Selector('#common-success')
    }

    static SuccessPageInfoHeader(){
        return this.SuccessPage()
        .find('#content')
        .child()
    }
}
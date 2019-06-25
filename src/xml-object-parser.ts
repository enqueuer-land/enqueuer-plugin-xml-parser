import {MainInstance, ObjectParser} from 'enqueuer';

const pixl = require('pixl-xml');

export class XmlObjectParser implements ObjectParser {
    parse(value: string, query?: any): object {
        return pixl.parse(value, query);
    }
}

export function entryPoint(mainInstance: MainInstance): void {
    mainInstance.objectParserManager.addObjectParser(() => new XmlObjectParser(), 'xml');
}

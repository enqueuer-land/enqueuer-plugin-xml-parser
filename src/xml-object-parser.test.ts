import {entryPoint, XmlObjectParser} from './xml-object-parser';
import {MainInstance} from 'enqueuer';

describe('XmlObjectParser', () => {

    test('should parse', () => {
        const value = '<root><firstLevel firstAtt="love">123</firstLevel></root>';

        const parsed: any = new XmlObjectParser().parse(value);

        expect(parsed.firstLevel['_Data']).toBe('123');
        expect(parsed.firstLevel.firstAtt).toBe('love');
    });

    test('should throw parse error', () => {
        const notYml = 'foo bar\nfoo: bar';

        expect(() => new XmlObjectParser().parse(notYml)).toThrow();
    });

    it('Should export an entry point', done => {
        const mainInstance: MainInstance = {
            // @ts-ignore
            objectParserManager: {
                addObjectParser: (createFunction: any, ...tags: any) => {
                    expect(createFunction()).toBeInstanceOf(XmlObjectParser);
                    expect(tags.sort()).toEqual(['xml'].sort());
                    done();
                }
            }
        };
        entryPoint(mainInstance);
    });

});

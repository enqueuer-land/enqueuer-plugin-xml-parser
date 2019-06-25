import * as parser from './xml-object-parser';
import {MainInstance} from 'enqueuer';

export function entryPoint(mainInstance: MainInstance): void {
    parser.entryPoint(mainInstance);
}

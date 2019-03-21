import * as parser from './xml-object-parser';
import {MainInstance} from 'enqueuer-plugins-template';

export function entryPoint(mainInstance: MainInstance): void {
    parser.entryPoint(mainInstance);
}

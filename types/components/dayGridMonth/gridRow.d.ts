import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { CellStyle } from "../../types/time/datetime";
interface Props {
    gridDateEventModelMap?: Record<string, EventUIModel[]>;
    week: TZDate[];
    rowInfo: CellStyle[];
    contentAreaHeight: number;
    isOneEventCalendar?: boolean;
    height?: number;
}
export declare const GridRow: import("preact").FunctionComponent<Props>;
export {};

import type EventUIModel from "../../model/eventUIModel";
interface Props {
    name: string;
    contentAreaHeight: number;
    eventHeight?: number;
    events: EventUIModel[];
    className: string;
    isOneEventCalendar?: boolean;
}
export declare const MonthEvents: import("preact").FunctionComponent<Props>;
export {};

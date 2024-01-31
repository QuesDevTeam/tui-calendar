import { h } from 'preact';
import { CellBarType } from "../../constants/grid";
import type TZDate from "../../time/date";
interface Props {
    type?: CellBarType;
    exceedCount?: number;
    date: TZDate;
    onClickExceedCount: () => void;
    isOneEventCalendar?: boolean;
}
export declare function CellHeader({ type, exceedCount, date, onClickExceedCount, isOneEventCalendar, }: Props): h.JSX.Element | null;
export {};

/** @noSelfInFile **/
declare namespace time {
    // Returns the current Unix timestamp in seconds.
    function unix(): number;

    // Returns the current Unix timestamp in milliseconds.
    function unix_ms(): number;

    // Returns the current UTC time as a formatted string.
    function now_utc(): string;

    // Returns the current local time as a formatted string.
    function now_local(): string;

    // Converts a timestamp to a local date-time string.
    function format(timestamp: number): string;

    // Formats timestamp using a custom format string (UTC).
    function format_custom(timestamp: number, format: string): string;

    // Returns the difference between timestamps in seconds.
    function delta(t1: number, t2: number): number;

    // Compares two timestamps (returns -1, 0, or 1).
    function compare(t1: number, t2: number): -1 | 0 | 1;

    // Returns true if both timestamps fall on the same calendar day.
    function same_day(t1: number, t2: number): boolean;

    // Returns breakdown of difference in days/hours/minutes/seconds.
    function diff_table(t1: number, t2: number): { days: number; hours: number; minutes: number; seconds: number };

    // Checks if a timestamp falls within a range.
    function between(now: number, start: number, end: number): boolean;

    // Gets weekday (0 = Sunday to 6 = Saturday).
    function weekday(timestamp: number): number;

    // Returns the day number within the year.
    function day_of_year(timestamp: number): number;

    // Returns a table with year, month, and day.
    function year_month_day(timestamp: number): { year: number; month: number; day: number };

    // Returns true if timestamp is Saturday or Sunday.
    function is_weekend(timestamp: number): boolean;

    // Checks if the year is a leap year.
    function is_leap_year(timestamp: number): boolean;

    // Returns number of days in a given month/year.
    function days_in_month(year: number, month: number): number;

    // Converts date to a UTC timestamp.
    function timestamp_utc(y: number, m: number, d: number, h: number, min: number, s: number): number;

    // Adds (or subtracts) days to a timestamp.
    function add_days(timestamp: number, days: number): number;

    // Returns timestamp for 00:00:00.
    function start_of_day(timestamp: number): number;

    // Returns timestamp for 23:59:59.
    function end_of_day(timestamp: number): number;

    // Converts to a local date-time table.
    function to_table(timestamp: number): TimeStruct;

    // Converts local date-time table to timestamp.
    function from_table(table: TimeStruct): number;

    // Converts to a UTC date-time table.
    function to_utc_table(timestamp: number): TimeStruct;

    // Converts UTC date-time table to timestamp.
    function from_utc_table(table: TimeStruct): number;

    // Checks if timestamp is valid.
    function is_valid(timestamp: number): boolean;

    // Returns true if timestamp is in DST.
    function is_dst(timestamp: number): boolean;

    // Returns the local time offset from UTC in seconds.
    function utc_offset(): number;

    // Returns the time zone string (e.g., UTC-03:00).
    function get_timezone(): string;

    // Converts seconds to HH:MM:SS format.
    function seconds_to_hhmmss(seconds: number): string;

    // Common constants.
    const SECONDS_PER_MINUTE: number;
    const SECONDS_PER_HOUR: number;
    const SECONDS_PER_DAY: number;
    const DAYS_PER_WEEK: number;

    // Table of weekday names (1 = Sunday, 7 = Saturday).
    const WEEKDAY_NAMES: string[];

    // Table of month names (1 = January, 12 = December).
    const MONTH_NAMES: string[];

    // Days in each month (non-leap).
    const MONTH_DAYS: number[];

    // Days in each month (leap year).
    const MONTH_DAYS_LEAP: number[];

    // Maps month names to numeric indexes.
    const MONTH_NAME_TO_INDEX: Record<string, number>;
}

interface TimeStruct {
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    sec: number;
}

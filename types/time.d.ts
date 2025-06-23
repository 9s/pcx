/** @noSelfInFile */

declare namespace time {
    /**
     * Returns the current Unix timestamp in seconds.
     * @returns Current Unix timestamp.
     */
    function unix(): number;

    /**
     * Returns the current Unix timestamp in milliseconds.
     * @returns Current Unix timestamp in milliseconds.
     */
    function unix_ms(): number;

    /**
     * Returns the current UTC time as a formatted string.
     * @returns Current UTC time string.
     */
    function now_utc(): string;

    /**
     * Returns the current local time as a formatted string.
     * @returns Current local time string.
     */
    function now_local(): string;

    /**
     * Converts a timestamp to a local date-time string.
     * @param timestamp Unix timestamp in seconds.
     * @returns Local date-time string.
     */
    function format(timestamp: number): string;

    /**
     * Formats a timestamp using a custom format string (UTC).
     * @param timestamp Unix timestamp in seconds.
     * @param format Custom format string.
     * @returns Formatted date-time string.
     */
    function format_custom(timestamp: number, format: string): string;

    /**
     * Returns the difference between two timestamps in seconds.
     * @param t1 First timestamp.
     * @param t2 Second timestamp.
     * @returns Difference in seconds.
     */
    function delta(t1: number, t2: number): number;

    /**
     * Compares two timestamps.
     * @param t1 First timestamp.
     * @param t2 Second timestamp.
     * @returns -1 if t1 < t2, 0 if equal, 1 if t1 > t2.
     */
    function compare(t1: number, t2: number): -1 | 0 | 1;

    /**
     * Returns true if both timestamps fall on the same calendar day.
     * @param t1 First timestamp.
     * @param t2 Second timestamp.
     * @returns True if same day.
     */
    function same_day(t1: number, t2: number): boolean;

    /**
     * Returns breakdown of difference in days, hours, minutes, and seconds.
     * @param t1 First timestamp.
     * @param t2 Second timestamp.
     * @returns Object with days, hours, minutes, seconds.
     */
    function diff_table(t1: number, t2: number): {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };

    /**
     * Checks if a timestamp falls within a range.
     * @param now Timestamp to check.
     * @param start Start timestamp.
     * @param end End timestamp.
     * @returns True if within range.
     */
    function between(now: number, start: number, end: number): boolean;

    /**
     * Gets weekday (0 = Sunday to 6 = Saturday).
     * @param timestamp Unix timestamp.
     * @returns Weekday number.
     */
    function weekday(timestamp: number): 0 | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * Returns the day number within the year.
     * @param timestamp Unix timestamp.
     * @returns Day of the year.
     */
    function day_of_year(timestamp: number): number;

    /**
     * Returns a table with year, month, and day.
     * @param timestamp Unix timestamp.
     * @returns Object with year, month, day.
     */
    function year_month_day(timestamp: number): {
        year: number;
        month: number;
        day: number;
    };

    /**
     * Returns true if timestamp is Saturday or Sunday.
     * @param timestamp Unix timestamp.
     * @returns True if weekend.
     */
    function is_weekend(timestamp: number): boolean;

    /**
     * Checks if the year is a leap year.
     * @param timestamp Unix timestamp.
     * @returns True if leap year.
     */
    function is_leap_year(timestamp: number): boolean;

    /**
     * Returns number of days in a given month/year.
     * @param year Full year number.
     * @param month Month number (1-12).
     * @returns Days in the month.
     */
    function days_in_month(year: number, month: number): number;

    /**
     * Converts date components to a UTC timestamp.
     * @param y Year.
     * @param m Month.
     * @param d Day.
     * @param h Hour.
     * @param min Minute.
     * @param s Second.
     * @returns Unix timestamp.
     */
    function timestamp_utc(y: number, m: number, d: number, h: number, min: number, s: number): number;

    /**
     * Adds (or subtracts) days to a timestamp.
     * @param timestamp Base timestamp.
     * @param days Number of days to add.
     * @returns New timestamp.
     */
    function add_days(timestamp: number, days: number): number;

    /**
     * Returns timestamp for 00:00:00 of the day.
     * @param timestamp Base timestamp.
     * @returns Start of day timestamp.
     */
    function start_of_day(timestamp: number): number;

    /**
     * Returns timestamp for 23:59:59 of the day.
     * @param timestamp Base timestamp.
     * @returns End of day timestamp.
     */
    function end_of_day(timestamp: number): number;

    /**
     * Converts to a local date-time table.
     * @param timestamp Unix timestamp.
     * @returns Object with year, month, day, hour, min, sec.
     */
    function to_table(timestamp: number): {
        year: number;
        month: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    };

    /**
     * Converts local date-time table to timestamp.
     * @param table Table containing date-time parts.
     * @returns Unix timestamp.
     */
    function from_table(table: {
        year: number;
        month: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    }): number;

    /**
     * Converts to a UTC date-time table.
     * @param timestamp Unix timestamp.
     * @returns Object with year, month, day, hour, min, sec.
     */
    function to_utc_table(timestamp: number): {
        year: number;
        month: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    };

    /**
     * Converts UTC date-time table to timestamp.
     * @param table Table containing date-time parts.
     * @returns Unix timestamp.
     */
    function from_utc_table(table: {
        year: number;
        month: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    }): number;

    /**
     * Checks if timestamp is valid.
     * @param timestamp Unix timestamp.
     * @returns True if valid.
     */
    function is_valid(timestamp: number): boolean;

    /**
     * Returns true if timestamp is in Daylight Saving Time.
     * @param timestamp Unix timestamp.
     * @returns True if in DST.
     */
    function is_dst(timestamp: number): boolean;

    /**
     * Returns the local time offset from UTC in seconds.
     * @returns Local UTC offset in seconds.
     */
    function utc_offset(): number;

    /**
     * Returns the time zone string (e.g., UTC-03:00).
     * @returns Time zone string.
     */
    function get_timezone(): string;

    /**
     * Converts seconds to HH:MM:SS format.
     * @param seconds Number of seconds.
     * @returns Formatted string.
     */
    function seconds_to_hhmmss(seconds: number): string;

    /**
     * Number of seconds per minute.
     */
    const SECONDS_PER_MINUTE: number;

    /**
     * Number of seconds per hour.
     */
    const SECONDS_PER_HOUR: number;

    /**
     * Number of seconds per day.
     */
    const SECONDS_PER_DAY: number;

    /**
     * Number of days per week.
     */
    const DAYS_PER_WEEK: number;

    /**
     * Table of weekday names (1 = Sunday, 7 = Saturday).
     */
    const WEEKDAY_NAMES: readonly string[];

    /**
     * Table of month names (1 = January, 12 = December).
     */
    const MONTH_NAMES: readonly string[];

    /**
     * Days in each month (non-leap year).
     */
    const MONTH_DAYS: readonly number[];

    /**
     * Days in each month (leap year).
     */
    const MONTH_DAYS_LEAP: readonly number[];

    /**
     * Maps month names to numeric indexes.
     */
    const MONTH_NAME_TO_INDEX: Readonly<Record<string, number>>;
}

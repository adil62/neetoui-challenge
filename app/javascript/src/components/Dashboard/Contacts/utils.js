import dayjs from "dayjs";

export const formatToMonthDate = date => dayjs(date).format("MMM, D, YYYY");

export const noop = () => {};
